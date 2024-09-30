import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import favicon from '../assets/favicon.svg';

const Home: React.FC = () => {
    const { name, title, headshotUrl } = useSelector((state: RootState) => state.profile);

    return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
        {/* Left side */}
        <div className="w-1/2 p-8 flex flex-col ml-5">
            <div className="flex flex-row pl-5 mt-2">
                <h1 className="text-4xl font-bold mb-1 text-gray-800 dark:text-white pr-2">{name}</h1>
                <div>
                    <img src={favicon} alt="Favicon" className="w-10 h-10" />
                </div>
            </div>
            <h3 className="text-xl mb-4 text-gray-800 dark:text-white pl-5">{title}</h3>
            <div className="ml-16 mt-5">
                <div className="mb-8 overflow-hidden rounded-full w-48 h-48 border-4 border-blue-500">
                    <div className="w-full h-[120%] -translate-y-1">
                        <img 
                        src={headshotUrl} 
                        alt={name} 
                        className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>
            </div>
        </div>
        {/* Right side */}
        <div className="w-1/2 p-10 mr-10">
            <p className="text-sm mb-8 text-gray-900 dark:text-gray-300">
                Josh Martin is an innovative software engineer with 5 years of industry 
                experience and demonstrated success in contributing to high-impact open-source
                projects such as OpenMRS, a free medical record system. He acted as the lead 
                software engineer and co-creator of the Simple Measurement of Activity in 
                Real Time (SMART) system, an embedded system for real-time health metric 
                monitoring and data capture. He exemplifies expertise in full-stack, web, 
                backend development, database architecture, and DevOps.
            </p>
            <p className="text-sm mb-8 text-gray-900 dark:text-gray-300">
                This website serves as a showcase of my technical skill and experience as a software engineer. 
                Here, you'll find an interactive dashboard demonstrating my proficiency with React, Redux Toolkit, 
                TypeScript, Tailwind, and more. Beyond the technical demonstration, this site houses my professional background, 
                including my resume and a collection of projects that highlight my problem-solving abilities and 
                coding expertise.
            </p>
        </div>
    </div>
    );
}

export default Home;
