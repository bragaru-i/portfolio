import React from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';

// Components
import './Home.css';

const Home = () => {
  return (
    <header id="home" className="f-mid-col">
      <h1 className="f-mid-col">
        <div className="h1--main">HELLO</div>
        <div className="h1--sub f-mid-row">
          <div className="h1__name-box">
            <div className="h1__name-greetings">I'm Bragaru Ion</div>
            <div className="h1__name-jobs">
              And I do <span style={{ color: `var(--color-2)` }}>FRONTEND</span>{' '}
              development
            </div>
            <div className="h1__jobs__list">HTML CSS JS React/Redux Bootstrap SASS</div>
          </div>
          <div className="h1__photo"> </div>
        </div>{' '}
        <span style={{ color: `var(--color-2)` }}></span>
      </h1>
      <div className="header__cta f-mid-row">
        <div style={{ marginRight: '1rem' }} className="btn from-top btn--orange ">
          <AnchorLink href="#contact"> Hire me</AnchorLink>
        </div>
        <div className="btn from-top">
          {' '}
          <AnchorLink href="#portfolio"> My Works</AnchorLink>
        </div>
      </div>
    </header>
  );
};

export default Home;
