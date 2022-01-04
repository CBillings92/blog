import React from 'react';
import {
  infoCardContainer,
  infoCardImageContainer,
  infoCardTextContainer,
  infoCardTitle,
  infoCardSubTitle,
  infoCardLocation,
  infoCardThirdSubTitle,
} from '../styles/infocard.module.css';
import Pill from './pill';

export default function InfoCard(props) {
  return (
    <>
      <div className={infoCardContainer}>
        {/* Image Container */}
        <div className={infoCardImageContainer}>{props.image}</div>
        {/* Text Container */}
        <div className={infoCardTextContainer}>
          {/* Title */}
          <div className={infoCardTitle}>{props.infoCardTitle} </div>
          {/* Subtitle */}
          <div className={infoCardSubTitle}>{props.infoCardSubTitle}</div>
          {/* Second Subtitle if exists */}
          {props.infoCardSecondSubTitle && (
            <div>{props.infoCardSecondSubTitle}</div>
          )}
          {/* location if exists */}
          {props.infoCardLocation && (
            <div className={infoCardLocation}>{props.infoCardLocation}</div>
          )}
          {/* Third subtitle if exists */}
          {props.infoCardThirdSubTitle && (
            <div className={infoCardThirdSubTitle}>
              {props.infoCardThirdSubTitle}
            </div>
          )}
          {/* fourth subtitle if exists */}
          {props.infoCardFourthSubTitle && (
            <div>{props.infoCardFourthSubTitle}</div>
          )}

          {props.languagePills && (
            <div>
              <h3>Languages</h3>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                }}
              >
                {props.languagePills.map((language) => (
                  <Pill {...language}></Pill>
                ))}
              </div>
            </div>
          )}

          {props.frameworkAndLibraryPills && (
            <div>
              <h3>Frameworks & Libraries</h3>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                }}
              >
                {props.frameworkAndLibraryPills.map((frameworkAndLibrary) => (
                  <Pill {...frameworkAndLibrary}></Pill>
                ))}
              </div>
            </div>
          )}
          {props.toolingPills && (
            <div>
              <h3>Tooling</h3>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                }}
              >
                {props.toolingPills.map((tool) => (
                  <Pill {...tool}></Pill>
                ))}
              </div>
            </div>
          )}
          {props.apiPills && (
            <div>
              <h3>APIs</h3>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                }}
              >
                {props.apiPills.map((api) => (
                  <Pill {...api}></Pill>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <hr
          style={{
            backgroundColor: '#ebecef',
            margin: '0 auto',
            width: '30%',
            border: '0 none',
            color: '#ebecef',
            height: '2px',
          }}
        />
      </div>
    </>
  );
}
