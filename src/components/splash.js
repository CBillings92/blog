import { withTheme } from '@emotion/react';
import React from 'react';
import SpotifyCurrentListen from './spotify-current-listen';
import { StaticImage } from 'gatsby-plugin-image';
import StatCard from './stat-card';
import {
  container,
  titleContainer,
  titleLead,
  title,
  statsContainer,
  statContainer,
  statName,
  statValue,
} from '../styles/splash.module.css';

export default function Splash({ children, props }) {
  // scroll to experience section on button click
  const scrollToView = () =>
    document.getElementById('education-section').scrollIntoView(true);

  return (
    <>
      <div className={container}>
        {/* Top half of splash page, welcome message */}
        <div className={titleContainer}>
          <div className={titleLead}>Hey there!</div>
          <div className={title}>I'm Cameron</div>
        </div>

        <SpotifyCurrentListen></SpotifyCurrentListen>
        <StatCard></StatCard>
        {/* Iterate over stats and display them */}
        {/* <div className={statsContainer}>
          {stats.map((stat) => (
            <div className={statContainer}>
              <div className={statName}>{stat.name}</div>
              <div className={statValue}>{stat.value}</div>
              <hr />
            </div>
          ))}
        </div> */}

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <a
            onClick={scrollToView}
            style={{
              textDecoration: 'none',
              color: '#222232',
              fontSize: '1.2rem',
              fontFamily: "'Leckerli One', cursive",
            }}
          >
            &darr; Dive Deeper &darr;
          </a>
        </div>
        <div
          style={{
            marginLeft: '5px',
            position: 'absolute',
            bottom: '0',
            left: '0',
          }}
        >
          <StaticImage
            style={{ width: '40px', display: 'block', marginBottom: '3px' }}
            src="../images/bi-pride-flag.png"
            alt="Bisexual Pride Flag"
          />
          <StaticImage
            style={{ width: '40px' }}
            src="../images/progress-pride-flag.png"
            alt="Progress Pride Flag"
          />
        </div>
      </div>
    </>
  );
}
