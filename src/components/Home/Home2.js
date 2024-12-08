import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>About me</h1>
            <p className="home-about-body">
              I’m an enthusiastic programmer , deeply passionate about building
              cutting-edge &nbsp;
              <i>
                <b className="purple">Web Technologies </b> , scalable{" "}
                <b className="purple">Cloud solutions</b>
              </i>
              &nbsp; , and have dived into areas like
              <i>
                <b className="purple"> Devops </b>
              </i>
              &nbsp; and
              <i>
                <b className="purple"> Machine Learning. </b>
              </i>
              <br />
              My core expertise includes languages like
              <i>
                <b className="purple"> Python, C++, Go, and JavaScript </b>
              </i>
              &nbsp; , and I’ve had hands-on experience with essential libraries
              such as
              <i>
                <b className="purple">
                  {" "}
                  Tensorflow , scikit-learn , Keras , PyTorch , nltk and opencv.{" "}
                </b>
              </i>
              <br />
              With a solid background in
              <b className="purple"> Cloud deployment (AWS)</b> and
              <i>
                <b className="purple"> AI domains </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple">
                  {" "}
                  Data Science , Natural Language Processing
                </b>
              </i>
              &nbsp; and
              <i>
                <b className="purple"> Computer Vision</b>
              </i>
              &nbsp; , I’m constantly pushing myself to build products that
              solve real-world problems in innovative ways.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/snehaapratap"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/snehaapratap"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sneha-prem-pratap/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/snehaapratap/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
