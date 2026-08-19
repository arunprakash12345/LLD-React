import React, { useRef, useEffect } from 'react';
import { AiOutlineInfoCircle, AiFillWarning, AiFillExclamationCircle, AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";
import '../CSS/notification.css'
const Notification = ({ id, type, duration, message, position, onClose }) => {
    const icons = {
        info: <AiOutlineInfoCircle />,
        warn: <AiFillWarning />,
        success: <AiFillCheckCircle />,
        error: <AiFillExclamationCircle />
    }
    const timerRef = useRef();
    useEffect(() => {
        timerRef.current = setTimeout(() => {
            onClose(id);
        }, duration * 1000);

        return () => clearTimeout(timerRef.current);
    }, [])

    return (
        <div className={`notification-card ${type} ${position}`}>
            {icons[type]}
            <span>{message}</span>
            <AiOutlineClose className="close" onClick={() => onClose(id)} />
        </div>
    )
}

export default Notification
