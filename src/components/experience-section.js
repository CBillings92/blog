import React from 'react';
import InfoCard from './info-card';
import { StaticImage } from 'gatsby-plugin-image';
import { section } from '../styles/section.module.css';

export default function ExperienceSection() {
  let infoCards = [
    {
      infoCardTitle: 'DraftKings',
      image: (
        <StaticImage
          src="../images/draftkings_logo.jpg"
          alt="Drafktings Logo"
          placeholder="dominiantColor"
        ></StaticImage>
      ),
      infoCardSubTitle: 'Senior Data Engineer',
      infoCardLocation: 'Boston, MA',
      infoCardSecondSubTitle: 'Feb. 2022 - Present',
      infoCardThirdSubTitle: (
        <div>
          <p>
            DraftKings is an American daily fantasy sports contest and sports
            betting operator.
            <br />
            <br />
          </p>
        </div>
      ),
      languagePills: [{ title: 'SQL' }, { title: 'Python' }],
      toolingPills: [
        { title: 'Snowflake' },
        { title: 'Apache Airflow' },
        { title: 'AWS S3' },
        { title: 'AWS Lambda' },
        { title: 'BitBucket' },
        { title: 'Jira' },
        { title: 'Lucidchart' },
        { title: 'SQL Server' },
        { title: 'SQL Server Management Studio' },
        { title: 'Tableau' },
      ],
    },
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
      infoCardSecondSubTitle: 'Feb. 2019 - Jan. 2022',
      infoCardThirdSubTitle: (
        <div>
          <p>
            <strong>Mission:</strong> Making finding your next home more
            affordable.
            <br />
            <br />
            Places For Less is a real estate tech platform that’s changing the
            way apartment rentals have been done over the past 30 years, and in
            turn making it both easier and more affordable than ever to rent
            your next home by cutting the traditional broker fee.
            <br />
            <br />
            We’re accomplishing this by building our tech platform on-top of a
            fully licensed brokerage – enabling Places For Less to offer a full
            service apartment search-and-rental service while maintaining the
            flexibility to change up the traditional brokerage rental model
            that’s been king of the industry for the past 30 years.
            <br />
            <br />
            The Places For Less hypothesis is that the current rental brokerage
            one-to-one (agent-to-renter) business models over-serve their
            clients, ultimately making the service they provide over priced. So
            we’re changing it up and gigifying the role of the real estate agent
            – automating 95% of the agent’s job with our technology and internal
            team/processes. Our agents aren’t commission based, they’re paid per
            showing they conduct. The changes we’ve made to the model allow us
            to pass on the cost savings we receive to our clients (renters and
            landlords)
            <br />
            <br />
            As CTO at Places For Less, I work closely with the entire team to
            build the product vision based on the problems our team and our
            users are facing – and turn that into a product road map that I and
            our tech team work to implement. I work closely with our engineers
            across the stack in building out technical solutions outlined in our
            product road-map.
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
          <p>
            A web based real-estate tech platform for creating, hosting and
            sharing virtual reality tours of rental apartments as a way to bring
            more transparency to the apartment rental process.
            <br />
            <br />
            I co-founded Wizio out of the Northeastern University
            Entrepreneurship ecosystem during my time there as an undergraduate
            student. It started with me and my roommate renting our first
            off-campus college apartment - the apartment wasn't up to code in
            numerous ways and the landlord was neglectful. Because of this
            experience, we wanted to use technology to help bring more power and
            knowledge to the renters in Boston when searching for their next
            rental home.
            <br />
            <br />
            We founded Wizio and got to work, testing different business models
            and products with consumers and prospective clients. Through enough
            product iteration and research, we landed on bringing low-cost, easy
            to use virtual apartment tours to real-estate professionals in the
            hopes that our virtual tours would help renters truly see units
            before going in person for a showing - so that they could be better
            prepped for that walk through tour with clear expectations and
            questions.
            <br />
            <br />
            As CTO and Co-Founder I was on the ground floor of a 2-4 person
            startup talking to prospective users/clients, doing user research,
            validating (or invalidating) business ideas, creating virtual tours
            across Boston, and building out the product that eventually became
            the Wizio website.
            <br></br>
            The Wizio website allowed our clients to login, upload their virtual
            tour content, and host it to be placed/showcased on their website
            (or shared from our website) with their clients. During our time
            building Wizio, we filmed 3,000+ apartments in the Boston market.
            <br />
            <br />
            In 2018, the team was looking to create a brokerage within Wizio -
            utilizing our VR content to streamline the rental process and make
            it more efficient and less costly to renters.
            <br />
            <br />
            In the winter of 2018, Wizio merged with a local Boston based
            startup tackling a very similar mission - Places For Less. The
            merger became official in February of 2019
          </p>
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
          <p>
            DraftKings is an American daily fantasy sports contest and sports
            betting operator.
            <br />
            <br />
            As a Data Engineer I...
            <ul>
              <li>
                Worked closely with teams and individuals from across the
                organization to find technical, data driven solutions to their
                needs
              </li>
              <li>
                Developed and maintained custom SQL ETL scripts responsible for
                cleaning and loading data into the company's data warehouse
              </li>
              <li>
                Monitored data warehouse performance and health through DataDog
                dashboards and custom-built data validation SQL scripts
              </li>
              <li>Assisted with company roll-out of Tableau</li>
            </ul>
          </p>
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
      infoCardThirdSubTitle: (
        <div>
          <p>
            Boston Private is a leading wealth management, trust, and private
            banking company serving customers in Boston, San Francisco, LA, New
            York, and Palm Beach.
            <br />
            <br />
            During my time at Boston Private I...
            <ul>
              <li>
                Developed internal workflow enhancing web applications utilizing
                Visual Studio 2015, ASP.NET/C#, SQL Server, and IIS.
              </li>
              <li>
                Worked closely with business units to create data reports
                utilizing Hyperion Financial Reporting Studio.
              </li>
              <li>
                Created ETL utilizing SQL Server Intergration Services (SSIS)
                with SQL Server.
              </li>
              <li>
                Maintained ETL activities for quarterly board reports using R/R
                Studio
              </li>
            </ul>
          </p>
        </div>
      ),
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
          <br />
          As a department administrator I...
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
