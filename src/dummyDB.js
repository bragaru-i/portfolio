import img1 from './img/cards/s7.png';
import img2 from './img/cards/ls-blog.png';
import img3 from './img/cards/food-travel.png';
import img4 from './img/cards/travel-agency.jpg';
import img5 from './img/cards/casino-api.png';

const dummyDB = [
  {
    title: 'Ассоциация врачей авиационной медицины',
    info:
      'Landing page written to HTML from Figma file. No frameworks. Pure HTML5 and CSS3. CSS flexbox used. Adapted. BEM methodology',

    img: img1,
    tags: ['HTML', 'CSS', 'CSS Flexbox', 'SASS', 'BEM'],
  },
  {
    title: 'LocalStorage Blog with RICH Editor',
    info:
      'Blog written in React with Redux. Used Quill for React. Post and delete options for articles and comments. Easy customizable. Not responsive',
    img: img2,
    tags: ['JS', 'React', 'Redux', 'CSS'],
  },
  {
    title: 'Food COURT Landing Page',
    info:
      'A Restaurant landing page. Smooth Scroll, Easy Navigation and FULL RESPONSIVE.',
    img: img3,
    tags: ['JS', 'React', 'Redux', 'Responsive Web Design', 'CSS3', 'CSS Flexbox'],
  },
  {
    title: 'Awesome Travel Agency',
    info:
      'A travel agency landing page. Smooth Scroll, Responsive Web Design,  Easy Navigation and Scroll Smooth Links, Responsive Menu',
    img: img4,
    tags: [
      'Responsive Web Design',
      'CSS3',
      'React',
      'Redux',
      'JS',
      'CSS3',
      'CSS Flexbox',
    ],
  },
  {
    title: 'Casino MERN web-app',
    info:
      'A casino float web app demo. MERN Stack. Auto generates players in database. Possibility to add Plyer to table, write cash/chips transactions. Checkout possibility exists. Not Responsive. Minimum display: 1000px. Tables, Players and Their transactions automatical loads from NoSQL DB.',
    img: img5,
    tags: [
      'MERN',
      'MongoDB',
      'mongoose',
      'NodeJS',
      'express',
      'React',
      'Redux',
      'JS',
      'NoSQL',
    ],
  },
];

export default dummyDB;
