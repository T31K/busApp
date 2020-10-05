import React, {Component} from 'react';
import Draggable from 'react-draggable';
import Navigation from "./Navigation"
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




class App extends Component{
  constructor(){
    super()
    this.handleCode = this.handleCode.bind(this)
    this.handleBusNumber = this.handleBusNumber.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      bus_one: [],
      bus_two: [],
      bus_three: [],
      code : 78049
    }
  
  }
 
  handleCode(e) {
    e.preventDefault()
    this.setState({code: e.target.value});
 }

 handleBusNumber(e) {
  e.preventDefault()
  this.setState({bus_number: e.target.value});
}
handleSubmit(){
  fetch(`https://cors-anywhere.herokuapp.com/http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=${this.state.code}`, requestOptions)
  .then(response => response.json())
  .then(data => this.setState({bus_one: data.Services}))
  .catch(err => console.log(err))
}
  

  render(){
    
    let d = new Date();
      let time_now = Number(d.toLocaleTimeString().slice(3,5))
    return (
    <div>
    
      <Navigation />
      <input type="text"  placeholder="BUS CODE" value={this.state.code}  onChange={this.handleCode}/>
      <button onClick={this.handleSubmit}>hello</button>   
      <p>Bus code {this.state.code}</p>

    {

      this.state.bus ?
      
          this.state.bus_one.map( (bus, i) => (
          <div key={i}>
                  <div>
                  <h1>{'Bus '+bus.ServiceNo}</h1>
                  {Number(bus.NextBus.EstimatedArrival.slice(14,16)) - time_now + ' mins'}
                  </div>
          </div>

          ) ) : null 
            
        }
        
        
            </div>

 
  )}
}
export default App;

