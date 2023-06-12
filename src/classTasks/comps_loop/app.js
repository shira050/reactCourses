import React, { Component } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import Color from './color';


export default class AppFather extends Component {

  state = {color:""};

  changhColor=(c)=>{
    this.setState({color:c})
  }
  
  
  render() {
    
    return (
      <div>
       <div className='container my-5 p-5' style={{background:"#f1f1f1"}}>

      <h2 style={{color:this.state.color}}>welcome To Custom</h2>
      <p>select a color:</p>
      <Color changeColor={this.changhColor}></Color>
      </div>
      
      </div>
    )
  }
}
