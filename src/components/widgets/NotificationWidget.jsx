import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  moveNotificationToBottom,
  clearNewStatus
} from '../../store/slices/widgetSlices/notificationsWidgetSlice';

function NotificationWidget({ className }) {
    const dispatch = useDispatch();
    const notifications = useSelector((state) => state.notifications.notifications);
    const [swipeState, setSwipeState] = useState({});

    useEffect(() => {
        notifications.forEach(notification => {
            if (notification.isNew) {
                setTimeout(() => {
                    dispatch(clearNewStatus(notification.id));
                }, 500);
            }
        });
    }, [notifications, dispatch]);

    const handleSwipeStart = (e, id) => {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        setSwipeState({ ...swipeState, [id]: { startX: clientX, currentX: 0, swiping: true } });
    };

    const handleSwipeMove = (e, id) => {
        if (!swipeState[id] || !swipeState[id].swiping) return;

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const deltaX = clientX - swipeState[id].startX;

        if (deltaX < 0) return;

        setSwipeState({ ...swipeState, [id]: { ...swipeState[id], currentX: deltaX } });
    };

    const handleSwipeEnd = useCallback((id) => {
        const threshold = 100;
        const deltaX = swipeState[id]?.currentX || 0;

        if (deltaX > threshold) {
            dispatch(moveNotificationToBottom(id));
        }

        setSwipeState(prevState => ({
            ...prevState,
            [id]: { currentX: 0, swiping: false }
        }));
    }, [dispatch, swipeState]);

    const handleMouseLeave = useCallback(() => {
        Object.keys(swipeState).forEach(id => {
            if (swipeState[id].swiping) {
                handleSwipeEnd(Number(id));
            }
        });
    }, [swipeState, handleSwipeEnd]);

    useEffect(() => {
        const handleGlobalMouseUp = () => {
            Object.keys(swipeState).forEach(id => {
                if (swipeState[id].swiping) {
                    handleSwipeEnd(Number(id));
                }
            });
        };

        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => {
            window.removeEventListener('mouseup', handleGlobalMouseUp);
        };
    }, [swipeState, handleSwipeEnd]);

    return (
        <div className={`widget-card ${className}`} onMouseLeave={handleMouseLeave}>
            <div className="flex-justify-center">
                <h2 className="widget-title">Notifications</h2>
                <span className="timestamp-label mb-3">(Swipe to clear)</span>
            </div>
            
            <ul className="space-y-2">
                {notifications.map((notification) => (
                    <li
                        key={notification.id}
                        className={`${notification.bgColor} ${notification.textColor} p-3 rounded-lg cursor-pointer transition-all duration-500 ease-in-out ${
                            notification.isNew ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0'
                        }`}
                        style={{
                            transform: `translateX(${swipeState[notification.id]?.currentX || 0}px)`,
                            transition: swipeState[notification.id]?.swiping
                                ? 'none'
                                : 'transform 0.3s ease-out, opacity 0.5s ease-out, translate 0.5s ease-out',
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