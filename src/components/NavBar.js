import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Container } from 'react-bootstrap';
import {useState , useEffect} from  'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/git.png';
import logo from '../assets/img/newpp.png';

function NavBar() {
    const[activeLink, setActiveLink] = useState('home');
    const[scrolled,  setScrolled] = useState(false);

    useEffect(()=>{
        const onscroll =() =>{
        if(window.scrollY > 50){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }
        window.addEventListener("scroll", onscroll)
        return () =>  window.removeEventListener("scroll", onscroll);
    },[]);

    const onUpdateActiveLink = (value)=>{
        setActiveLink(value);
    }

    return (
    <div>
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt= "logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
            <a href='https://www.linkedin.com/in/harshal-bihade/' target='blank'><img src={navIcon1} alt='linkedIn' /></a>
            <a href='https://github.com/Harshalbih' target='blank'><img src={navIcon2} alt='gitHub' /></a>
            </div>
            <a href="#contact"><button className='contact-btn'>Contact Me</button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar;