import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import different header image
import headerImg from "../assets/img/profile-yellow.png";
import border from "../assets/img/bubbles.png";
// import headerImg from "../assets/img/square-pic.jpg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  //   rotating words can be listed below
  const toRotate = [""];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section id="home">
      <Container className="banner">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Hello!</span>
            <h1>
              {"I'm Hannah Luebke "}
              <span classname="wrap">{text}</span>
            </h1>
            <p>
              I'm a UX Designer with a background in Web Development and
              Business Management.
            </p>
            {/* <button onClick={() => console.log("connect")}>
              Let's connect <ArrowRightCircle size={25} />
            </button> */}
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* change header image here */}
            <img src={headerImg} alt="header" />
          </Col>
        </Row>
      </Container>
      <img className="bubble-border" src={border} alt="border" />
    </section>
  );
};
