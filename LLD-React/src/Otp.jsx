import React, { useRef, useState } from 'react';
import './CSS/otp.css';

const Otp = ({ length = 6 }) => {
    const [otp, setOtp] = useState(new Array(length).fill(''));
    const [submittedOtp, setSubmittedOtp] = useState('');
    const inputsRef = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value && isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        if (value && inputsRef.current[index + 1]) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && inputsRef.current[index - 1]) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData
            .getData('text')
            .replace(/\D/g, '')
            .slice(0, length)
            .split('');

        if (pastedData.length === 0) return;

        const newOtp = [...otp];
        pastedData.forEach((char, i) => {
            newOtp[i] = char;
        });
        setOtp(newOtp);

        const nextIndex = Math.min(pastedData.length, length - 1);
        if (inputsRef.current[nextIndex]) {
            inputsRef.current[nextIndex].focus();
        }
    };

    const handleVerify = (e) => {
        e.preventDefault();
        const code = otp.join('');
        if (code.length === length) {
            setSubmittedOtp(code);
        }
    };

    const handleClear = () => {
        setOtp(new Array(length).fill(''));
        setSubmittedOtp('');
        if (inputsRef.current[0]) {
            inputsRef.current[0].focus();
        }
    };

    const isComplete = otp.every(digit => digit !== '');

    return (
        <div className="otp-wrapper">
            <div className="otp-card">
                <div className="otp-icon">🔐</div>
                <h2 className="otp-title">OTP Verification</h2>
                <p className="otp-subtitle">
                    Enter the {length}-digit verification code sent to your phone or email.
                </p>

                <form onSubmit={handleVerify}>
                    <div className="otp-container" onPaste={handlePaste}>
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                className={`otp-input ${digit ? 'filled' : ''}`}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(el) => (inputsRef.current[index] = el)}
                                autoFocus={index === 0}
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="otp-submit-btn"
                        disabled={!isComplete}
                    >
                        Verify Code
                    </button>
                </form>

                {submittedOtp && (
                    <div className="otp-success-msg">
                        ✅ OTP verified successfully: <strong>{submittedOtp}</strong>
                    </div>
                )}

                <div className="otp-footer">
                    Didn't receive code?{' '}
                    <button type="button" className="resend-btn" onClick={handleClear}>
                        Resend / Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Otp;
