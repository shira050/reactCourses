
import React, { Component } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Import MDBReactUIKit CSS



export default class CoinsCalc extends Component {

    state = { coins_val: 1, sum: 0 ,sum_end:0};


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
                {/* <h2 >Enterthe amount you have:</h2>
                    <input type='text' ref={this.inputRef}></input> */}
                    <MDBInput ref={this.inputRef} label='Enterthe amount you have:'  type='text' />
                    <h2 >Enter your coins type:</h2>
                    <select  ref={this.selectRef}>
                        <option>choose an option</option>
                        <option value={3.5}>$</option>
                        <option value={1}>ILS</option>
                        <option value={2.2}>URE</option>
                        <option value={0.1}>bat </option>
                    </select>
                    <hr></hr>
                    <button onClick={this.changeCoin}>EXCHANGE</button>
                    <h2>{this.state.sum_end} ILS</h2>
                </div >
            </div>
        )
    }
}
