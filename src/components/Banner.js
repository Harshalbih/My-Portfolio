import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg';
import resumepdf from '../assets/myresume.pdf';
import { BsArrowDownCircle } from "react-icons/bs";

function Banner() {
    const textItems = ['A Web Developer', 'A ReactJS Developer', 'A FrontEnd Developer'];
    const [curIndex, setCurIndex] = useState(0);

    useEffect(()=>{
        const textChangeInterval = setInterval(()=>{
            setCurIndex(prevIndex => (prevIndex + 1) % textItems.length)
        }, 2000);

        return() =>{
            clearInterval(textChangeInterval);
        }
    }, [textItems.length]);

  return (
    <section className="banner" id="home">
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} cl={7}>
                    <span className='tagline'>Welcome to My Portfolio</span>
                    <h2>{`Hi I'm Harshal Bihade`}</h2>
                    {textItems.map((text, index)=> (<h2 key={index} style={{ display: curIndex===index ? 'block' : 'none'}} className='leftright'>"{text}"</h2>))}
                    <p>Versatile Front-End UI Developer with 4+ years of experience in Designing, Developing and maintaining complex Healthcare, Pharmaceutical and E-commerce sites using a variety of Tools and Technologies such as HTML, Tailwind CSS, JavaScript, jQuery, React.js, Redux, Git, JIRA and Bootstrap.</p>
                    <button className='resume-btn'><a href={resumepdf} target='blank'>My Resume <BsArrowDownCircle size={25}/> </a></button>
                </Col>
                <Col xs={12} md={6} cl={7}>
                    <img src={headerImg} alt='banner img' />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner;