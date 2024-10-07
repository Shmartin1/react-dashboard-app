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
              <h4 className="text-lg font-semibold">Software Development Engineer (Full Stack) - Expedia Group</h4>
              <p className="text-sm resume-bullet">Nov 2022 - Present</p>
              <ul className="job-ul">
                <li>Led the architecture and implementation of a dynamic messaging rules engine, enhancing the capability to deliver customized messaging.</li>
                <li>Designed and managed infrastructure components including AWS resources, continuous integration pipelines, and monitoring systems.</li>
                <li>Collaborated with stakeholders to interpret features and extract requirements.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Software Development Engineer (Full Stack) - Infovisa Inc.</h4>
              <p className="text-sm resume-bullet">Aug 2020 - Nov 2022</p>
              <ul className="job-ul">
                <li>Maintained and developed applications and APIs across over twenty integrated financial products.</li>
                <li>Improved web application load times by 64% and reduced build times by 40%.</li>
                <li>Led the development of continuous integration tools and robust testing practices.</li>
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