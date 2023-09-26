import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={2}></Col>
          <Col md={4}>
            <img src={contactImg} alt="Contact Us" style={{ width: "70%" }} />
          </Col>
          <Col md={4}>
            <h2>Get In Touch</h2>
            <p>luebkehan@gmail.com</p>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/hannahluebke/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/hannah.luebke/">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/_hannahluebke_/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </section>
  );
};
