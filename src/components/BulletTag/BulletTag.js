import React from 'react';
import './BulletTag.css';

const BulletTag = ({ name }) => {
  let color = '';
  const nameCapital = name.toLowerCase();
  switch (nameCapital) {
    case 'js': {
      color = 'bullet__ellipse--yellow';
      break;
    }
    case 'react': {
      color = 'bullet__ellipse--blue';
      break;
    }
    case 'css': {
      color = 'bullet__ellipse--blue-1';
      break;
    }
    case 'responsive web design': {
      color = 'bullet__ellipse--green';
      break;
    }
    case 'html': {
      color = 'bullet__ellipse--reddish';
      break;
    }
    default:
      color = '';
  }

  return (
    <span className="bullet-tag">
      <div className={`bullet__ellipse ${color}`}></div>
      <span className="bullet-tag__text"> {name}</span>
    </span>
  );
};

export default BulletTag;
