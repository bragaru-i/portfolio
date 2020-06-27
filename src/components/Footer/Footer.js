import React from 'react';
import './Footer.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Icon from '../Icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__nav row">
        <div className="footer__copiright">&copy; Copyright by Bragaru Ion. 2020</div>
        <ul className="footer__links">
          <li className="footer__link">
            {' '}
            <AnchorLink href="#home">Home</AnchorLink>
          </li>
          <li className="footer__link">
            {' '}
            <AnchorLink href="#portfolio">My Works</AnchorLink>
          </li>
          <li className="footer__link">
            {' '}
            <AnchorLink href="#contact">Contact</AnchorLink>
          </li>
        </ul>
        <div className="footer__created">bragaruion@gmail.com</div>
      </div>
      <div className="footer__social row">
        <div className="icon-wrapper">
          <a
            href="https://www.facebook.com/bragaru.ion"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name="facebook" width="2rem" />
          </a>
        </div>
        <div className="icon-wrapper">
          <a
            href="https://www.instagram.com/_bragaru/
            "
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name="instagram" width="2rem" />
          </a>
        </div>
        <div className="icon-wrapper">
          <a href="https://m.me/bragaru.ion" rel="noopener noreferrer" target="_blank">
            <Icon name="messenger" width="2rem" />{' '}
          </a>
        </div>
        <div className="icon-wrapper">
          <a
            href="https://www.linkedin.com/in/bragaru-ion/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name="linked" width="2rem" />{' '}
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
