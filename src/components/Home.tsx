import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Code2, FileText } from 'lucide-react';
import { RootState } from '../store';
import { experiences } from '../data/portfolio';
import Reveal from './Reveal';
import Magnet from './react-bits/Magnet';
import CountUp from './react-bits/CountUp';
import ShinyText from './react-bits/ShinyText';
import StarBorder from './react-bits/StarBorder';
import SmoothAnchor from './SmoothAnchor';

const Home: React.FC = () => {
  const { name, title, headshotUrl } = useSelector((state: RootState) => state.profile);

  return (
    <div className="home-container">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" /><div className="hero-ambient" aria-hidden="true"><span /><span /></div>
        <Reveal className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="status-dot" />{title}</p>
          <h1 id="hero-title">{name.split(' ')[0]}<br /><ShinyText text={`${name.split(' ').slice(1).join(' ')}.`} /></h1>
          <p className="hero-description">Building scalable systems and delivering high-impact software.</p>
          <div className="hero-actions">
            <Magnet><StarBorder><SmoothAnchor href="#experience" className="button button-primary">View resume <ArrowDown size={18} aria-hidden="true" /></SmoothAnchor></StarBorder></Magnet>
            <Link to="/projects" className="button button-secondary">Explore my work <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="current-role"><span className="current-role-line" /><span>Currently at <strong>Meta</strong> – Subscriptions / Monetization</span></div>
        </Reveal>
        <Reveal className="hero-portrait" delay={120}>
          <div className="portrait-frame">
            <img src={headshotUrl} alt={name} className="headshot" loading="eager" />
            </div>
          <p className="portrait-caption">FULL STACK. RELIABILITY. AT SCALE.</p>
        </Reveal>
        <SmoothAnchor className="hero-scroll" href="#about"><ArrowDown size={15} aria-hidden="true" /> A little more about me</SmoothAnchor>
      </section>

      <section className="impact-strip" aria-label="Career highlights">
        <div><strong aria-label="6 years"><span aria-hidden="true"><CountUp to={6} /><span> years</span></span></strong><p>Industry experience</p></div>
        <div className="impact-company">
          <div><strong aria-label="$10M+"><span aria-hidden="true">$<CountUp to={10} delay={0.15} />M+</span></strong><p>Cost savings at Expedia</p></div>
          <img className="impact-logo impact-logo-expedia" src={`${process.env.PUBLIC_URL}/logos/expedia-on-dark.svg`} alt="" width="1000" height="201" />
        </div>
        <div className="impact-company">
          <div><strong aria-label="$5M+"><span aria-hidden="true">$<CountUp to={5} delay={0.3} />M+</span></strong><p>ARR gained at Meta</p></div>
          <img className="impact-logo impact-logo-meta" src={`${process.env.PUBLIC_URL}/logos/meta-on-dark.svg`} alt="" width="50" height="11" />
        </div>
      </section>

      <section className="about-section section-layout" id="about" tabIndex={-1} aria-labelledby="about-title">
        <Reveal className="section-intro"><p className="eyebrow">About me</p><h2 id="about-title">Reliable systems.<br /><span>Measurable impact.</span></h2></Reveal>
        <Reveal className="about-copy"><p className="bio-text">
              Hi! I&apos;m Josh, a software engineer with <strong>6</strong> years of industry experience building scalable systems and delivering high-impact software.
              I currently work on the Meta Subscriptions team, where I help build, operate, and monetize products used by billions of people.
            </p>
<p className="bio-text">
              Previously, I worked at Expedia Group on high-traffic scalable microservices. I was also the lead software engineer and co-creator of the Simple Measurement of Activity in Real Time (SMART) system,
              where I developed an embedded system for real-time health metric monitoring and data capture.
            </p>
<p className="bio-text">
              This website serves as a portfolio of my work and technical interests, showcasing{' '}
              <Link to="/projects" className="nav-link">projects</Link>,{' '}
              <Link to="/research" className="nav-link">research</Link>, and{' '}
              <Link to="/resume" className="nav-link">experience</Link>{' '}
              that highlight my problem-solving abilities and coding expertise.
            </p></Reveal>
      </section>

      <section className="experience-section section-layout" id="experience" tabIndex={-1} aria-labelledby="experience-title">
        <div className="section-intro"><p className="eyebrow">The journey</p><h2 id="experience-title">Experience<span>.</span></h2><Link to="/resume" className="text-link">Full resume <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <Reveal key={experience.company}>
              <div className="content-card experience-card">
                <div className="experience-meta"><span className="mono">{experience.dates}</span>{index === 0 && <span className="current-badge">Current</span>}</div>
                <div className="experience-company">
                  <h3>{experience.company}</h3>
                  {experience.employmentType === 'Internship' && <span className="internship-badge">Internship</span>}
                </div>
                <p className="experience-role">{experience.role}</p>
                <ul>{experience.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
                <div className="tag-list">{experience.technologies.map(technology => <span className="pill-label" key={technology}>{technology}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="explore-section" aria-labelledby="explore-title">
        <div className="section-heading"><div><p className="eyebrow">Beyond the day job</p><h2 id="explore-title">Work & curiosity<span>.</span></h2></div></div>
        <div className="explore-grid">
          <div className="content-card explore-card"><Link to="/projects"><Code2 size={26} strokeWidth={1.4} aria-hidden="true" /><span className="explore-number">BUILD</span><h3>Personal projects</h3><p>React, TypeScript, mobile development, and AI.</p><span className="text-link">Explore projects <ArrowUpRight size={19} aria-hidden="true" /></span></Link></div>
          <div className="content-card explore-card"><Link to="/research"><FileText size={26} strokeWidth={1.4} aria-hidden="true" /><span className="explore-number">EXPLORE</span><h3>Papers & research</h3><p>Dimensionality reduction, data compression, and cryptography.</p><span className="text-link">Read the research <ArrowUpRight size={19} aria-hidden="true" /></span></Link></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
