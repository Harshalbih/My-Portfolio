import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import netflixi from "../assets/img/netflixi.png";
import onlinei from "../assets/img/onlinemeali.png";
import multii from "../assets/img/multii.png";
import chatgpti from "../assets/img/chatgp.png";
import weatheri from "../assets/img/weatheric.png";
import gitprofi from "../assets/img/gitprofi.png";
import projBg from "../assets/img/color-sharp2.png";

function Projects() {
  const projects = [
    {
      title: "NetFlix Clone",
      description: "Netflix Clone created using API. Used React Hooks, Axios, Icons. Taken care of scrolling lists & used scss.",
      imgUrl: netflixi,
      url: "https://harshalbih.github.io/Netflix/",
    },
    {
      title: "Online Meal Site",
      description: "A fully responsive and mostly static site built using vanilla JavaScript, CSS3.",
      imgUrl: onlinei,
      url: "https://harshalbih.github.io/Online_meal_Site/"
    },
    {
      title: "React-Tailwind",
      description: "React Router app of Accordions, Dropdown, Buttons, Modal, Table components using Tailwind CSS",
      imgUrl: multii,
      url:"https://harshalbih.github.io/React-tailwind/"
    },
    {
      title: "ChatGPT",
      description: "Working ChatGPT clone built in reactjs using openai api and react hooks.",
      imgUrl: chatgpti,
      url:'https://harshalbih.github.io/ChatGPT-Clone-ReactJs/'
    },
    {
      title: "Weather App",
      description: "Weather app with openweather api integration and features.",
      imgUrl: weatheri,
      url: "https://harshalbih.github.io/weather-app/"
    },
    {
      title: "Github Profile",
      description: "Visit my Github profile to see Another projects like Image Search App, To Do App, Covid19-tracker, Smartwatch site. Also you can check Daily React Repo for more insights ",
      imgUrl: gitprofi,
      url:"https://github.com/Harshalbih"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Here is glimpse of projects I have done so far. Most of the
              projects are done on React and Vanilla JavaScript. I have posted
              them on github pages so you have have a look by clicking on them.
            </p>
            <Row>
              {projects.map((project, index) => {
                return (
                    <Col sm={6} md={4}  key={index}>
                      <a href={project.url} target="blank">
                  <div className="proj-imgbx">
                    
                      <img src={project.imgUrl} alt="projimg">
                      </img>
                      <div className="proj-txtx">
                        <h4>{project.title}</h4>
                        <span>{project.description}</span>
                      </div>
                   
                  </div>
                  </a>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <img src= {projBg} className="proj-bg"  alt="projbg"/>
    </section>
  );
}

export default Projects;
