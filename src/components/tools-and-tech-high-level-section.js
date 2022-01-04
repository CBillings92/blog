import React from 'react';
import Pill from './pill';
import { section } from '../styles/section.module.css';

export default function ToolsAndTechHighLevelSection(props) {
  let languages = [
    { title: 'PHP (7/8)' },
    { title: 'JavaScript' },
    { title: 'Python' },
    { title: 'SQL' },
    { title: 'C#' },
    { title: 'HTML' },
    { title: 'CSS' },
  ];

  let frameworksAndLibraries = [
    { title: 'Laravel' },
    { title: 'Laravel NOVA' },
    { title: 'Eloquent ORM' },
    { title: 'PHPUnit' },
    { title: 'Laravel Blade' },
    { title: 'NodeJS' },
    { title: 'Sequelize ORM' },
    { title: 'ExpressJS' },
    { title: 'VueJS' },
    { title: 'AngularJS (1/1.5)' },
    { title: 'ReactJS' },
    { title: 'SeleniumJS' },
    { title: '.NET' },
    { title: 'Bootstrap' },
    { title: 'Tailwind CSS' },
  ];

  let tooling = [
    { title: 'MySQL/MariaDB' },
    { title: 'SQL Server' },
    { title: 'VS Code' },
    { title: 'SQL Workbench' },
    { title: 'DBeaver' },
    { title: 'Attunity' },
    { title: 'AWS EC2' },
    { title: 'AWS Elastic Beanstalk' },
    { title: 'AWS RDS' },
    { title: 'AWS IAM' },
    { title: 'AWS CloudFront' },
    { title: 'AWS Lambda' },
    { title: 'AWS Route53' },
    { title: 'AWS DMS' },
    { title: 'AWS S3' },
    { title: 'Linux - Ubuntu' },
    { title: 'Windows' },
    { title: 'Tmux' },
    { title: 'VIM' },
  ];

  let apis = [
    { title: 'Salesforce' },
    { title: 'Mailgun' },
    { title: 'SimplyRETS (MLS)' },
    { title: 'YouGotListings' },
    { title: 'Google Gmail' },
    { title: 'Google Maps/Geocoding' },
    { title: 'Google Drive' },
    { title: '3DApartments' },
    { title: 'AWS S3' },
  ];
  return (
    <div className={section} style={{ padding: '20px' }}>
      <div>
        <h2>Tech & Tooling High Level</h2>
      </div>
      <div>
        <h3>Languages</h3>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}
        >
          {languages.map((language) => (
            <Pill {...language}></Pill>
          ))}
        </div>
      </div>
      <div>
        <h3>Frameworks & Libraries</h3>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}
        >
          {frameworksAndLibraries.map((frameworkAndLibrary) => (
            <Pill {...frameworkAndLibrary}></Pill>
          ))}
        </div>
      </div>
      <div>
        <h3>Tooling</h3>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}
        >
          {tooling.map((tool) => (
            <Pill {...tool}></Pill>
          ))}
        </div>
      </div>
      <div>
        <h3>APIs Integrated / Worked With</h3>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}
        >
          {apis.map((api) => (
            <Pill {...api}></Pill>
          ))}
        </div>
      </div>
    </div>
  );
}
