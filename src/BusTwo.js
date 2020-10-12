import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap"
import './App.css';
import {fetchapi} from "./fetchapi"
import { faSearch, faUserEdit, faCog , faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const customCard = {
  background: "#fae3d9",
  margin : "1.5em 0 0 0 ",  
  width: "100%"
}

const hidden = {
  opacity : "0"
}

const visible = {
  opacity : "1"
}

class BusTwo extends Component{
  constructor(){
    super()
    this.handleCode = this.handleCode.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleName = this.handleName.bind(this)
    this.handleVisibility = this.handleVisibility.bind(this)
    this.state = {
      bus: [],
      code : 16891,
      name: '',
      inputOpacity: false
    }
  
  }
  handleCode(e) {
    e.preventDefault()
    this.setState({code: e.target.value});
 }

 handleName(e) {
  e.preventDefault()
  this.setState({name: e.target.value});
}


handleVisibility() {
  this.setState({inputOpacity: !this.state.inputOpacity})
}

    async handleSubmit() {
    try {
      const response = await fetchapi(this.state.code)
      this.setState({bus: response.Services})
      setInterval(async () => {
        const response = await fetchapi(this.state.code)
        this.setState({bus: response.Services})
      }, 30000);
    } catch(e) {
      console.log(e);
    }
    }

  render(){
    
    let d = new Date();
    let time_now = Number(d.toLocaleTimeString().slice(3,5))
    // console.log('render: time_check'+time_check)
    // let time_now = 0/
    // time_check > 50 ?  time_now = time_check + 60 : time_now = time_check
    return (
    
    
      <div className="card" style={customCard}>
      <input className=" text-center input-custom mt-2" type="text"  placeholder="CUSTOM NAME" value={this.state.name}  onChange={this.handleName}  style={this.state.inputOpacity ? visible : hidden}/>
      <input className=" text-center input-custom mb-4" type="text"  placeholder="5 DIGIT CODE" value={this.state.code}  onChange={this.handleCode}/>


       

    { this.state.bus ?
          this.state.bus.map( (bus, i) => (
           

            <Row className="rows" key={i}>
            <Col  className="" lg={4} md={4} sm={4} xs={4}>
              <span className=" text-left font-custom ml-4 mb-2" >{bus.ServiceNo}  </span> 
            </Col> 


            <Col  lg={2} md={2} sm={2} xs={2}>
            <span>
                <FontAwesomeIcon className='text-center font-custom' icon={faArrowAltCircleRight} />
            </span> 
            </Col> 
            
            <Col lg={6} md={6} sm={6} xs={6}>
              <span className="text-right font-custom mr-2">{console.log(Number(bus.NextBus.EstimatedArrival.slice(14,16)))}
                  { Number(bus.NextBus.EstimatedArrival.slice(14,16)) - time_now > 0 ? 
                    Number(bus.NextBus.EstimatedArrival.slice(14,16)) - time_now + " mins": "Arrived" }
              </span>
            </Col> 
              </Row>
      
          
      ) ) : null 
        
    }

      
      <p></p>

        <div className="multi-button mt-2">
        <button onClick={this.handleSubmit}><FontAwesomeIcon icon={faSearch} /></button>
        <button onClick={this.handleVisibility}><FontAwesomeIcon icon={faUserEdit} /></button>
        <button ><FontAwesomeIcon icon={faCog} /></button>
        </div>
    
  </div>

 
    
  )}
}
export default BusTwo;

