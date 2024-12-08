import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import axios from "axios";

const LeetCodeCalendar = () => {
  const [stats, setStats] = useState({
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    acceptanceRate: 0,
    ranking: 0,
  });
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_LEETCODE_USERNAME' with your actual LeetCode username
    const username = "snehaapratap";

    // Fetch stats
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setStats({
          totalSolved: data.totalSolved,
          easySolved: data.easySolved,
          mediumSolved: data.mediumSolved,
          hardSolved: data.hardSolved,
          acceptanceRate: data.acceptanceRate,
          ranking: data.ranking,
        });
      })
      .catch((error) => console.error("Error fetching LeetCode stats:", error));

    // Fetch submission calendar data
    const query = `
      query userProfileCalendar($username: String!, $year: Int) {
        matchedUser(username: $username) {
          userCalendar(year: $year) {
            activeYears
            submissionCalendar
          }
        }
      }
    `;

    axios
      .post("https://leetcode.com/graphql", {
        query: query,
        variables: {
          username: username,
          year: new Date().getFullYear(),
        },
      })
      .then((response) => {
        const calendar = JSON.parse(
          response.data.data.matchedUser.userCalendar.submissionCalendar
        );

        // Convert the data to the format needed by CalendarHeatmap
        const values = Object.entries(calendar).map(([timestamp, count]) => ({
          date: new Date(timestamp * 1000).toISOString().split("T")[0],
          count: count,
        }));

        setSubmissions(values);
      })
      .catch((error) =>
        console.error("Error fetching submission calendar:", error)
      );
  }, []);

  return (
    <div className="leetcode-stats-container">
      <h2>My LeetCode Stats</h2>
      <div className="leetcode-stats-grid">
        <div className="stat-card">
          <h3>Problems Solved</h3>
          <p>{stats.totalSolved}</p>
        </div>
        <div className="stat-card">
          <h3>Easy</h3>
          <p>{stats.easySolved}</p>
        </div>
        <div className="stat-card">
          <h3>Medium</h3>
          <p>{stats.mediumSolved}</p>
        </div>
        <div className="stat-card">
          <h3>Hard</h3>
          <p>{stats.hardSolved}</p>
        </div>
        <div className="stat-card">
          <h3>Acceptance Rate</h3>
          <p>{stats.acceptanceRate}%</p>
        </div>
        <div className="stat-card">
          <h3>Ranking</h3>
          <p>{stats.ranking}</p>
        </div>
      </div>

      <div className="leetcode-heatmap-container">
        <h3>Submission Calendar</h3>
        <CalendarHeatmap
          startDate={new Date(new Date().getFullYear(), 0, 1)}
          endDate={new Date()}
          values={submissions}
          classForValue={(value) => {
            if (!value || value.count === 0) {
              return "color-empty";
            }
            return `color-scale-${Math.min(Math.ceil(value.count / 2), 4)}`;
          }}
          titleForValue={(value) => {
            if (!value) {
              return "No submissions";
            }
            return `${value.count} submissions on ${value.date}`;
          }}
          showWeekdayLabels={true}
        />
        <div className="heatmap-scale">
          <span>Less</span>
          <ul className="scale-labels">
            <li className="color-empty"></li>
            <li className="color-scale-1"></li>
            <li className="color-scale-2"></li>
            <li className="color-scale-3"></li>
            <li className="color-scale-4"></li>
          </ul>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeCalendar;
