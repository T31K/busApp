import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSlidersH } from '@fortawesome/free-solid-svg-icons'

function Navigation(){
  // const element = <FontAwesomeIcon icon={faSlidersH} />
  return(
    
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#one">Haha</Nav.Link>
      <Nav.Link href="#two">sdfsdf</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  )
}

export default Navigation;