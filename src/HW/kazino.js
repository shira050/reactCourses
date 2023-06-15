import React, { useState } from "react";

export default function Kazino() {
    const [role, setRole] = useState(5);

    const scrole = () => {
        let rnd = Math.round()*6;
        setRole(Math.ceil(rnd));
    }

    return (
        <>
            <img src={`../dice_images/dice${role}`} alt="kazino"></img>
            <button onClick={scrole}></button>
        </>
    )
}