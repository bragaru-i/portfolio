const setActiveItem = () => {
  let homeAnchor = document.getElementById('nav-home');

  let portfolio = document.getElementById('portfolio');
  let portfolioAnchor = document.getElementById('nav-portfolio');

  let contact = document.getElementById('contact');
  let contactAnchor = document.getElementById('nav-contact');
  if (
    window.pageYOffset > portfolio.offsetTop - 100 &&
    window.pageYOffset < contact.offsetTop - 100
  ) {
    portfolioAnchor.classList.add('nav__item--active');
    homeAnchor.classList.remove('nav__item--active');
    contactAnchor.classList.remove('nav__item--active');
  } else if (window.pageYOffset >= contact.offsetTop - 100) {
    portfolioAnchor.classList.remove('nav__item--active');
    homeAnchor.classList.remove('nav__item--active');
    contactAnchor.classList.add('nav__item--active');
  } else {
    portfolioAnchor.classList.remove('nav__item--active');
    homeAnchor.classList.add('nav__item--active');
    contactAnchor.classList.remove('nav__item--active');
  }
};
export default setActiveItem;
