import React from 'react';
import '../../components/menuSamanta/index.css'
import { Navbar, Nav,  } from 'react-bootstrap';
import Ham from './../hamburger';


const menu =() => {
  
  return(
    
    
    <Navbar className="banner">
   
    <Navbar.Brand href="#home" className="home"  >
        <img
        src="https://www.brq.com/images/logo-brq.png"
        width="140"
        height="100"
        className="logo"
        alt="Logo da BRQ"
        />
       
        <Ham id='botaum'/>
      
     <Nav className="links" >
        <Nav.Link id='menu' style={{textDecoration: '#192026'}} href="#home">Home</Nav.Link>
        <Nav.Link id='menu' style={{textDecoration: '#192026'}} href="#Quemsomos">Quem somos</Nav.Link>
        <Nav.Link id='menu' style={{textDecoration: '#192026'}} href="#Servicos">Serviços</Nav.Link>
        <Nav.Link id='menu' style={{textDecoration: '#192026'}} href="#Integrantes">Integrantes</Nav.Link>
      </Nav>
        </Navbar.Brand>
        
        
      
  </Navbar>
       
       )
       
       
      }
      
      export default menu;