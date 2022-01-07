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
      languagePills: [{ title: 'Java (OOP Design Course)' }],
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
