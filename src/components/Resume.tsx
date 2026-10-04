import React from 'react';
import { ArrowUpRight, Award, ChevronRight, Cloud, Code2, Database, Download, PanelsTopLeft, Trophy } from 'lucide-react';
import PageHeading from './PageHeading';
import { metaHighlights } from '../data/portfolio';

// Re-enable once the downloadable PDF matches the current resume.
const resumePdfAvailable = false;

const technologyGroups = [
  { id: 'languages', title: 'Languages', Icon: Code2, items: ['Java', 'JavaScript', 'TypeScript', 'C++', 'Python', 'Kotlin'] },
  { id: 'web', title: 'Web & APIs', Icon: PanelsTopLeft, items: ['React', 'HTML', 'CSS', 'GraphQL', 'REST'] },
  { id: 'data', title: 'Data', Icon: Database, items: ['SQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka'] },
  { id: 'cloud', title: 'Cloud & DevOps', Icon: Cloud, items: ['AWS', 'Docker', 'Jenkins', 'Git', 'Kubernetes'] },
];

const Resume: React.FC = () => {
  return (
    <div className="page-container resume-page">
      <div className="app-main">
        <PageHeading eyebrow="My journey" title="My Resume">{resumePdfAvailable && <a href="/JoshuaMartinResume.pdf" download="JoshuaMartinResume.pdf" className="download-button">Download PDF <Download size={16} aria-hidden="true" /></a>}</PageHeading>

        <div className="resume-document">
          <div className="resume-section resume-section--summary">
            <h2 className="profesional-summary-title">
              Professional Summary
            </h2>
            <p className="resume-bullet">
              Software engineer with 6 years of experience building scalable, high-impact products across full-stack, backend, and distributed systems domains. Currently develop and operate subscription products at Meta, with prior experience delivering high-traffic microservices at Expedia Group and leading development of the SMART system for real-time health metric monitoring. Strong background in system design, database architecture, cloud infrastructure, and DevOps, with a focus on building reliable, performant software that creates measurable business value.
            </p>
          </div>

          <div className="resume-section resume-section--employment">
            <h2 className="section-title">
              Employment
            </h2>
            <div className="resume-employment">
              <details className="resume-entry" open>
                <summary className="resume-entry-header">
                  <ChevronRight className="resume-entry-chevron" size={18} strokeWidth={1.8} aria-hidden="true" />
                  <h3 className="resume-entry-title">
                    Software Development Engineer (Full Stack) -{' '}
                    <span className="resume-company">
                      Meta
                      <img className="resume-company-logo" src={`${process.env.PUBLIC_URL}/logos/meta-on-dark.svg`} alt="" width="100" height="22" />
                    </span>
                  </h3>
                  <p className="resume-entry-date">May 2025 - Present</p>
                </summary>
                <ul className="job-ul">
                  {metaHighlights.map(highlight => <li key={highlight}>{highlight}</li>)}
                  <li>Lead efforts to modernize the AI workflows used to accelerate the software lifecycle.</li>
                </ul>
              </details>

              <details className="resume-entry" open>
                <summary className="resume-entry-header">
                  <ChevronRight className="resume-entry-chevron" size={18} strokeWidth={1.8} aria-hidden="true" />
                  <h3 className="resume-entry-title">
                    Software Development Engineer (Full Stack) -{' '}
                    <span className="resume-company">
                      Expedia Group
                      <img className="resume-company-logo" src={`${process.env.PUBLIC_URL}/logos/expedia-on-dark.svg`} alt="" width="109" height="22" />
                    </span>
                  </h3>
                  <p className="resume-entry-date">Nov 2022 - May 2025</p>
                </summary>
                <ul className="job-ul">
                  <li>Designed and implemented a dynamic messaging rules engine, enhancing the capability to deliver customized messaging, achieving an initial cost savings of $11.1M.</li>
                  <li>Designed and managed infrastructure components, encompassing AWS resources, continuous integration and rollback pipelines, and application monitoring and alerting systems, ensuring robust and scalable operational environments.</li>
                  <li>Designed and implemented a scalable microservices architecture for a high-traffic application, reducing downtime by 10% and improving response time by 30%.</li>
                  <li>Mentored 2 junior developers, resulting in a 30% reduction in onboarding time and higher code quality standards.</li>
                </ul>
              </details>

              <details className="resume-entry" open>
                <summary className="resume-entry-header">
                  <ChevronRight className="resume-entry-chevron" size={18} strokeWidth={1.8} aria-hidden="true" />
                  <h3 className="resume-entry-title">
                    Software Development Engineer (Full Stack) -{' '}
                    <span className="resume-company">
                      Infovisa Inc.
                      <img className="resume-company-logo" src={`${process.env.PUBLIC_URL}/logos/infovisa-on-dark.svg`} alt="" width="102" height="22" />
                    </span>
                  </h3>
                  <p className="resume-entry-date">Aug 2020 - Nov 2022</p>
                </summary>
                <ul className="job-ul">
                  <li>Led the development and maintenance of 20+ financial technology applications with a focus on tax accounting and trust investment management.</li>
                  <li>Managed the development of continuous integration tools, automated and unit tests, showcasing a commitment to implementing robust testing practices and efficient build processes.</li>
                  <li>Achieved notable performance improvements, including a 40% reduction in average build times and 64% faster load times for web applications, contributing to enhanced operational efficiency.</li>
                </ul>
              </details>

              <details className="resume-entry">
                <summary className="resume-entry-header">
                  <ChevronRight className="resume-entry-chevron" size={18} strokeWidth={1.8} aria-hidden="true" />
                  <div className="resume-entry-heading">
                    <h3 className="resume-entry-title">Software Engineer (Full Stack, Embedded) - Madonna Rehabilitation Hospital</h3>
                    <span className="internship-badge">Internship</span>
                  </div>
                  <p className="resume-entry-date">Aug 2018 - May 2020</p>
                </summary>
                <ul className="job-ul">
                  <li>Conceptualized and developed the SMART system for real-time health metric monitoring.</li>
                  <li>Designed and implemented embedded software and a progressive web application for data visualization.</li>
                  <li>Led integration efforts between software and hardware teams.</li>
                </ul>
              </details>

              <details className="resume-entry">
                <summary className="resume-entry-header">
                  <ChevronRight className="resume-entry-chevron" size={18} strokeWidth={1.8} aria-hidden="true" />
                  <div className="resume-entry-heading">
                    <h3 className="resume-entry-title">Software Development Engineer (Backend) - Sandhills Global</h3>
                    <span className="internship-badge">Internship</span>
                  </div>
                  <p className="resume-entry-date">May 2017 - Aug 2018</p>
                </summary>
                <ul className="job-ul">
                  <li>Developed web applications for trading and auctions, enhancing user experience and system efficiency.</li>
                  <li>Led the design and optimization of APIs for improved functionality and performance.</li>
                </ul>
              </details>
            </div>
          </div>

          <div className="resume-grid">
            <div className="resume-section">
              <h2 className="section-title">
                Education
              </h2>
              <div className="resume-education-heading">
                <div className="resume-education-copy">
                  <p><strong>Bachelor of Science in Software Engineering</strong>, Minor in Mathematics</p>
                  <p className="resume-bullet">
                    <span className="resume-university">University of Nebraska - Lincoln</span>, Graduation - Aug 2020
                  </p>
                </div>
                <img
                  className="resume-university-logo"
                  src={`${process.env.PUBLIC_URL}/logos/nebraska-n.svg`}
                  alt=""
                  width="174"
                  height="152"
                />
              </div>
              <figure className="resume-gymnastics">
                <figcaption className="resume-gymnastics-copy">
                  <h3 id="resume-gymnastics-title">Nebraska Gymnastics</h3>
                  <ul className="resume-gymnastics-honors" aria-labelledby="resume-gymnastics-title">
                    <li>
                      <Award size={18} strokeWidth={1.6} aria-hidden="true" />
                      <div><strong>All-American</strong><span>Pommel horse</span></div>
                    </li>
                    <li>
                      <Trophy size={18} strokeWidth={1.6} aria-hidden="true" />
                      <div><strong>3rd-place team finish</strong><span>2019</span></div>
                    </li>
                  </ul>
                  <a
                    className="text-link resume-gymnastics-watch"
                    href="https://www.youtube.com/watch?v=hLES9Yq_gDo"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Watch on YouTube (opens in a new tab)"
                  >
                    Watch on YouTube <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </figcaption>
                <img
                  className="resume-gymnastics-photo"
                  src={`${process.env.PUBLIC_URL}/images/nebraska-gymnastics-2019.png`}
                  alt="Nebraska gymnastics team celebrating with trophies and a third-place team sign in 2019."
                  width="1080"
                  height="1079"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>

            <div className="resume-section">
              <h2 className="section-title">
                Tools & Technologies
              </h2>
              <div className="resume-tools">
                {technologyGroups.map(({ id, title, Icon, items }) => (
                  <div className="resume-tool-group" key={id}>
                    <h3 className="resume-tool-label" id={`resume-tools-${id}`}>
                      <Icon size={17} strokeWidth={1.6} aria-hidden="true" />
                      {title}
                    </h3>
                    <ul className="resume-tool-tags" aria-labelledby={`resume-tools-${id}`}>
                      {items.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {resumePdfAvailable && <div className="resume-download">
            <a
              href="/JoshuaMartinResume.pdf"
              download="JoshuaMartinResume.pdf"
              className="download-button"
            >
              Download Resume PDF
            </a>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Resume;
