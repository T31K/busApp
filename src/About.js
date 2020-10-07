import React, {Component} from 'react';
import {Container, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {fetchapi} from "./fetchapi"
import { faLaptop, faLaptopCode, faCheckSquare, faQuestionCircle, faThumbsUp} from "@fortawesome/free-solid-svg-icons";
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
      <div className="text-left mx-auto">
        <p className="mt-4 "><FontAwesomeIcon icon={faQuestionCircle} /> HAVE an extra tablet lying around in your house</p>
        <p className=""><FontAwesomeIcon icon={faQuestionCircle} /> HATE expensive ride hailing services fee</p>
        <p className=""><FontAwesomeIcon icon={faQuestionCircle} /> LOVE to take the public transport but hate to wait</p>
      </div>

      <div className="text-left mx-auto mt-4">
      <h3 className=""><FontAwesomeIcon icon={faThumbsUp} /> This is the app for you then</h3>
 
      </div>
      
      </div>
</Container>
  )}
}

export default About;

