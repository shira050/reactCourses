import React, { Component } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';


export default class Counter extends Component {

  state = {counter:0};
  
  add1 = () => {
  
    this.setState({counter:this.state.counter + 1})
 
    if(this.state.counter == 5){
      this.setState({counter:0});
    }
  }

  render() {
    
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <MDBBtn onClick={this.add1} rounded className='mx-2' color='secondary'>
        +
      </MDBBtn>
      </div>
    )
  }
}
