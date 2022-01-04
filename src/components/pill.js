import React from 'react';

export default function pill(props) {
  return (
    <span
      style={{
        backgroundColor: '#5759ff',
        padding: '6px',
        color: 'white',
        borderRadius: '10px',
        fontSize: '1.1rem',
        margin: '3px 5px',
      }}
    >
      {props.title}
    </span>
  );
}
