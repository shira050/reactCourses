import logo from './logo.svg';
import './App.css';
import React from 'react';
import appHw from './hw/appHW';
import Counter from './hw/comps/hw1';
import ImgArr from './hw/comps/hw2';
import Color from './hw/comps/hw3';


function App() {
  return (
    <React.Fragment>
      {/* <appHw></appHw> */}
      <Counter></Counter>
      <ImgArr></ImgArr>
      <Color></Color>
    </React.Fragment> 
  );
}

export default App;
