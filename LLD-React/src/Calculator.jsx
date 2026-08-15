import { useState } from 'react';
import '../src/CSS/calender.css';

export default function Calculator() {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState(null);
    const [secondInputActive, setSecondInputActive] = useState(false);

    const handleClear = () => {
        setInput1(0);
        setInput2(0);
        setResult(0);
        setOperator(null);
        setSecondInputActive(false);
    }
    const handleInput = (e) => {
        const val1 = e.target.innerText;
        console.log("Button clicked:", val1);
        if (!isNaN(val1) && val1.trim() !== "") {
            if (!secondInputActive) {
                const nextValue = input1 !== 0 ? input1 * 10 + Number(val1) : Number(val1);
                setInput1(nextValue);
                setResult(nextValue);
            }
            else {
                const nextValue = input2 !== 0 ? input2 * 10 + Number(val1) : Number(val1);
                setInput2(nextValue);
                setResult(input1 + " " + operator + " " + nextValue);
            }
        } else {
            console.log("Operator or action clicked:", val1);
            if (val1 === "+" || val1 === "-" || val1 === "*" || val1 === "/" || val1 === "%") {
                setSecondInputActive(true);
                setOperator(val1);
                setResult(input1 + " " + val1);
            }
            else if (val1 === "=") {
                let res = 0;
                if (operator == "+") res = input1 + input2;
                if (operator == "-") res = input1 - input2;
                if (operator == "*") res = input1 * input2;
                if (operator == "/") res = input1 / input2;
                if (operator == "%") res = input1 % input2;
                setResult(res);
                setInput1(res);
                setInput2(0);
                setSecondInputActive(false);
            }
        }
    }
    const buttons = [
        "Clear", "Del", "%", "/",
        "1", "2", "3", "*",
        "4", "5", "6", "-",
        "7", "8", "9", "+",
        "0", ".", "="
    ];

    return (
        <div className="main-container">
            <h1>Calculator Component</h1>
            <div className="parent-container">
                <div className="output">{result}</div>
                <div className='input-fields' >
                    {
                        buttons.map((btn) => {
                            return <button key={btn} className='button' onClick={btn === "Clear" ? handleClear : handleInput}> {btn}</button>
                        })
                    }
                </div>
            </div>
        </div >
    );
}