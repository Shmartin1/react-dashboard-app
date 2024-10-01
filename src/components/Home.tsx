import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import favicon from '../assets/favicon.svg';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const { name, title, headshotUrl } = useSelector((state: RootState) => state.profile);

    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 pt-8 justify-center">
            <div className="flex flex-col md:flex-row w-full max-w-7xl lg:mx-20 xl:mx-40">
                {/* Left side */}
                <div className="w-full md:w-1/2 p-8 flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex items-center space-x-2 md:justify-start justify-center">
                        <h1 className="text-4xl font-bold mb-1 text-gray-800 dark:text-white">{name}</h1>
                        <img src={favicon} alt="Favicon" className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl mb-4 text-gray-800 dark:text-white">{title}</h3>
                    <div className="mt-5">
                        <div className="mb-8 overflow-hidden rounded-full w-48 h-48 border-4 border-blue-500 mx-auto md:mx-0">
                            <img 
                                src={headshotUrl} 
                                alt={name} 
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                </div>
                {/* Right side */}
                <div className="w-full md:w-1/2 p-8 lg:p-10 text-sm">
                    <p className="mb-8 text-gray-900 dark:text-gray-300">
                        Josh Martin is an innovative software engineer with 5 years of industry 
                        experience and demonstrated success in contributing to high-impact open-source
                        projects such as OpenMRS, a free medical record system. He acted as the lead 
                        software engineer and co-creator of the Simple Measurement of Activity in 
                        Real Time (SMART) system, an embedded system for real-time health metric 
                        monitoring and data capture. He exemplifies expertise in full-stack, web, 
                        backend development, database architecture, and DevOps.
                    </p>
                    <p className="mb-8 text-gray-900 dark:text-gray-300">
                        This website serves as a showcase of my technical skill and experience as a software engineer. 
                        Here, you'll find an interactive{' '} 
                        <Link
                            to='/dashboard'
                            className="text-blue-500 font-bold hover:underline hover:shadow-lg transition-shadow duration-300"
                        >
                            dashboard
                        </Link>{' '}
                        demonstrating my proficiency with React, Redux Toolkit, 
                        TypeScript, Tailwind, and more. Beyond the technical demonstration, this site houses my professional background, 
                        including my resume and a collection of projects that highlight my problem-solving abilities and 
                        coding expertise.
                    </p>

                    {/* Resume Boxes */}
                    <div className="space-y-6">
                        <div className="resume-card">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">SDE (Full Stack) · Expedia Group</h2>
                                <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">2022 — Present</span>
                            </div>
                            <p className="mt-3 text-xs text-gray-700 dark:text-gray-300">
                                Led the architecture and implementation of a dynamic messaging rules engine, enhancing the capability to deliver customized messaging.
                                Oversaw the maintenance of diverse backend services and progressive web applications, ensuring their reliability, performance, and alignment with project goals.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="pill-label">Java</span>
                                <span className="pill-label">Kotlin</span>
                                <span className="pill-label">TypeScript</span>
                                <span className="pill-label">React</span>
                                <span className="pill-label">GraphQL</span>
                            </div>
                        </div>

                        <div className="resume-card">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">SDE (Full Stack) · Infovisa Inc.</h2>
                                <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">2020 — 2022</span>
                            </div>
                            <p className="mt-3 text-xs text-gray-700 dark:text-gray-300">
                                Oversaw the maintenance and development of applications and APIs across a portfolio of more than twenty integrated financial technology products.
                                Functioned as the lead software engineer responsible for tax accounting and trust investment management applications, demonstrating proficiency in complex financial systems.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="pill-label">C# .NET</span>
                                <span className="pill-label">TypeScript</span>
                                <span className="pill-label">Azure</span>
                                <span className="pill-label">PostgreSQL</span>
                            </div>
                        </div>

                        <div className="resume-card">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">SDE (Full Stack, Embedded) · Madonna Rehabilitation Hospital</h2>
                                <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">2018 — 2020</span>
                            </div>
                            <p className="mt-3 text-xs text-gray-700 dark:text-gray-300">
                                Conceptualized and developed the Simple Measurement of Activity in Real Time (SMART) system, showcasing expertise in system design and implementation.
                                Led as the integration engineer facilitating collaboration between software and hardware teams, ensuring seamless synergy in project development.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="pill-label">HTML</span>
                                <span className="pill-label">React</span>
                                <span className="pill-label">SQL</span>
                                <span className="pill-label">C</span>
                                <span className="pill-label">Python</span>
                            </div>
                        </div>

                        <div className="resume-card">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">SDE (Backend) · Sandhills Global</h2>
                                <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">2017 — 2018</span>
                            </div>
                            <p className="mt-3 text-xs text-gray-700 dark:text-gray-300">
                                Developed web applications for trading and auctions, implementing meticulous design strategies to elevate user experiences and optimize system efficiency.
                                Led the design and optimization of APIs, implementing modifications to enhance functionality, performance, and maintainability.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="pill-label">C# .NET</span>
                                <span className="pill-label">VB.NET</span>
                                <span className="pill-label">MySQL</span>
                                <span className="pill-label">Python</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
