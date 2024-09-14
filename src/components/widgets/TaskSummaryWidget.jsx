import React from 'react';

function TaskSummaryWidget({ className }) {
    return (
        <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg pr-6 ${className}`}>
            <h2 className="widget-title mt-6 ml-4">Task Summary</h2>
            <ul className="space-y-4 ml-4">
                <li className="flex flex-row justify-between items-center">
                    <p className="text-gray-700  dark:text-gray-200 whitespace-nowrap pr-5">Add dark mode</p>
                    <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded w-24 text-center">
                        Completed
                    </span>
                </li>
                <li className="flex flex-row justify-between items-center">
                    <p className="text-gray-700 dark:text-gray-200">Fix header</p>
                    <span className="bg-yellow-100 text-yellow-800 text-sm px-2 py-1 rounded w-24 text-center">
                        In Progress
                    </span>
                </li>
                <li className="flex flex-row justify-between items-center">
                    <p className="text-gray-700 dark:text-gray-200">Finish tasks</p>
                    <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded w-24 text-center">
                        Pending
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default TaskSummaryWidget;
