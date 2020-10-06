import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {fetchapi} from "./fetchapi"


const color = {
  background: "#bbded6"
}

class BusOne extends Component{
  constructor(){
    super()
    this.handleCode = this.handleCode.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      bus: [],
      code : 78049,
    }
  
  }
  handleCode(e) {
    e.preventDefault()
    this.setState({code: e.target.value});
 }

    async handleSubmit() {
    try {
      // setInterval(async () => {
        const response = await fetchapi(this.state.code)
        this.setState({bus: response.Services})
      // }, 30000);
    } catch(e) {
      console.log(e);
    }
    }

  render(){
    
    let d = new Date();
    let time_check = Number(d.toLocaleTimeString().slice(3,5))
    let time_now = 0
    time_check > 50 ?  time_now = time_check + 60 : time_now += time_check
    return (
    
      <div>
      <div>
      <div className="card" style={color}>
      
      <input className="text-center input-custom mb-2" type="text"  placeholder="5 DIGIT CODE" value={this.state.code}  onChange={this.handleCode}/>
     

    { this.state.bus ?
          this.state.bus.map( (bus, i) => (
            <div key={i}>
              <h2 className="busnumber">{bus.ServiceNo} →
             
              <span>{console.log(Number(bus.NextBus.EstimatedArrival.slice(14,16)))}
                    { Number(bus.NextBus.EstimatedArrival.slice(14,16)) - time_now > 0 ? 
                      Number(bus.NextBus.EstimatedArrival.slice(14,16)) - time_now : "Arrived" }
                      </span></h2> 
                    
        
            </div>
      ) ) : null 
        
    }

      
      <p></p>

        <div className="multi-button">
        <button className="fas fa-heart" onClick={this.handleSubmit}>S</button>
        <button className="fas fa-share-alt">D</button>
        <button className="fas fa-trash">E</button>
        </div>
     
  </div>

    </div>

   
</div>
    
  )}
}
export default BusOne;

