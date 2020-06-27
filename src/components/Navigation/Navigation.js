import React from 'react';

import './Navigation.css';
import Icon from '../Icons';
import Burger from '../Burger/Burger';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import setActiveItem from '../../utils/setActiveItem';

const Navigation = () => {
  React.useEffect(() => {
    let nav = document.getElementById('nav');
    let home = document.getElementById('home');

    const sticky = home.offsetTop;

    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky + 100) {
        nav.classList.add('sticky');
      } else {
        nav.classList.remove('sticky');
      }
      setActiveItem();
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, []);
  return (
    <div style={{ position: 'relative' }} className="row">
      <nav className="nav " id="nav">
        <div className="nav__brand">
          <Icon name="portfolio" fill={`var(--color-2)`} />
        </div>
        <div data-toggle="nav__toggler" className="nav__toggler">
          <Burger open="true" />
        </div>
        <ul className="nav__items f-mid-row">
          <li
            className="nav__item  btn from-left f-mid-row nav__item--active"
            id="nav-home"
          >
            <AnchorLink href="#home">Home</AnchorLink>
          </li>
          <li className="nav__item btn from-left f-mid-row" id="nav-portfolio">
            <AnchorLink href="#portfolio">My Works</AnchorLink>
          </li>
          <li className="nav__item  btn from-left f-mid-row" id="nav-contact">
            <AnchorLink href="#contact">Contact</AnchorLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
