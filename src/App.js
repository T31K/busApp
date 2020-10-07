import React, {Component} from 'react';
import {  Switch, Route, Router} from 'react-router-dom';
import {Container, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BusOne from "./BusOne"
import BusTwo from "./BusTwo"
import BusThree from "./BusThree"
import BusFour from "./BusFour"
import Bar from "./Bar"


function App(){
        return (
          <div> 
                  <div className="mr-5 ml-5">
                  <Row >
                  <Col xl={3} lg={4} md={6} sm={12}>
                    <BusOne/>
                  </Col>
                  <Col  xl={3} lg={4} md={6} sm={12}>
                  <BusTwo/>
                </Col>
                <Col  xl={3} lg={4} md={6} sm={12}>
                  <BusThree/>
                </Col>
                <Col  xl={3} lg={4} md={6} sm={12}>
                  <BusFour/>
                </Col>
                  </Row>
                  </div>
                  
                  </div>
                
                )
}

export default App;

