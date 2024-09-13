import React from 'react';
import LineChart from '../LineChart';

function ChartWidget() {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Activity Chart</h2>
            <div className="flex justify-center items-center h-48 bg-gray-100">
            <div className="w-full max-w-xs">
                <LineChart />
            </div>
            </div>
        </div> 
    );
}

export default ChartWidget