import React, { useRef, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';




const SelectColor = () => {
    const [color, setColor] = useState("black");
    const selectRef = useRef();


    
  return (
    <div>
      
       <MDBBtn  rounded className='mx-2' color='danger'>
                        red
                    </MDBBtn> 
        <h2 style={{color:color}}>Hello <span>{color!= "black"&&color}</span> </h2>
        <select 
        class="browser-default custom-select"
        ref={selectRef} onChange={() => {
          setColor(selectRef.current.value)
        }}>
            <option >red</option>
            <option>green</option>
            <option>blue</option>
            <option>orange</option>
           
            {/* כשאין 
            vlue 
            הוא הולך דפולטיבי ל 
            innerHtml */}

        </select>
    </div>
  )
}

export default SelectColor