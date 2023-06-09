import React, { Component } from 'react'
import Counter from './hw1'
import ImgArr from './hw2'
import Color from './hw3'
import MoviesArr from './hw4'
import CoinsCalc from './h5'

export default class Hw extends Component {

    

    render() {

        return (< div className='container'>
          <Counter></Counter>
          <hr></hr>
      <ImgArr></ImgArr>
      <hr></hr>
      <Color></Color>
      <hr></hr>
      <MoviesArr></MoviesArr>
      <hr></hr>
      <CoinsCalc></CoinsCalc> 
      </div>
        )
    }
}
