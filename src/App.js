import React, {Component} from 'react';
import Navigation from "./Navigation"
import {Container, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BusOne from "./BusOne"
import BusTwo from "./BusTwo"
import BusThree from "./BusThree"
import BusFour from "./BusFour"


function App(){
        return (
                  <div className="mr-5 ml-5">
                  <Row>
                  <Col lg={3} md={6} sm={12}>
                    <BusOne/>
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                  <BusTwo/>
                </Col>
                <Col lg={3} md={6} sm={12}>
                  <BusThree/>
                </Col>
                <Col lg={3} md={6} sm={12}>
                  <BusFour/>
                </Col>
                  </Row>
          
                  
                  </div>
                
                )
}

export default App;

