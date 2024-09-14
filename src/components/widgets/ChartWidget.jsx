import React from 'react';
import LineChart from '../LineChart';

function ChartWidget({ className }) {
    return (
        <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Activity Chart</h2>
            <div className="flex justify-center items-center h-48 bg-gray-100">
            <div className="w-full max-w-xs">
                <LineChart />
            </div>
            </div>
        </div> 
    );
}

export default ChartWidget