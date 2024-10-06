import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import favicon from '../assets/favicon.svg';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const { name, title, headshotUrl } = useSelector((state: RootState) => state.profile);

    return (
        <div className="home-container">
            <div className="left-box">
                {/* Left side */}
                <div className="left-side">
                    <div className="name-favicon-row">
                        <h1 className="name-label">{name}</h1>
                        <img src={favicon} alt="Favicon" className="w-10 h-10" />
                    </div>
                    <h3 className="title-label">{title}</h3>
                    <div className="mt-5 mb-12">
                        <div className="headshot-box">
                            <img 
                                src={headshotUrl} 
                                alt={name} 
                                className="headshot"
                            />
                        </div>
                    </div>
                </div>
                {/* Right side */}
                <div className="right-side">
                    <p className="bio-text">
                        I am a software engineer with 5 years of industry experience, as well as demonstrated success contributing to high-impact open-source projects. 
                        As the lead software engineer and co-creator of the Simple Measurement of Activity in Real Time (SMART) system, I developed an embedded system for real-time health metric monitoring and data capture. 
                        My expertise spans full-stack, web, and backend development, database architecture, and DevOps.
                    </p>
                    <p className="bio-text">
                        This website serves as a showcase of my technical skill and experience as a software engineer. 
                        Here, you'll find an interactive{' '} 
                        <Link
                            to='/dashboard'
                            className="nav-link"
                        >
                            dashboard
                        </Link>{' '}
                        demonstrating my proficiency with React, Redux Toolkit, 
                        TypeScript, Tailwind, and more. Beyond the technical demonstration, this site houses my professional background, 
                        including my{' '}
                        <Link
                            to='/resume'
                            className="nav-link"
                        >
                            resume
                        </Link>{' '}
                        and a collection of projects and{' '}
                        <Link
                            to='/research'
                            className="nav-link"
                        >
                            research
                        </Link>{' '}
                        that highlight my problem-solving abilities and 
                        coding expertise.
                    </p>

                    {/* Resume Boxes */}
                    <div className="space-y-6 pb-5">
                        <div className="resume-card">
                            <div className="flex-justify-center">
                                <h2 className="experience-title">SDE (Full Stack) · Expedia Group</h2>
                                <span className="year-label">2022 — Present</span>
                            </div>
                            <p className="experience-description">
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
                            <div className="flex-justify-center">
                                <h2 className="experience-title">SDE (Full Stack) · Infovisa Inc.</h2>
                                <span className="year-label">2020 — 2022</span>
                            </div>
                            <p className="experience-description">
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
                            <div className="flex-justify-center">
                                <h2 className="experience-title">SDE (Full Stack, Embedded) · Madonna Rehabilitation Hospital</h2>
                                <span className="year-label">2018 — 2020</span>
                            </div>
                            <p className="experience-description">
                                Conceptualized and developed the Simple Measurement of Activity in Real Time (SMART) system, showcasing expertise in system design and implementation.
                                Led as the integration engineer facilitating collaboration between software and hardware teams, ensuring seamless synergy in project development.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="pill-label">JavaScript</span>
                                <span className="pill-label">React</span>
                                <span className="pill-label">SQL</span>
                                <span className="pill-label">C</span>
                                <span className="pill-label">Python</span>
                            </div>
                        </div>

                        <div className="resume-card">
                            <div className="flex-justify-center">
                                <h2 className="experience-title">SDE (Backend) · Sandhills Global</h2>
                                <span className="year-label">2017 — 2018</span>
                            </div>
                            <p className="experience-description">
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
