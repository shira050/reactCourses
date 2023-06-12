import React, { useRef, useState } from 'react'




const SelectColor = () => {
    const [color, setColor] = useState("black");
    const selectRef = useRef();


    
  return (
    <div>
      
      
        <h2 style={{color:color}}>Hello <span>{(color!= "black"&&color!="choose a color")&&color}</span> </h2>
        <select 
        class="browser-default custom-select"
        ref={selectRef} onChange={() => {
          setColor(selectRef.current.value)
        }}>
            <option >choose a color</option>
            <option color='danger' >red</option>
            <option color='success'>green</option>
            <option color='info'>blue</option>
            <option color='orange'>orange</option>
           
            {/* כשאין 
            vlue 
            הוא הולך דפולטיבי ל 
            innerHtml */}

        </select>
    </div>
  )
}

export default SelectColor