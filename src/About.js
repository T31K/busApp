import React, {Component} from 'react';
import {Container, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {fetchapi} from "./fetchapi"
import { faLaptop, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
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
      
</div>
</Container>
  )}
}

export default About;

