import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSlidersH } from '@fortawesome/free-solid-svg-icons'

function Navigation(){
  // const element = <FontAwesomeIcon icon={faSlidersH} />
  return(
    
  <Navbar collapseOnSelect expand="lg">
  
  <Navbar.Brand href="#home">busApp</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="float-right text-right">
      <Nav.Link href="#features">Add New</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default Navigation;