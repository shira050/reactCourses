import React, { Component } from 'react';
import Counter from './comps/hw1';
import ImgArr from './comps/hw2';
import Color from './comps/hw3';


export default class appHw extends Component {

    render() {

        return (
            <div >
                 <Counter></Counter>
                <ImgArr></ImgArr>
                <Color></Color> 
            </div >


        )
    }
}
