import React, {Component} from 'react';
import {Container, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {fetchapi} from "./fetchapi"
import { faLaptop, faLaptopCode, faCheckSquare, faQuestionCircle, faThumbsUp, faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const customCard = {
  background: "#f6def6",
  height: "95vh",
  margin : "0"
}

const fontColor = {
  color: "#373a40"
}



class About extends Component{
  constructor(){
    super()
   
    }
  
  
  
  render(){

  return (
      <Container>
      <div className="card mb-4" style={customCard}>
      <h1 className="mt-4 text-center" style={fontColor}>ABOUT  <FontAwesomeIcon icon={faLaptopCode} /></h1>
      
      <Container className="mt-5">
      
          <Row className="mt-5">

              <Col lg={3} md={3} sm={3}>
                <div></div>
              </Col>
        
              <Col lg={6} md={6} sm={6}>
                  <div className="">
                    <p><FontAwesomeIcon icon={faQuestionCircle} /> HAVE an extra tablet lying around in your house</p>
                    <p><FontAwesomeIcon icon={faQuestionCircle} /> HATE expensive ride hailing services fee</p>
                    <p><FontAwesomeIcon icon={faQuestionCircle} /> LOVE to take the public transport but hate to wait</p> 
                    <h3 className="mt-5"><FontAwesomeIcon icon={faThumbsUp} /> This is the app for you then</h3>
                    <p >App to show bus timings like of those in MRT stations!</p>
                    <h1 className="mt-5">WHY use busApp</h1>
                    <ul className="">
                    <li><FontAwesomeIcon icon={faStar} /> Tested on older browsers</li>
                    <li><FontAwesomeIcon icon={faStar} /> Works on all browsers </li>
                    <li><FontAwesomeIcon icon={faStar} /> BIG (visible from far)</li>
                    <li><FontAwesomeIcon icon={faStar} /> No downloads needed</li>
                    <li><FontAwesomeIcon icon={faStar} /> Auto refresh ETAs</li>
                    <li><FontAwesomeIcon icon={faStar} /> Night Mode</li>
                    <li></li>
                  </ul>
                    </div>
              </Col>
            
          
              <Col lg={3} md={3} sm={3}>
                  <div></div>
              </Col>

          </Row>
     

      </Container>
      </div>
      </Container>
  )}
}

export default About;
