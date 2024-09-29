import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Home: React.FC = () => {
    const { name, headshotUrl } = useSelector((state: RootState) => state.profile);

    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Joshua Martin</h1>
        <div className="mb-8 overflow-hidden rounded-full w-48 h-48 border-4 border-blue-500">
            <div className="w-full h-[120%] -translate-y-1">
                <img 
                src={headshotUrl} 
                alt={name} 
                className="w-full h-full object-cover object-top"
                />
            </div>
        </div>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 p-5">
            Josh Martin is an innovative software engineer with 5 years of industry 
            experience and demonstrated success in contributing to high-impact open-source
            projects such as OpenMRS, a free medical record system. He acted as the lead 
            software engineer and co-creator of the Simple Measurement of Activity in 
            Real Time (SMART) system, an embedded system for real-time health metric 
            monitoring and data capture. He exemplifies expertise in full-stack, web, 
            backend development, database architecture, and DevOps.
        </p>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 p-5 pt-10">
            This website serves as a showcase of my technical skill and experience as a software engineer. 
            Here, you'll find an interactive dashboard demonstrating my proficiency with React, Redux Toolkit, 
            TypeScript, Tailwind, and more. Beyond the technical demonstration, this site houses my professional background, 
            including my resume and a collection of projects that highlight my problem-solving abilities and 
            coding expertise.
        </p>
    </div>
    );
}

export default Home;
