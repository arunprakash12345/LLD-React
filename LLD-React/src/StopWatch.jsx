import React, { useState, useEffect } from 'react';
import './CSS/stopWatch.css'

const StopWatch = () => {
    const [timerRunning, setTimerRunning] = useState(false);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval;
        if (timerRunning) {
            interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [timerRunning]);

    function handleTimerFormat() {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        const runTimer = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
        return runTimer;
    }

    function handlereset() {
        setTimerRunning(false);
        setSeconds(0);
    }

    return (
        <div className="stopWatch-container">
            <h1>Stopwatch Timer</h1>
            <div className="timer-container" >
                {handleTimerFormat()}
            </div>
            <div className="button-container" role="group" aria-label="Stopwatch controls">
                <button
                    aria-label="Start button"
                    disabled={timerRunning}
                    onClick={() => setTimerRunning(true)}
                >
                    Start
                </button>
                <button
                    aria-label="Pause button"
                    disabled={!timerRunning}
                    onClick={() => setTimerRunning(false)}
                >
                    Pause
                </button>
                <button aria-label="Reset button" onClick={handlereset}>Reset</button>
            </div>
        </div>
    );
}

export default StopWatch;