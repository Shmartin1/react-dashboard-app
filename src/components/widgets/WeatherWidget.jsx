import React from 'react';

function WeatherWidget() {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Current Weather</h2>
            <div className="text-gray-700">
            <p className="text-2xl font-bold">22°C</p>
            <p className="text-gray-500">Sunny</p>
            <p className="text-gray-500">New York, USA</p>
            </div>
        </div>
    );
}

export default WeatherWidget;