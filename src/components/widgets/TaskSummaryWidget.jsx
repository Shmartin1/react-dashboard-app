import React from 'react';

function TaskSummaryWidget() {
    return(
        <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Task Summary</h2>
        <ul className="space-y-3">
          <li className="flex flex-row justify-between items-center">
            <p className="text-gray-700">Complete redesign</p>
            <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">Completed</span>
          </li>
          <li className="flex flex-row justify-between items-center">
            <p className="text-gray-700">Fix header</p>
            <span className="bg-yellow-100 text-yellow-800 text-sm px-2 py-1 rounded">In Progress</span>
          </li>
          <li className="flex flex-row justify-between items-center">
            <p className="text-gray-700">Add dark mode</p>
            <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded">Pending</span>
          </li>
        </ul>
      </div>
    );
}

export default TaskSummaryWidget;