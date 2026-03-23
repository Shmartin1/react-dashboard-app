import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">
        My Resume
      </h1>

      {/* Resume content */}
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-6">
        {/* Section 1: Professional Summary */}
        <div>
          <h2 className="profesional-summary-title">
            Professional Summary
          </h2>
          <p className="resume-bullet">
            Innovative software engineer with 5 years of industry experience and demonstrated success in contributing to high-impact open-source projects such as OpenMRS, a free medical record system. Lead software engineer and co-creator of the Simple Measurement of Activity in Real Time (SMART) system, an embedded system for real-time health metric monitoring and data capture. Expertise in full-stack, web, backend development, database architecture, and DevOps.
          </p>
        </div>

        {/* Section 2: Employment */}
        <div>
          <h3 className="section-title">
            Employment
          </h3>
          <div className="space-y-4">

            <div>
              <h4 className="text-lg font-semibold">Software Development Engineer (Full Stack) - Meta</h4>
              <p className="text-sm resume-bullet">2025 - Present</p>
              <ul className="job-ul">
                <li>Build, maintain, and operate benefits for Meta Subscriptions</li>
                <li>Lead efforts to modernize the AI workflows used to accelerate the software lifecycle.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Software Development Engineer (Full Stack) - Expedia Group</h4>
              <p className="text-sm resume-bullet">Nov 2022 - Present</p>
              <ul className="job-ul">
                <li>Designed and implemented a dynamic messaging rules engine, enhancing the capability to deliver customized messaging, achieving an initial cost savings of $11.1M.</li>
                <li>Designed and managed infrastructure components, encompassing AWS resources, continuous integration and rollback pipelines, and application monitoring and alerting systems, ensuring robust and scalable operational environments.</li>
                <li>Designed and implemented a scalable microservices architecture for a high-traffic application, reducing downtime by 10% and improving response time by 30%.</li>
                <li>Mentored 2 junior developers, resulting in a 30% reduction in onboarding time and higher code quality standards.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Software Development Engineer (Full Stack) - Infovisa Inc.</h4>
              <p className="text-sm resume-bullet">Aug 2020 - Nov 2022</p>
              <ul className="job-ul">
                <li>Led the development and maintenance of 20+ financial technology applications with a focus on tax accounting and trust investment management.</li>
                <li>Managed the development of continuous integration tools, automated and unit tests, showcasing a commitment to implementing robust testing practices and efficient build processes.</li>
                <li>Achieved notable performance improvements, including a 40% reduction in average build times and 64% faster load times for web applications, contributing to enhanced operational efficiency.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Software Engineer (Full Stack, Embedded) - Madonna Rehabilitation Hospital</h4>
              <p className="text-sm resume-bullet">Aug 2018 - May 2020</p>
              <ul className="job-ul">
                <li>Conceptualized and developed the SMART system for real-time health metric monitoring.</li>
                <li>Designed and implemented embedded software and a progressive web application for data visualization.</li>
                <li>Led integration efforts between software and hardware teams.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Software Development Engineer (Backend) - Sandhills Global</h4>
              <p className="text-sm resume-bullet">May 2017 - Aug 2018</p>
              <ul className="job-ul">
                <li>Developed web applications for trading and auctions, enhancing user experience and system efficiency.</li>
                <li>Led the design and optimization of APIs for improved functionality and performance.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Education */}
        <div>
          <h3 className="section-title">
            Education
          </h3>
          <p className="resume-bullet">
            <strong>Bachelor of Science in Software Engineering, Minor in Mathematics</strong><br />
            University of Nebraska - Lincoln, Graduation - Aug 2020
          </p>
        </div>

        {/* Section 4: Tools & Technologies */}
        <div>
          <h3 className="section-title">
            Tools & Technologies
          </h3>
          <p className="resume-bullet">
            Java, JavaScript / TypeScript, C#, C++, Python, HTML, CSS, SQL, PostgreSQL, React, GraphQL, Kotlin, AWS, Docker, Jenkins, Git
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <a 
            href="/JoshuaMartinResume.pdf"
            download="JoshuaMartinResume.pdf"
            className="download-button"
          >
            Download Resume PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;