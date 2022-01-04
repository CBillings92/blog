import React from 'react';
import InfoCard from './info-card';
import { StaticImage } from 'gatsby-plugin-image';
import { section } from '../styles/section.module.css';

export default function ExperienceSection() {
  let infoCards = [
    {
      infoCardTitle: 'Places For Less LLC',
      image: (
        <StaticImage
          src="../images/places_for_less_logo.png"
          alt="Places For Less Logo"
          placeholder="tracedSVG"
        ></StaticImage>
      ),
      infoCardSubTitle: 'CTO | Full-Stack Engineer',
      infoCardLocation: 'Boston, MA',
      infoCardSecondSubTitle: 'Feb. 2019 - Present',
      infoCardThirdSubTitle: (
        <div>
          <p>
            Mission: Making finding your next home more affordable.
            <br />
            <br />
            Places For Less is a real-estate tech startup that was founded out
            of Harvard Business School in 2016 with the mission of making
            apartment rental more affordable by eliminating the traditional one
            month broker fee.
            <br />
            <br />
            Simultaneously, I was working on a very similar mission with a
            company I co-founded out of Northeastern U. called Wizio.
            <br />
            <br />
            Wizio's mission was to make finding your next home more transparent
            and less costly. Wizio, a real-estate tech startup I co-founded
            during my time at Northeastern U., merged with Places For Less in
            February of 2019 - after both teams came to the realization we were
            pursuing a common mission and vision - making finding your next
            apartment more affordable.
            <br />
            <br />
            The team hit the ground running for the 2019 rental season - merging
            teams and technologies, taking inventory of our current business
            needs and status, and prioritizing company goals.
            <br />
            <br />
          </p>
        </div>
      ),
      languagePills: [
        { title: 'PHP 7/8' },
        { title: 'SQL' },
        { title: 'JavaScript' },
        { title: 'HTML' },
        { title: 'CSS' },
        { title: 'Python' },
      ],
      frameworkAndLibraryPills: [
        { title: 'Laravel 7/8' },
        { title: 'Laravel NOVA' },
        { title: 'Laravel Telescope' },
        { title: 'Eloquent ORM' },
        { title: 'NodeJS' },
        { title: 'SeleniumJS' },
        { title: 'MeteorJS' },
        { title: 'VueJS' },
        { title: 'TailwindCSS' },
        { title: 'PHPUnit' },
        { title: 'git' },
      ],
      toolingPills: [
        { title: 'VS Code' },
        { title: 'MariaDB' },
        { title: 'OpenBSD' },
        { title: 'OpenBSD Crontab' },
        { title: 'Salesforce' },
        { title: 'Twilio' },
        { title: 'Front' },
        { title: 'Landbot' },
        { title: 'Google Gsuite' },
        { title: 'Google Drive' },
        { title: 'Asana' },
        { title: 'Gitea' },
        { title: 'Google Analytics' },
      ],
      apiPills: [
        { title: 'Salesforce API' },
        { title: 'YouGotListings API' },
        { title: 'SimplyRETS API (MLS)' },
        { title: 'Google Gmail' },
        { title: 'Google Drive' },
        { title: 'Google Maps/Geocoding' },
      ],
    },
    {
      infoCardTitle: 'Wizio Inc., (merged with Places For Less LLC)',
      image: (
        <StaticImage
          src="../images/wizio-logo.jpg"
          alt="Wizio Logo"
          placeholder="tracedSVG"
        ></StaticImage>
      ),
      infoCardSubTitle: 'CTO | Co-Founder | Full-Stack Developer',
      infoCardLocation: 'Boston, MA',
      infoCardSecondSubTitle: 'Jan. 2015 - Feb. 2019',
      infoCardThirdSubTitle: (
        <div>
          A web based real-estate tech platform for creating, hosting and
          sharing virtual reality tours of rental apartments as a way to bring
          more transparency to the apartment rental process.
        </div>
      ),
      languagePills: [
        { title: 'JavaScript' },
        { title: 'SQL' },
        { title: 'HTML' },
        { title: 'CSS' },
        { title: 'Python' },
      ],
      frameworkAndLibraryPills: [
        { title: 'NodeJS' },
        { title: 'Sequelize ORM' },
        { title: 'ExpressJS' },
        { title: 'Angular 1/1.5' },
        { title: 'BootstrapCSS' },
        { title: 'git' },
      ],
      toolingPills: [
        { title: 'VS Code' },
        { title: 'MySQL' },
        { title: 'Linux' },
        { title: 'AWS RDS' },
        { title: 'AWS IAM' },
        { title: 'AWS EC2' },
        { title: 'AWS ELB' },
        { title: 'AWS Elastic Beanstalk' },
        { title: 'AWS Cloudfront' },
        { title: 'AWS Route53' },
        { title: 'AWS Lambda' },
        { title: 'AWS S3' },
        { title: 'Pivotal Tracker' },
        { title: 'Trello' },
        { title: 'Zenhub' },
        { title: 'Github' },
        { title: 'Google Gsuite' },
        { title: 'Google Drive' },
        { title: 'Google Analytics' },
      ],
      apiPills: [{ title: 'Google Maps/Geocoding' }],
    },
    {
      infoCardTitle: 'DraftKings',
      image: (
        <StaticImage
          src="../images/draftkings_logo.jpg"
          alt="Drafktings Logo"
          placeholder="dominiantColor"
        ></StaticImage>
      ),
      infoCardSubTitle: 'Data Engineer',
      infoCardLocation: 'Boston, MA',
      infoCardSecondSubTitle: 'May 2017 - Sept. 2018',
      infoCardThirdSubTitle: (
        <div>
          DraftKings is an American daily fantasy sports contest and sports
          betting operator.
        </div>
      ),
      languagePills: [{ title: 'SQL (TSQL)' }, { title: 'Python' }],
      toolingPills: [
        { title: 'Attunity' },
        { title: 'AWS DMS' },
        { title: 'Jira' },
        { title: 'Lucidchart' },
        { title: 'SQL Server' },
        { title: 'SQL Server Management Studio' },
        { title: 'Tableau' },
      ],
    },
    {
      infoCardTitle: 'Boston Private',
      image: (
        <StaticImage
          src="../images/boston-private-logo.jpg"
          alt="Suffolk County Community College Logo"
          placeholder="tracedSVG"
          style={{ maxWidth: '225px' }}
        ></StaticImage>
      ),
      infoCardSubTitle: 'Business Intelligence and Web App Developer',
      infoCardSecondSubTitle: 'Jan 2015 - June 2017',
      infoCardThirdSubTitle:
        'Boston Private is a leading wealth management, trust, and private banking company serving customers in Boston, San Francisco, LA, New York, and Palm Beach.',
      infoCardLocation: 'Boston, MA',
      languagePills: [
        { title: 'JavaScript' },
        { title: 'SQL' },
        { title: 'HTML' },
        { title: 'CSS' },
        { title: 'R' },
        { title: 'C#' },
      ],
      frameworkAndLibraryPills: [{ title: '.NET' }, { title: 'BootstrapCSS' }],
      toolingPills: [
        { title: 'Visual Studio' },
        { title: 'SQL Server' },
        { title: 'SQL Server Management Studio' },
        { title: 'Hyperion Reporting Studio' },
        { title: 'R Studio' },
        { title: 'SSIS' },
        { title: 'Microsoft Office Suite' },
        { title: 'Outlook' },
      ],
    },
    {
      infoCardTitle: 'Objective Logistics',
      image: (
        <StaticImage
          src="../images/objective-logistics-logo.jpg"
          alt="Objective Logistics Logo"
          placeholder="tracedSVG"
          style={{ maxWidth: '85px' }}
        ></StaticImage>
      ),
      infoCardSubTitle: 'Quality Assurance Engineering Intern',
      infoCardThirdSubTitle: (
        <div>
          <p>
            As an intern I worked on projects such as implementing Google
            Analytics across the web platform, created/aided in creation of
            feature level and deployment level test plans, assisted in QA
            testing procedures, logged bugs and utilized SQL, SQL Server and
            Excel to run data analysis reports.
            <br />
            <br />
            Objective Logistics is a Google and Atlas Venture-funded company
            that helps lift sales and improve the guest experience in
            restaurants, retail stores, and other industries nation-wide.
            <br />
            <br /> MUSE, a web-based software platform, motivates, measures, and
            mentors staff, giving them real-time rewards and active,
            up-to-the-minute data on their performance. Our ranking platform is
            combined with an automated service that rewards top performers with
            their preferred shifts and other non-monetary compensation. We marry
            the power of big-data with proven game theory (and a little healthy
            competition) to drive significant, unrivaled results.
          </p>
        </div>
      ),
      infoCardLocation: 'Boston, MA',
      infoCardSecondSubTitle: 'May 2014 - Sep. 2014',
      languagePills: [
        { title: 'JavaScript' },
        { title: 'SQL' },
        { title: 'HTML' },
        { title: 'CSS' },
        { title: 'C#' },
      ],
      frameworkAndLibraryPills: [{ title: '.NET' }],
      toolingPills: [
        { title: 'Visual Studio' },
        { title: 'SQL Server' },
        { title: 'SQL Server Management Studio' },
        { title: 'Microsoft Office Suite' },
        { title: 'Google Analytics' },
      ],
    },
    {
      infoCardTitle: 'Natixis Global Assett Management',
      image: (
        <StaticImage
          src="../images/natixis-logo.jpg"
          alt="Natixis Global Asset Management Logo"
          placeholder="tracedSVG"
          style={{ maxWidth: '240px' }}
        ></StaticImage>
      ),
      infoCardSubTitle:
        'Learning and Development Department Administrator Co-op',
      infoCardThirdSubTitle: (
        <div>
          Natixis is an investment management firm providing solutions, mutual
          funds, ETFs, and separate accounts, for institutions and financial
          professionals.
          <br /> <br />
          As a department administrator I
          <ul>
            <li>Updating the learning portal with with new content.</li>
            <li>
              Improving efficiency of the learning portal through back-end work.
            </li>
            <li>
              Enrolling employees in classes and managing the Learning and
              Development training rooms.
            </li>
            <li>Creating learning content for employees.</li>
            <li>
              Checking to make sure employees have completed their necessary
              training.
            </li>
            <li>
              Implementing new learning features such as peer to peer learning
              via an internal message board.
            </li>
            <li>
              Creating and maintaining Department Reporting on general
              department/training metrics.
            </li>
            <li>Report Analysis</li>
          </ul>
        </div>
      ),
      infoCardLocation: 'Boston, MA',
      infoCardSecondSubTitle: 'July 2013 - Jan. 2014',
      languagePills: [
        { title: 'JavaScript' },
        { title: 'HTML' },
        { title: 'CSS' },
      ],
      toolingPills: [{ title: 'Microsoft Office Suite' }],
    },
  ];

  return (
    <div id="experience-section" className={section}>
      <h2>Experience</h2>
      {infoCards.map((infoCard) => (
        <InfoCard {...infoCard}></InfoCard>
      ))}
    </div>
  );
}
