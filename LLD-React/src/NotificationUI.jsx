import React, { useState } from 'react'
import './CSS/notification.css'
import useNotification from './Hooks/useNotification'
import Notification from './Components/Notification'
const NotificationUI = () => {
    const { notifications, addNotification, removeNotification } = useNotification();
    const [notification, setNotification] = useState({
        type: "success",
        duration: 3,
        horizontal: "left",
        vertical: "top",
        message: "Hey there"
    });
    function handleChange(e) {
        const { name, value } = e.target;
        setNotification(prev => ({
            ...prev,
            [name]: value
        }));
    }
    function handleTrigger() {
        addNotification(notification);
    }
    return (
        <div className="container">
            <select name="horizontal" onChange={handleChange} >
                <option value="left">Left</option>
                <option value="right">Right</option>
            </select>
            <select name="vertical" onChange={handleChange} >
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
            </select>
            <select name="type" onChange={handleChange}>
                <option value="success">Success</option>
                <option value="warn">Warn</option>
                <option value="error">Error</option>
                <option value="info">Info</option>
            </select>
            <input name="duration" type="number" placeholder="Duration" onChange={handleChange} />
            <input name="message" type="text" placeholder="Enter your message" onChange={handleChange} />
            <button onClick={handleTrigger}>Show Toast</button>

            {notifications.map(noti => (
                <Notification
                    key={noti.id}
                    id={noti.id}
                    type={noti.type}
                    duration={noti.duration}
                    message={noti.message}
                    position={`${noti.vertical}-${noti.horizontal}`}
                    onClose={removeNotification}
                />
            ))}
        </div>
    )
}

export default NotificationUI
