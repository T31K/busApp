import React, {Component} from 'react';
import Draggable from 'react-draggable';
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

  handleSubmit(){
    fetch(`https://cors-anywhere.herokuapp.com/http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=${this.state.code}`, requestOptions)
    .then(response => response.json())
    .then(data => this.setState({bus: data.Services}))
    .catch(err => console.log(err))
  }
  render(){
    let d = new Date();
    let time_now = Number(d.toLocaleTimeString().slice(3,5))
    console.log(time_now)
    
    return (
    
    <div>
 
    <p>{this.state.code}</p>

   
  
    {
      this.state.bus ?

      this.state.bus.map( (bus, i) => (
      <div key={i}>
      <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{x: 0, y: 0}}
      position={null}
      grid={[25, 25]}
      scale={1}
      onStart={this.handleStart}
      onDrag={this.handleDrag}
      onStop={this.handleStop} >
        <div>
          <button className="handle">Drag from here</button>
          <h1>Bus {bus.ServiceNo}</h1> 
          <h1>{Number(bus.NextBus.EstimatedArrival.slice(14,16)) - 1 - time_now > 0 ? Number(bus.NextBus.EstimatedArrival.slice(14,16)) - 1 - time_now + ' mins': 'Arrived!' }</h1>
          <h2>{Number(bus.NextBus2.EstimatedArrival.slice(14,16)) - 1 - time_now > 0 ? Number(bus.NextBus2.EstimatedArrival.slice(14,16)) - 1 - time_now + ' mins' : 'Arrived!' } </h2> 
        </div>
        </Draggable>   
        </div>) ) : null 
        
    }
     
      <input type="text"  placeholder="BUS CODE" value={this.state.code}  onChange={this.handleCode}/>
        <button onClick={this.handleSubmit}>hello</button>   
        </div>
  
     
    )
    }
}
  

export default App;
