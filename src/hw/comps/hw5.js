
import React, { Component } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Import MDBReactUIKit CSS



export default class CoinsCalc extends Component {

    state = { coins_val: 1, sum: 0, sum_end: 0 };


    selectRef = React.createRef();
    inputRef = React.createRef();

    changeCoin = () => {
        let selectVal = this.selectRef.current.value;
        this.setState({ coins_val: selectVal })

        let inputVal = this.inputRef.current.value;
        this.setState({ sum: inputVal })

        this.setState({ sum_end: (this.state.sum) / (this.state.coins_val) });
    }




    render() {

        return (
            <div>
                <h2>my calculatore:</h2>
                <div >
                    <MDBInput ref={this.inputRef} label='Enterthe amount you have:' type='text' />
                  
                 
                    <p >Enter your coins type:</p>
                    <select ref={this.selectRef}>
                        <option>choose an option</option>
                        <option value={3.5}>$</option>
                        <option value={1}>ILS</option>
                        <option value={2.2}>URE</option>
                        <option value={0.1}>bat </option>
                    </select>
                  
                    <br></br>
                    <MDBBtn onClick={this.changeCoin} rounded className='mx-2' color='secondary'>
                        EXCHANGE
                    </MDBBtn>
                    <p>{this.state.sum_end} ILS</p>
                </div >
            </div>
        )
    }
}
