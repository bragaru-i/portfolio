import React, { useState } from 'react';

import './Burger.css';

const Burger = ({ width = '3.3rem', height = '3rem', open = false }) => {
  return (
    <div style={{ width, height }} className={!open ? 'burger' : 'burger burger--open'}>
      <div className="bar-1"></div>
      <div className="bar-2"></div>
      <div className="bar-3"></div>
    </div>
  );
};

export default Burger;
