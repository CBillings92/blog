import React from 'react';
import {
  statCardsContainer,
  statCardsList,
  title,
  statCardContainer,
  statCardValue,
  statCardNameContainer,
  statCardNameText,
  large,
} from '../styles/stat-card.module.css';

export default function StatBox() {
  const calcYearsDiff = (d1, d2) =>
    new Date(d1).getFullYear() - new Date(d2).getFullYear();

  const calcYearsFromToday = (date) =>
    new Date().getFullYear() - new Date(date).getFullYear();

  let stats = [
    {
      name: 'Entrepreneur',
      value: {
        text: `${calcYearsFromToday('01/01/2015')}+ Years`,
      },
    },
    {
      name: 'Developer',
      value: { text: `${calcYearsFromToday('05/04/2014')}+ Years` },
    },
    {
      name: 'Boardgamer',
      value: { text: '42 Boardgames' },
    },
    {
      name: 'Cyclist',
      value: { text: '3000+ Miles' },
    },
    {
      name: 'Amateur Baker',
      value: { text: '30+ Bread Recpies' },
    },
    {
      value: { text: '709 Miles' },
      name: 'Runner',
    },
    {
      isCardLarge: true,
      value: {
        text: "Product Management's Sacred Seven",
      },
      name: 'Current Read',
    },
  ];

  return (
    <div className={statCardsContainer}>
      <div className={title}>
        <span
          style={{ fontFamily: "'Leckerli One', cursive", fontSize: '1.3rem' }}
        >
          My Dashboard...
        </span>
      </div>
      <div className={statCardsList}>
        {stats.map((stat) => (
          <div
            className={
              stat.isCardLarge
                ? [statCardContainer, large].join(' ')
                : statCardContainer
            }
          >
            <div className={statCardValue}> {stat.value?.text}</div>
            {stat.name && (
              <div className={statCardNameContainer}>
                <span className={statCardNameText}>{stat.name}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
