import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import BulletTag from '../BulletTag/BulletTag';
import './PortfolioCard.css';

const PortfolioCard = ({ img, title, info, tags }) => {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="card"
    >
      <div className="card__image">
        <img className="card__jpg" src={img} alt={title}></img>
      </div>
      <div className="card__text">
        <h3 className="card__title">{title}</h3>
        <span className="card__description">{info}</span>
        <div className="spacer"></div>
        <div className="card__meta">
          {tags.map((tag, i) => (
            <BulletTag key={i} name={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
