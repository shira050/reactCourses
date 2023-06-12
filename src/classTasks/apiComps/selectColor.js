import React, { useRef, useState } from 'react'

const SelectColor = () => {
    const [color, setColor] = useState("black");
    const selectRef = useRef();


    
  return (
    <div>
        <h2 style={{color:color}}>Hello</h2>
        <select ref={selectRef} onChange={() => {
          setColor(selectRef.current.value)
        }}>
            <option value="red" >red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="orange">orange</option>
        </select>
    </div>
  )
}

export default SelectColor