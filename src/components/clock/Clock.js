import { useState } from "react";


function StartButton( props ) {
    // button with start

    return <button onClick={ props.function }>  Start </button>
}

function PauseButton(props) {
    return <button onClick={ props.function }>  Pause </button>
}

function ResetButton(props) {
    return <button onClick={ props.function }>  Reset </button>
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
    
    const {flag, setFlag} = useState(true)
    const {seconds, setSeconds} = useState(43);
    const {minutes, setMinutes} = useState(0);
    const {hours, setHours} = useState(400);

    return (
        <div>
            <h1> React {hours} JS Stopwatch </h1>

            <p> {hours} : {minutes} : {seconds} </p>
            { flag ? <StartButton function={StartClock} /> : <PauseButton function={PauseClock} />}
            <ResetButton function={ResetClock} />
        </div>

    )
}

export {Clock}