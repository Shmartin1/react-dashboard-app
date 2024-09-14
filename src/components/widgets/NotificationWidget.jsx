import React, { useState } from 'react';

function NotificationWidget({ className }) {
    const [notifications, setNotifications] = useState([
        { id: 1, text: 'Critical: Disk space low...', time: '10 minutes ago', bgColor: 'bg-red-100', textColor: 'text-red-800' },
        { id: 2, text: 'Warning: High memory usage detected', time: '38 minutes ago', bgColor: 'bg-yellow-100', textColor: 'text-yellow-800' },
        { id: 3, text: 'Info: New login from IP 192.168.1.1', time: '59 minutes ago', bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
    ]);

    const [swipeState, setSwipeState] = useState({});
    const [fadingIn, setFadingIn] = useState({});

    const handleSwipeStart = (e, id) => {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        setSwipeState({ ...swipeState, [id]: { startX: clientX, currentX: 0, swiping: true } });
    };

    const handleSwipeMove = (e, id) => {
        if (!swipeState[id] || !swipeState[id].swiping) return;

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const deltaX = clientX - swipeState[id].startX;

        setSwipeState({ ...swipeState, [id]: { ...swipeState[id], currentX: deltaX } });
    };

    const handleSwipeEnd = (id) => {
        const threshold = 150;
        const deltaX = swipeState[id]?.currentX || 0;

        if (deltaX > threshold) {
            // Move the notification to the bottom if swiped past the threshold
            setNotifications((prevNotifications) => {
                const swipedNotification = prevNotifications.find((n) => n.id === id);
                const remainingNotifications = prevNotifications.filter((n) => n.id !== id);

                setFadingIn((prevState) => ({ ...prevState, [id]: true }));

                return [...remainingNotifications, swipedNotification];
            });

            setTimeout(() => {
                setFadingIn((prevState) => ({ ...prevState, [id]: false }));
            }, 150);
        }

        setSwipeState({ ...swipeState, [id]: { currentX: 0, swiping: false } });
    };

    return (
        <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 ${className}`}>
            <h2 className="widget-title">Notifications</h2>
            <ul className="space-y-2">
                {notifications.map((notification) => (
                    <li
                        key={notification.id}
                        className={`${notification.bgColor} ${notification.textColor} p-3 rounded-lg cursor-pointer ${
                            fadingIn[notification.id] ? 'fade-in' : ''
                        }`}
                        style={{
                            transform: `translateX(${swipeState[notification.id]?.currentX || 0}px)`,
                            transition: swipeState[notification.id]?.swiping
                                ? 'none'
                                : 'transform 0.5s ease-out, opacity 1s',
                            opacity: fadingIn[notification.id] ? 0 : 1,
                        }}
                        onMouseDown={(e) => handleSwipeStart(e, notification.id)}
                        onMouseMove={(e) => handleSwipeMove(e, notification.id)}
                        onMouseUp={() => handleSwipeEnd(notification.id)}
                        onTouchStart={(e) => handleSwipeStart(e, notification.id)}
                        onTouchMove={(e) => handleSwipeMove(e, notification.id)}
                        onTouchEnd={() => handleSwipeEnd(notification.id)}
                    >
                        <p>{notification.text}</p>
                        <span className="text-xs text-gray-800">{notification.time}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NotificationWidget;
