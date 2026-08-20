import React, { useState, useEffect } from 'react'
import './CSS/password.css'
const PasswordStrength = () => {
    const [passwordObj, setPasswordObj] = useState({
        passLength: 0,
        strength: "Weak",
        hasLowerCase: false,
        hasUpperCase: false,
        hasSymbol: false,
        hasNumber: false,
        score: 0
    });
    const [password, setPassword] = useState("");
    function handleChange(e) {
        setPassword(e.target.value);
    }

    useEffect(() => {
        validatePassword();
    }, [password]);

    function validatePassword() {
        const lower = /[a-z]/.test(password);
        const upper = /[A-Z]/.test(password);
        const symbol = /[^a-zA-Z0-9]/.test(password);
        const number = /[0-9]/.test(password);
        let score1 = 0;
        if (password.length > 8) score1 += 35;
        if (lower) score1 += 15;
        if (upper) score1 += 15;
        if (symbol) score1 += 15;
        if (number) score1 += 15;
        let stren = "Weak";
        if (score1 >= 76) {
            stren = "Strong";
        } else if (score1 >= 51) {
            stren = "Good";
        } else if (score1 >= 26) {
            stren = "Fair";
        } else {
            stren = "Weak";
        }

        setPasswordObj({
            passLength: password.length,
            hasLowerCase: lower,
            hasUpperCase: upper,
            hasSymbol: symbol,
            hasNumber: number,
            score: score1,
            strength: stren
        });
    }

    return (
        <div style={{ "marginTop": "10%" }}>
            <label>Password  </label>
            <input type="text" name="password" onChange={handleChange} />
            <p>Your password is <b> {passwordObj.strength} </b></p>
            <p>Password has <b> {passwordObj.passLength} </b>chars</p>
            <div className={`progress-bar ${passwordObj.score}`}>{passwordObj.score}</div>
        </div >
    )
}

export default PasswordStrength
