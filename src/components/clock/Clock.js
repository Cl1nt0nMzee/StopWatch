import React, { useState } from "react";
import './Clocks.css';

function StartButton( props ) {
    // button with start
    return (
        <button className="primary" onClick={ props.function }>  Start </button> 
)

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

function Test () {
    const [test, setTest] = useState(false)
    return null
}

function Clock() {
    
    const [ flag, setFlag ] = useState(true);
    const [ hours, setHours ] = useState(0);
    const [ minutes, setMinutes ] = useState(0);
    const [ seconds, setSeconds ] = useState(0);
    const [ milliseconds, setMilliseconds ] = useState(0);

    

    function add() {
        setInterval(setHours( prevHours => prevHours + 1 ), 100)
    }
    function add_1() {
        let i
        for (i=0; i < 5; i++) {
            setHours(prevHours => prevHours + 1)
        }
        setInterval(console.log('Hi'), 1000)
    }

    function deduct() {
        setHours( prevHours => prevHours - 1 )
    }

    function reset() {
        setHours(0)
    }

    return (
        <div>
            <h1> React {hours} JS Stopwatch </h1>
            { window.hours = hours }
            <p> {hours} : {minutes} : {seconds} : {milliseconds}</p>
             <StartButton function={add_1} /> 
              <PauseButton function={deduct} />
            <ResetButton function={reset} />
        </div>

    )
}


export {Clock}