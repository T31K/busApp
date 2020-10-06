import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap"
import './App.css';
import {fetchapi} from "./fetchapi"
import { faSearch, faUserEdit, faCog , faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const color = {
  background: "#ffb6b9"
}

class BusOne extends Component{
  constructor(){
    super()
    this.handleCode = this.handleCode.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleName = this.handleName.bind(this)
    this.state = {
      bus: [],
      code : 78049,
      name: ''
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
    
      <div>
      <div>
      <div className="card" style={color}>
      
      <input className="text-center input-custom mt-2" type="text"  placeholder="Custom Name" value={this.state.name}  onChange={this.handleName}/>
      <input className="text-center input-custom mb-2 mt-2" type="text"  placeholder="5 DIGIT CODE" value={this.state.code}  onChange={this.handleCode}/>
     

    { this.state.bus ?
          this.state.bus.map( (bus, i) => (
            <div key={i}>
              <Row>
            <Col lg={4} md={4} sm={4}>
              <span className="text-leftborder" >{bus.ServiceNo}  </span> 
            </Col> 


            <Col lg={4} md={4} sm={4}>
            <span>
                <FontAwesomeIcon className='text-center' icon={faArrowAltCircleRight} />
                 </span> 
            </Col> 
            
            <Col lg={4} md={4} sm={4}>
              <span className="">{console.log(Number(bus.NextBus.EstimatedArrival.slice(14,16)))}
                  { Number(bus.NextBus.EstimatedArrival.slice(14,16)) - time_now > 0 ? 
                    Number(bus.NextBus.EstimatedArrival.slice(14,16)) - time_now : "Arrived" }
              </span>
            </Col> 
              </Row>
      
            </div>
      ) ) : null 
        
    }

      
      <p></p>

        <div className="multi-button mt-2">
        <button  onClick={this.handleSubmit}><FontAwesomeIcon icon={faSearch} /></button>
        <button ><FontAwesomeIcon icon={faUserEdit} /></button>
        <button ><FontAwesomeIcon icon={faCog} /></button>
        </div>
     
  </div>

    </div>

   
</div>
    
  )}
}
export default BusOne;

