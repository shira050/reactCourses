import React, { useRef, useState } from 'react'



const SelectColor = () => {
    const [color, setColor] = useState("black");
    const selectRef = useRef();


    
  return (
    
    <div>
      
      
        <h2 style={{color:color}}>Hello <span>{(color!= "black")&&color}</span> </h2>
        <select 
        class=" form-select w-50"
        aria-label="Choose any color"
        ref={selectRef} onChange={() => {
          setColor(selectRef.current.value)
        }}>
            <option style={{color:"red"}}>red</option>
            <option style={{color:"green"}}>green</option>
            <option style={{color:"blue"}}>blue</option>
            <option style={{color:"orange"}}>orange</option>
           
            {/* כשאין 
            vlue 
            הוא הולך דפולטיבי ל 
            innerHtml */}

        </select>

      
    </div>
  )
}

export default SelectColor
