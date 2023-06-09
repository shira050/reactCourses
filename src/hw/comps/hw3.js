import React, { Component, createRef } from 'react'
import { MDBSelect } from 'mdb-react-ui-kit';


export default class Color extends Component {

    state = { color: "red" };
    selectRef = React.createRef();
    
    changeColor = () => {
        let selectVal = this.selectRef.current.value;
        this.setState({ color: selectVal })
    }

    render() {

        return (
            <div >
                <h2 style={{color:this.state.color}} >Enter your favorite color: {this.state.color}</h2>
                <select onChange={this.changeColor} ref={this.selectRef} className="browser-default custom-select">
                    <option>choose an option</option>
                    <option>red</option>
                    <option>blue</option>
                    <option>green</option>
                    <option>yellow</option>
                </select>
              
            </div >


        )
    }
}
