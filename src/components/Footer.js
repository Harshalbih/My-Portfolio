import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import mylogo from '../assets/img/newpp.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/git.png';

function Footer() {
  return (
   <section className='footer'>
    <Container>
        <Row>
            <Col sm={6}>
                <img src={mylogo} alt="Logo" />
            </Col>
            <Col sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/harshal-bihade/' target='blank'><img src={navIcon1} alt='linkedIn' /></a>
                <a href='https://github.com/Harshalbih' target='blank'><img src={navIcon2} alt='gitHub' /></a>
            </div>
            <p>Copyright<sup>©</sup> 2022-2024. All Rights Reserved, Powered By Harshal Bihade.</p>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Footer