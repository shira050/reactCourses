import React, { Component } from 'react'

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
        <button onClick={this.add1}>+</button>
      </div>
    )
  }
}
