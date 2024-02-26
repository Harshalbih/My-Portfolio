import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorsharp from '../assets/img/color-sharp.png';

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container >
        <Row >
          <Col>
          <div className="skill-bx">
            <h2>Skills</h2>
           <Carousel responsive={responsive} infinite= {true} className="owl-carousel owl-theme skill-slider">
              <div className="item">
                <img src={meter1} alt="Skill"/>
                <h5>Web Development</h5>
                </div>
                <div className="item">
                <img src={meter2} alt="Skill"/>
                <h5>ReactJs Development</h5>
                </div>
                <div className="item">
                <img src={meter3} alt="Skill"/>
                <h5>Agile/JIRA</h5>
                </div>
                <div className="item">
                <img src={meter1} alt="Skill"/>
                <h5>CSS/Tailwind</h5>
                </div>
                <div className="item">
                <img src={meter2} alt="Skill"/>
                <h5>JavaScript/jQuery</h5>
                </div>
                <div className="item">
                <img src={meter3} alt="Skill"/>
                <h5>Git/GitBucket</h5>
                </div>
                <div className="item">
                <img src={meter2} alt="Skill"/>
                <h5>Figma/Adobe Photoshop</h5>
                </div>
                <div className="item">
                <img src={meter2} alt="Skill"/>
                <h5>Bootstrap/Material UI</h5>
                </div>
            </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorsharp} alt="colorsharp"/>
    </section>
  );
}

export default Skills;
