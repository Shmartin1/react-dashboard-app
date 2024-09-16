import React from 'react';

function TaskSummaryWidget({ className }) {
    return (
        <div className={`widget-card ${className}`}>
            <h2 className="widget-title">Task Summary</h2>
            <ul className="space-y-4 ml-1">
                <li className="flex flex-row justify-between items-center">
                    <p className="task-summary-label">Add dark mode</p>
                    <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded w-24 text-center">
                        Completed
                    </span>
                </li>
                <li className="flex-justify-center">
                    <p className="task-summary-label">Fix header</p>
                    <span className="bg-yellow-100 text-yellow-800 text-sm px-2 py-1 rounded w-24 text-center">
                        In Progress
                    </span>
                </li>
                <li className="flex-justify-center">
                    <p className="task-summary-label">Finish tasks</p>
                    <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded w-24 text-center">
                        Pending
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default TaskSummaryWidget;
