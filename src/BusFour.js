import React, {Component} from 'react';
import Draggable from 'react-draggable';
import Navigation from "./Navigation"
import {Rnd} from 'react-rnd';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const myHeaders = new Headers();
myHeaders.append("AccountKey", process.env.REACT_APP_acc_key);
myHeaders.append("accept", "application/json");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};




class BusFour extends Component{
  constructor(){
    super()
    this.handleCode = this.handleCode.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      bus: [],
      code : 76071
    }
  
  }
 
  handleCode(e) {
    e.preventDefault()
    this.setState({code: e.target.value});
 }

handleSubmit(){
  fetch(`https://cors-anywhere.herokuapp.com/http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=${this.state.code}`, requestOptions)
  .then(response => response.json())
  .then(data => this.setState({bus: data.Services}))
  .catch(err => console.log(err))
}
  
  render(){
    
    let d = new Date();
    let time_now = Number(d.toLocaleTimeString().slice(3,5))
    return (
    
      <div>
  
      
      
      <p>Bus code {this.state.code}</p>
      <div className="card-bg">
      <Rnd  className='card text-center handle'
            default={{ x: 550, y: 0,width: 300,height: 590 }}
            minWidth={100}
            minHeight={190}
            bounds="window"
      >
      <Navigation />
     
      <input className="text-center input-custom" type="text"  placeholder="5 DIGIT CODE" value={this.state.code}  onChange={this.handleCode}/>
      <p></p>
      <button className="btn-custom" onClick={this.handleSubmit}>Find Bus</button>   
          {this.state.bus.map( (bus, i) => (
          
                  <div className="mt-2" key={i}>
                  <h1>{'Bus '+bus.ServiceNo} - 
                    {
                    Number(bus.NextBus.EstimatedArrival.slice(14,16)) - time_now > 0 ? 
                    Number(bus.NextBus.EstimatedArrival.slice(14,16)) - time_now :
                    "Arrived"
                    }
                    </h1>
                    {console.log('nextbus: xx'+ Number(bus.NextBus.EstimatedArrival.slice(14,16)))
                    }
            </div>
          ) ) }
    </Rnd>
    </div>


</div>
    

 
  )}
}
export default BusFour;

