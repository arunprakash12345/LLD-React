import { useState } from 'react';


const useNotification = () => {
    const [notifications, setNotifications] = useState([]);
    function addNotification(newnotification) {
        setNotifications(prev => [...prev, { ...newnotification, id: new Date() }]);
    }
    function removeNotification(id) {
        setNotifications(prev =>
            prev.filter(notification => notification.id !== id)
        );
    }

    function clearNotification() {
        setNotifications([]);
    }

    return { notifications, addNotification, removeNotification, clearNotification };
}

export default useNotification;
