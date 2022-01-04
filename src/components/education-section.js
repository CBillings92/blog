import React from 'react';
import InfoCard from './info-card';
import { StaticImage } from 'gatsby-plugin-image';
import { section } from '../styles/section.module.css';

export default function EducationSection() {
  /**
   * TODO: Figure out if there's a way to generate these cards using MDX.
   */
  let data = [
    {
      infoCardTitle: 'Northeastern University',
      image: (
        <StaticImage
          src="../images/Northeastern_University_Logo.jpg"
          alt="Northeastern University Logo"
          placeholder="tracedSVG"
        ></StaticImage>
      ),
      infoCardSubTitle:
        'B.S. in Business Administration with a concentration in Management Information Systems and a minor in Economics - 2017',
      infoCardFourthSubTitle: (
        <div>
          <div>
            Activities:{' '}
            <ul>
              <li>
                Entrepreneurs Club Board Member, Program Director, Finance
                Director
              </li>
              <li>
                IDEA Verture Accelerator - Participant and Venture Founder
              </li>
            </ul>
          </div>
          <div>
            <p>
              I transferred into Northeastern University's D'Amore McKim School
              of Business in the fall of 2012. During the transfer I switched
              from majoring in Computer Science to focusing on business and
              economics. I decided to make the switch because I knew I wanted to
              be a technical entrepreneur and build my own company and figured I
              could teach myself development and engineering on the side of my
              other studies.
            </p>
          </div>
        </div>
      ),
      infoCardLocation: 'Boston, MA',
    },
    {
      infoCardTitle: 'Suffolk County Community Honors College',
      image: (
        <StaticImage
          src="../images/Suffolk_County_Community_College_Logo.png"
          alt="Suffolk County Community College Logo"
          placeholder="tracedSVG"
        ></StaticImage>
      ),
      infoCardSubTitle:
        'Completed 25 credits - Associates Degree in Comp. Sci.',
      infoCardLocation: 'Selden, NY',
      infoCardFourthSubTitle: (
        <div>
          <p>
            I started my college career at a local community college studying
            Computer Science. The couple of introductory computer science
            classes I took here helped kickstart my interest in becoming a
            developer.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div id="education-section" className={section}>
      <h2>Education</h2>
      {data.map((experience) => (
        <InfoCard {...experience}></InfoCard>
      ))}
    </div>
  );
}
