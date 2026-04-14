import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import favicon from '../assets/favicon.svg';
import { RootState } from '../store';

const Home: React.FC = () => {
  const { name, title, headshotUrl } = useSelector((state: RootState) => state.profile);

  return (
    <div className="home-container">
      <div className="left-box">
        <div className="left-side">
          <div className="name-favicon-row">
            <h1 className="name-label">{name}</h1>
            <img src={favicon} alt="Favicon" className="h-10 w-10" />
          </div>
          <h3 className="title-label">{title}</h3>
          <div className="headshot-shell">
            <div className="headshot-box">
              <img
                src={headshotUrl}
                alt={name}
                className="headshot"
              />
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="section-panel bio-panel p-8 sm:p-10">
            <p className="bio-text bio-divider">
              Hi, I&apos;m Josh, a software engineer with <strong>6</strong> years of industry experience building scalable systems and delivering high-impact software.
              I currently work on the Meta Subscriptions team, where I help build, operate, and monetize products used by billions of people.
              My background spans full-stack and backend development, distributed systems, database architecture, and DevOps, with a focus on building
              reliable, performant systems that operate at scale.
            </p>
            <p className="bio-text bio-divider">
              Previously, I worked at Expedia Group on high-traffic scalable microservices. I was also the lead software engineer and co-creator of the Simple Measurement of Activity in Real Time (SMART) system,
              where I developed an embedded system for real-time health metric monitoring and data capture.
            </p>
            <p className="bio-text !mb-0">
              This website serves as a portfolio of my work and technical interests, showcasing{' '}
              <Link to="./projects" className="nav-link">projects</Link>,{' '}
              <Link to="/research" className="nav-link">research</Link>, and{' '}
              <Link to="/resume" className="nav-link">experience</Link>{' '}
              that highlight my problem-solving abilities and coding expertise.
            </p>
          </div>

          <div className="space-y-6 pb-5">
            <div className="resume-card">
              <div className="flex-justify-center">
                <h2 className="experience-title">SDE (Full Stack) · Meta</h2>
                <span className="year-label">2025 — Present</span>
              </div>
              <ul className="experience-list">
                <li>Build, maintain, and operate benefits for Meta Subscriptions.</li>
                <li>Lead efforts to modernize the AI workflows used to accelerate the software lifecycle.</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="pill-label">Hack</span>
                <span className="pill-label">Kotlin</span>
                <span className="pill-label">Python</span>
                <span className="pill-label">React</span>
                <span className="pill-label">GraphQL</span>
              </div>
            </div>

            <div className="resume-card">
              <div className="flex-justify-center">
                <h2 className="experience-title">SDE (Full Stack) · Expedia Group</h2>
                <span className="year-label">2022 — 2025</span>
              </div>
              <ul className="experience-list">
                <li>Designed and implemented a dynamic messaging rules engine, achieving an initial cost savings of $11.1M.</li>
                <li>Designed and implemented a scalable microservices architecture for a high-traffic application, reducing downtime by 10% and improving response time by 30%.</li>
                <li>Mentored 2 junior developers, resulting in a 30% reduction in onboarding time and higher code quality standards.</li>
              </ul>
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
              <ul className="experience-list">
                <li>Led the development and maintenance of 20+ financial technology applications with a focus on tax accounting and trust investment management.</li>
                <li>Achieved notable performance improvements, including a 40% reduction in average build times and 64% faster load times for web applications.</li>
              </ul>
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
              <ul className="experience-list">
                <li>Conceptualized and developed the Simple Measurement of Activity in Real Time (SMART) system.</li>
                <li>Led as the integration engineer facilitating collaboration between software and hardware teams.</li>
              </ul>
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
              <ul className="experience-list">
                <li>Developed web applications for trading and auctions, improving user experience and system efficiency.</li>
                <li>Led the design and optimization of APIs to enhance functionality, performance, and maintainability.</li>
              </ul>
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
};

export default Home;
