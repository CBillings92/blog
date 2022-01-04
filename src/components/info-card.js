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
