import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchActivities } from '../../store/slices/recentActivitySlice';
import { RootState, AppDispatch } from '../../store';

interface RecentActivityWidgetProps {
    className?: string;
}

function RecentActivityWidget({ className }: RecentActivityWidgetProps) {
    const dispatch = useDispatch<AppDispatch>();
    const { activities, status, error } = useSelector((state: RootState) => state.recentActivity);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchActivities());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div className={`widget-card ${className}`}>Loading recent activities...</div>;
    }

    if (status === 'failed') {
        return <div className={`widget-card ${className}`}>Error: {error}</div>;
    }

    return (
        <div className={`widget-card ${className}`}>
            <h2 className="widget-title">Recent Activity</h2>
            {activities.length === 0 ? (
                <p>No recent activities.</p>
            ) : (
                <ul className="space-y-2">
                    {activities.map((activity) => (
                        <li key={activity.id} className="recent-message">
                            <p className="message-text">{activity.text}</p>
                            <span className="timestamp-label">{activity.timestamp}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default RecentActivityWidget;