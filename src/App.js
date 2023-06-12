import logo from './logo.svg';
import './App.css';
import React from 'react';

import Hw from './hw/comps/appHw';
import AppFather from './classTasks/comps_loop/app';


function App() {
  return (
    <React.Fragment>  
      {/* השב של שיעור 41  */}
      {/* <Hw></Hw> */}
      
      <AppFather></AppFather>
      
    </React.Fragment> 
  );
}

export default App;
