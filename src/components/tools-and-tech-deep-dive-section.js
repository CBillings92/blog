import React from 'react';

export default function ToolsAndTechDeepDiveSection(props) {
  return (
    <div>
      <div>
        <div>
          <h2>Tech & Tooling Deep Dive</h2>
        </div>

        <div>
          <h3>Languages</h3>

          <div>
            <div className="TechToolingDeepDiveCard">
              <div
                className="Header"
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <img
                  style={{ width: '60px' }}
                  src="https://www.php.net//images/logos/new-php-logo.svg"
                  alt=""
                />
                <span style={{ margin: '0 10px', fontWeight: 'bold' }}>
                  PHP (versions: 7, 8)
                </span>
              </div>
            </div>
            <div className="UseCasesContainer">
              <h4 style={{ marginBottom: '0' }}>Companies:</h4>
              <ul style={{ marginTop: '5px' }}>
                <li>Places For Less (Feb. 2019- Jan. 2022)</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '0' }}>Side Projects:</h4>
              <ul style={{ marginTop: '5px' }}>
                <li>Meeple Meetup (July 2021 - Present)</li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
        <div>JavaScript</div>
        <div>C#</div>
        <div>SQL</div>
        <div>HTML</div>
        <div>CSS</div>
      </div>
    </div>
  );
}
