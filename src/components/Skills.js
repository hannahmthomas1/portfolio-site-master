import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import resume from "../assets/img/resume-img.png";
// import colorSharp from "../assets/img/color-sharp.png";
import transition from "../assets/img/transition.png";

export const Skills = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row className="align-items-center">
          <div className="skill-bx">
            <Row>
              <Col md={6}>
                <h2>Experience & Education</h2>

                <a
                  href="https://www.canva.com/design/DAFvT0ak4_w/view?utm_content=DAFvT0ak4_w&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="button-test">Read my Resume</button>
                </a>
              </Col>
              <Col md={5}>
                <img src={resume} alt="" style={{ width: "70%" }} />
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
      <img className="" src={transition} alt="" style={{ width: "100%" }} />
    </section>
  );
};
