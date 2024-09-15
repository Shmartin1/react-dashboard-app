import React, { useState } from 'react';

function NotificationWidget({ className }) {
    const [notifications, setNotifications] = useState([
        { id: 1, text: 'Critical: Disk space low...', time: '10 minutes ago', bgColor: 'bg-red-100', textColor: 'text-red-800' },
        { id: 2, text: 'Warning: High memory usage detected', time: '38 minutes ago', bgColor: 'bg-yellow-100', textColor: 'text-yellow-800' },
        { id: 3, text: 'Info: New login from IP 192.168.1.1', time: '59 minutes ago', bgColor: 'bg-blue-100', textColor: 'text-blue-800' },
    ]);

    const [swipeState, setSwipeState] = useState({});
    const [fadingIn, setFadingIn] = useState({});
    const [fadingOut, setFadingOut] = useState({});

    const handleSwipeStart = (e, id) => {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        setSwipeState({ ...swipeState, [id]: { startX: clientX, currentX: 0, swiping: true } });
    };

    const handleSwipeMove = (e, id) => {
        if (!swipeState[id] || !swipeState[id].swiping) return;

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const deltaX = clientX - swipeState[id].startX;

        // Prevent dragging to the left (negative deltaX)
        if (deltaX < 0) return;

        setSwipeState({ ...swipeState, [id]: { ...swipeState[id], currentX: deltaX } });
    };

    const handleSwipeEnd = (id) => {
        const threshold = 100;
        const deltaX = swipeState[id]?.currentX || 0;

        if (deltaX > threshold) {
            setFadingOut((prevState) => ({ ...prevState, [id]: true }));
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
        <div className={`widget-card ${className}`}>
            <div className="flex justify-between items-center">
                <h2 className="widget-title">Notifications</h2>
                <span className="timestamp-label mb-3">(Swipe to clear)</span>
            </div>
            
            <ul className="space-y-2">
                {notifications.map((notification) => (
                    <li
                        key={notification.id}
                        className={`${notification.bgColor} ${notification.textColor} p-3 rounded-lg cursor-pointer ${
                            fadingIn[notification.id] ? 'fade-in' : ''
                        }`}
                        style={{
                            transform: `translateX(${swipeState[notification.id]?.currentX || 0}px)`,
                            opacity: fadingOut[notification.id] ? 0 : 1,
                            transition: swipeState[notification.id]?.swiping
                                ? 'none'
                                : 'transform 1s ease-out, opacity 1s ease-out',
                            opacity: fadingIn[notification.id] ? 0 : 1,
                        }}
                        onMouseDown={(e) => handleSwipeStart(e, notification.id)}
                        onMouseMove={(e) => handleSwipeMove(e, notification.id)}
                        onMouseUp={() => handleSwipeEnd(notification.id)}
                        onTouchStart={(e) => handleSwipeStart(e, notification.id)}
                        onTouchMove={(e) => handleSwipeMove(e, notification.id)}
                        onTouchEnd={() => handleSwipeEnd(notification.id)}
                    >
                        <p className="select-none">{notification.text}</p>
                        <span className="timestamp-label">{notification.time}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NotificationWidget;
