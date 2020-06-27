import React, { Fragment } from 'react';

// Components
import './App.css';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Fragment>
      <Navigation />
      <Home />
      <Portfolio />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
