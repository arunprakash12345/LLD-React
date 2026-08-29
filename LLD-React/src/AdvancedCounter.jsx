import React, { useState } from 'react'
import './CSS/advancedCounter.css'
import Slider from '@mui/material/Slider';

const AdvancedCounter = () => {
    const initialValue = {
        value: 0,
        delay: 1,
        lower: -1000,
        higher: 1000,
        increase: 1
    };
    const [counter, setCounter] = useState(initialValue);

    const handleChange = (key, e) => {
        const value = Number(e.currentTarget.value);
        setCounter(prev => ({
            ...prev,
            [key]: value
        }));
    };

    function handleReset() {
        setCounter(initialValue);
    }

    function handleSubtract() {
        setCounter(prev => ({
            ...prev,
            value: prev.value - prev.increase >= prev.lower
                ? prev.value - prev.increase
                : prev.lower
        }));
    }

    function handleAdd() {
        setCounter(prev => ({
            ...prev,
            value: prev.value + prev.increase <= prev.higher
                ? prev.value + prev.increase
                : prev.higher
        }));
    }

    function handleAsyncAdd() {
        setTimeout(() => {
            handleAdd();
        }, counter.delay * 1000)
    }
    function handleAsyncSubract() {
        setTimeout(() => {
            handleSubtract();
        }, counter.delay * 1000)
    }

    return (
        <div className="counter-container">
            <h1>Advanced Counter</h1>
            <h3>{counter.value}</h3>
            <div className="button-container">
                <button onClick={handleSubtract}>-</button>
                <button onClick={handleAdd}>+</button>
            </div>
            <div className="button-container">
                <button onClick={handleAsyncSubract}>- async</button>
                <button onClick={handleAsyncAdd}>+ async</button>
            </div>
            <Slider
                aria-label="delay"
                value={counter.delay}
                onChange={(e, value) => {
                    setCounter(prev => ({
                        ...prev,
                        delay: value
                    }));
                }}
                min={1}
                max={10}
                step={1}
            />{counter.delay} s
            <label htmlFor="increase"> Increament/Decreament By
                <input type="number" name="increase" value={counter.increase} onChange={(e) => handleChange("increase", e)} />
            </label>
            <label htmlFor="lower"> Lower Limit
                <input type="number" name="lower" value={counter.lower} onChange={(e) => handleChange("lower", e)} />
            </label>
            <label htmlFor="higher"> Higher Limit
                <input type="number" name="higher" value={counter.higher} onChange={(e) => handleChange("higher", e)} />
            </label>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default AdvancedCounter
