import React, { useState,useEffect } from "react";

export default function Kazino() {
    const [role, setRole] = useState(5);
    const [coin, setCoin] = useState(5);
    
    useEffect(() => {
        if(localStorage["coins"]){
            setCoin(Number(localStorage["coins"]));
        }
        else{
            localStorage.setItem("coins",coin)
        }
      },[]);

    const scrole = () => {
        if (coin > 0) {
            setCoin(coin - 1);
            let rnd = Math.random() * 6;
            setRole(Math.ceil(rnd));
            if (coin >= 5 ) {
                setCoin(coin + 2);
            }
        }
        else {
            alert("you need more money and luck ....");
        }
        localStorage.setItem("coins",coin);
    }

    return (
        <>
            <div className="container text-center">
                <h1>ברוך הבא לקזינו</h1>
                <h3>אנו מאחלים לך משחק עם המון מזללל</h3>
                <div class="row justify-content-around center">
                    <img src={`../dice_images/dice${role}.jpg`} alt={role.toString()} class="col-4" />
                </div>
                <hr />
                <button onClick={scrole} class="btn btn-success">ROLL</button>

                <p>
                    נשארו לך עוד
                    <span > {coin} </span>
                    מטבעות
                </p>


 
            </div>
        </>
    )
}