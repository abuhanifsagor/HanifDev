import React from "react";

const Education = () => {
  return (
    <div className="py-10 px-4 md:px-8 max-w-5xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Education & Certifications
      </h1>

      {/* Mobile view */}
      <div className="flex flex-col space-y-6 md:hidden">
        {/* Success Education */}
        <div className="mockup-code text-gray-500 education w-full rounded-md shadow">
          <pre data-prefix="1">
            <code>npm i education</code>
          </pre>
          <pre data-prefix="2" className="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix="3" className="text-success">
            <code>Done!</code>
          </pre>
          <pre data-prefix="4" className="text-gray-700">
            <code>Diploma in Computer Science</code>
          </pre>
          <pre data-prefix="5" className="text-gray-500">
            <code>Barishal Polytechnic Institute</code>
          </pre>
          <pre data-prefix="6" className="text-gray-500">
            <code>2021 – 2022</code>
          </pre>
        </div>

        {/* Success Certificate */}
        <div className="mockup-code text-gray-500 education w-full rounded-md shadow">
          <pre data-prefix="1">
            <code>npm i certificate</code>
          </pre>
          <pre data-prefix="2" className="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix="3" className="text-success">
            <code>Done!</code>
          </pre>
          <pre data-prefix="4" className="text-gray-700">
            <code>Front End Web Developer</code>
          </pre>
          <pre data-prefix="5" className="text-gray-500">
            <code>Issued by: PeopleNTech Institute of IT</code>
          </pre>
          <pre data-prefix="6" className="text-gray-500">
            <code>Completed: January 2025 (6 months)</code>
          </pre>
          <pre data-prefix="7" className="text-blue-600 underline">
            <a href="#" target="_blank" rel="noopener noreferrer">
              View Credential
            </a>
          </pre>
        </div>

        {/* Error Education */}
        <div className="mockup-code text-gray-500 education w-full rounded-md shadow">
          <pre data-prefix="1">
            <code>npm i education</code>
          </pre>
          <pre data-prefix="2" className="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix="3" className="text-error">
            <code>ERR! 404 education-advanced not found</code>
          </pre>
          <pre data-prefix="4" className="text-info">
            <code>continue...</code>
          </pre>
        </div>

        {/* Error Certificate */}
        <div className="mockup-code text-gray-500 education w-full rounded-md shadow">
          <pre data-prefix="1">
            <code>npm i certificate</code>
          </pre>
          <pre data-prefix="2" className="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix="3" className="text-error">
            <code>ERR! 403 certificate access denied</code>
          </pre>
          <pre data-prefix="4" className="text-info">
            <code>continue...</code>
          </pre>
        </div>
      </div>

      {/* Desktop view */}
      <ul className="timeline timeline-vertical hidden md:block">
        {/* Success Education */}
        <li>
          <div className="timeline-start timeline-box p-5 overflow-hidden mockup-code text-gray-500 education">
            <pre data-prefix="1">
              <code>npm i education</code>
            </pre>
            <pre data-prefix="2" className="text-warning">
              <code>installing...</code>
            </pre>
            <pre data-prefix="3" className="text-success">
              <code>Done!</code>
            </pre>
            <pre data-prefix="4" className="text-gray-700">
              <code>Diploma in Computer Science</code>
            </pre>
            <pre data-prefix="5" className="text-gray-500">
              <code>Barishal Polytechnic Institute</code>
            </pre>
            <pre data-prefix="6" className="text-gray-500">
              <code>2021 – 2022</code>
            </pre>
          </div>
          <hr />
        </li>

        {/* Success Certificate */}
        <li>
          <hr />
          <div className="timeline-end timeline-box p-5 overflow-hidden mockup-code text-gray-500 education">
            <pre data-prefix="1">
              <code>npm i certificate</code>
            </pre>
            <pre data-prefix="2" className="text-warning">
              <code>installing...</code>
            </pre>
            <pre data-prefix="3" className="text-success">
              <code>Done!</code>
            </pre>
            <pre data-prefix="4" className="text-gray-700">
              <code>Front End Web Developer</code>
            </pre>
            <pre data-prefix="5" className="text-gray-500">
              <code>Issued by: PeopleNTech Institute of IT</code>
            </pre>
            <pre data-prefix="6" className="text-gray-500">
              <code>Completed: January 2025 (6 months)</code>
            </pre>
            <pre data-prefix="7" className="text-blue-600 underline">
              <a href="#" target="_blank" rel="noopener noreferrer">
                View Credential
              </a>
            </pre>
          </div>
          <hr />
        </li>

        {/* Error Education */}
        <li>
          <hr />
          <div className="timeline-start timeline-box p-5 overflow-hidden mockup-code text-gray-500 education">
            <pre data-prefix="1">
              <code>npm i education</code>
            </pre>
            <pre data-prefix="2" className="text-warning">
              <code>installing...</code>
            </pre>
            <pre data-prefix="3" className="text-error">
              <code>ERR! 404 education-advanced not found</code>
            </pre>
            <pre data-prefix="4" className="text-info">
              <code>continue...</code>
            </pre>
          </div>
          <hr />
        </li>

        {/* Error Certificate */}
        <li>
          <hr />
          <div className="timeline-end timeline-box p-5 overflow-hidden mockup-code text-gray-500 education">
            <pre data-prefix="1">
              <code>npm i certificate</code>
            </pre>
            <pre data-prefix="2" className="text-warning">
              <code>installing...</code>
            </pre>
            <pre data-prefix="3" className="text-error">
              <code>ERR! 403 certificate access denied</code>
            </pre>
            <pre data-prefix="4" className="text-info">
              <code>continue...</code>
            </pre>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Education;
