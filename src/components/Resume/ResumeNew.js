import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <h1 className="project-heading">
          What I Have <strong className="purple">Done So Far </strong>
        </h1>
        <h1 className="heading-name">
          Work <strong className="main-name">Experience.</strong>
        </h1>

        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-content left">
              <div className="experience-card">
                <h3>React.js Developer</h3>
                <h4>Starbucks</h4>
                <p className="timeline-date">March 2020 - April 2021</p>
                <ul>
                  <li>
                    Developing and maintaining web applications using React.js
                    and other related technologies.
                  </li>
                  <li>
                    Collaborating with cross-functional teams including
                    designers, product managers, and other developers to create
                    high-quality products.
                  </li>
                  <li>
                    Implementing responsive design and ensuring cross-browser
                    compatibility.
                  </li>
                  <li>
                    Participating in code reviews and providing constructive
                    feedback to other developers.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content right">
              <div className="experience-card">
                <h3>React Native Developer</h3>
                <h4>Tesla</h4>
                <p className="timeline-date">Jan 2021 - Feb 2022</p>
                <ul>
                  <li>
                    Developing and maintaining web applications using React.js
                    and other related technologies.
                  </li>
                  <li>
                    Collaborating with cross-functional teams including
                    designers, product managers, and other developers to create
                    high-quality products.
                  </li>
                  <li>
                    Implementing responsive design and ensuring cross-browser
                    compatibility.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content left">
              <div className="experience-card">
                <h3>Frontend Developer</h3>
                <h4>Microsoft</h4>
                <p className="timeline-date">March 2022 - Present</p>
                <ul>
                  <li>
                    Leading frontend development for key Microsoft products
                    using React and TypeScript.
                  </li>
                  <li>
                    Architecting scalable solutions and implementing best
                    practices for code quality.
                  </li>
                  <li>
                    Mentoring junior developers and conducting technical
                    interviews.
                  </li>
                  <li>
                    Optimizing application performance and implementing CI/CD
                    pipelines.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
