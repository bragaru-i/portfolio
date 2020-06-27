import React from 'react';

import './Portfolio.css';
import db from '../../dummyDB';
import img1 from '../../img/cards/small/food-travel.png';

import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="row cards">
        <h2>My Portfolio</h2>
        {db.map((item, i) => (
          <PortfolioCard
            img={item.img}
            title={item.title}
            info={item.info}
            tags={item.tags}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
