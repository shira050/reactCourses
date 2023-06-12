import React, { Component } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';


export default class Color extends Component {


    render() {

        return (
            <div>
                <React.Fragment>

                    <MDBBtn onClick={()=>this.props.changeColor("red")} rounded className='mx-2' color='danger'>
                        red
                    </MDBBtn>
                    <MDBBtn onClick={()=>this.props.changeColor("green")} rounded className='mx-2' color='success'>
                        green
                    </MDBBtn>
                    <MDBBtn onClick={()=>this.props.changeColor("blue")} rounded className='mx-2' color='info'>
                        blue
                    </MDBBtn>


                </React.Fragment>
            </div>
        )
    }
}
