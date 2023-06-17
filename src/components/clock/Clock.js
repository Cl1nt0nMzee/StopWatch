import React, { useState } from "react";
import './Clocks.css';

function StartButton( props ) {
    // button with start

    return <button className="primary" onClick={ props.function }>  Start </button>
}

function PauseButton(props) {
    return <button className="primary" onClick={ props.function }>  Pause </button>
}

function ResetButton(props) {
    return <button className="secondary" onClick={ props.function }>  Reset </button>
}




// 
const StartClock = () => {
    alert('Start')
}

const PauseClock = () => {
    alert('Pause')
}

const ResetClock = () => {
    alert('Reset')
}



function Clock() {
    
    const [ flag, setFlag ] = useState(true);
    const [ hours, setHours ] = useState(0);
    const [ minutes, setMinutes ] = useState(0);
    const [ seconds, setSeconds ] = useState(0);
    const [ milliseconds, setMilliseconds ] = useState(0);

    

    function Add() {
        setInterval(setHours( hours + 1 ), 100)
    }

    return (
        <div>
            <h1> React {hours} JS Stopwatch </h1>
            { window.hours = hours }
            <p> {hours} : {minutes} : {seconds} : {milliseconds}</p>
             <StartButton function={Add} /> 
              <PauseButton function={PauseClock} />
            <ResetButton function={ResetClock} />
        </div>

    )
}

console.log(window.hours)

export {Clock}