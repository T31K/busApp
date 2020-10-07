import React, {Component} from 'react';
import {Container, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {fetchapi} from "./fetchapi"
import { faLaptopCode, faCheckSquare, faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faStar, faFileCode, faMedal, faStream} from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle, faSearch, faUserEdit, faCog , faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const customCard = {
  background: "#d4ebd0",
  height: "135vh",
  margin : "0"
}

const fontColor = {
  color: "#373a40"
}



class Help extends Component{
  constructor(){
    super()
   
    }
  
 
  render(){

  return (
      <Container>
      <div className="card mb-4" style={customCard}>
      <h1 className="mt-4 text-center " style={fontColor}>HOW TO USE <FontAwesomeIcon icon={faInfoCircle} /></h1>
      
      
      <Container className="mt-5">
      
          <Row className="mt-5">

              <Col lg={3} md={2} sm={1}>
                <div></div>
              </Col>
        
              <Col lg={6} md={8} sm={10}>
                  <div className="">
                      <h1 className="mt-5 mb-3 text-center"> TAP/CLICK  </h1>
                      <h3 className=""><FontAwesomeIcon icon={faSearch}/>  To Get ETAs</h3>
                      <h3 className=""><FontAwesomeIcon icon={faUserEdit} /> For Custom Name </h3>
                      <h3 className="text-danger"><FontAwesomeIcon icon={faCog} /> work in progress </h3>
                    </div>
                  
                  
              </Col>
            
          
              <Col lg={3} md={2} sm={1}>
                  <div></div>
              </Col>

          </Row>
     

          </Container>
    
      </div>
      </Container>
  )}
}

export default Help;

  //   <ul className="">
  //   <li><FontAwesomeIcon icon={faStream} /> ReactJS </li>
  //     <li><FontAwesomeIcon icon={faStream} /> HTML/CSS/JavaScript</li>
  // <li><FontAwesomeIcon icon={faStream} /> SASS</li>
  // <li><FontAwesomeIcon icon={faStream} /> React Bootstrap</li>
  //                   </ul>