import React from 'react';

const SVG = ({
  name,
  style = {},
  fill = 'white',
  width = '100%',
  viewBox = '0 0 192 192',
}) => (
  <svg
    width={width}
    className={`svg-icon icon-${name}`}
    style={style}
    height={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M21 21H17V14.25C17 13.1914 15.8121 12.3058 14.7535 12.3058C13.6949 12.3058 13 13.1914 13 14.25V21H9.00001V9H13V11C13.6623 9.92857 15.3564 9.23727 16.525 9.23727C18.9965 9.23727 21 11.2786 21 13.75V21ZM7 21H3V9H7V21ZM5.00001 3C6.10458 3 7.00001 3.89543 7.00001 5C7.00001 6.10457 6.10458 7 5.00001 7C3.89544 7 3.00001 6.10457 3.00001 5C3.00001 3.89543 3.89544 3 5.00001 3Z"
      fill={fill}
    />
  </svg>
);

export default SVG;
