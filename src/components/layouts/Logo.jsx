import './Logo.css';
import { useState } from 'react';

const Logo = (props) => {
  // we can set the default color & hoverColor
  // isWordmark determines whether the "Acta" word is rendered
  // we can also set the width & fontSize
  const {
    color = '(--black)',
    hoverColor = '(--black)',
    isWordmark = true,
    width = '40px',
    fontSize = '1.7rem',
  } = props;

  const [currentColor, setCurrentColor] = useState(color);

  return (
    <div
      className="Logo"
      onMouseEnter={() => {
        console.log('true');
        setCurrentColor(hoverColor);
      }}
      onMouseLeave={() => {
        console.log('false');
        setCurrentColor(color);
      }}
    >
      <svg
        className="Logo__img iconLeft"
        style={{
          width: width,
          height: width,
          color: currentColor,
        }}
        data-v-423bf9ae=""
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 90"
      >
        <g
          data-v-423bf9ae=""
          id="bca38855-46d0-49b2-a162-99f23db01f0f"
          fill="currentColor"
          transform="matrix(6.006006143610182,0,0,6.006006143610182,117.20027722367972,-8.903903135612524)"
        ></g>
        <g
          data-v-423bf9ae=""
          id="69207905-8ee6-44b3-9ef5-24e05990634b"
          transform="matrix(1.1090709398570677,0,0,1.1090709398570677,-5.950885161660764,-10.067259129858506)"
          stroke="none"
          fill="currentColor"
        >
          <path d="M79.29 60.515c-.612 0-1.213.047-1.806.117-4.242-2.485-8.136-6.303-11.011-11.248-2.9-4.987-4.29-10.308-4.329-15.259a15.126 15.126 0 0 0 3.065-9.131c0-8.4-6.81-15.209-15.21-15.209s-15.21 6.809-15.21 15.209c0 3.342 1.091 6.422 2.917 8.932-.002 5.007-1.391 10.404-4.329 15.458-2.868 4.932-6.747 8.742-10.976 11.228a15.216 15.216 0 0 0-1.69-.099c-8.4 0-15.21 6.809-15.21 15.208 0 8.4 6.81 15.213 15.21 15.213 6.165 0 11.46-3.677 13.848-8.951 4.316-2.507 9.649-4.012 15.459-4.012 5.786 0 11.099 1.495 15.405 3.983 2.382 5.29 7.688 8.979 13.865 8.979 8.4 0 15.208-6.811 15.208-15.211.002-8.399-6.806-15.207-15.206-15.207zm-44.767 8.87a15.17 15.17 0 0 0-1.578-2.67c.076-4.896 1.473-10.142 4.334-15.062 2.981-5.125 7.058-9.038 11.481-11.511.41.033.821.063 1.239.063.372 0 .736-.029 1.102-.056 4.419 2.474 8.492 6.383 11.469 11.504 2.902 4.988 4.294 10.311 4.333 15.265a15.105 15.105 0 0 0-1.442 2.5c-4.313 2.501-9.64 4.004-15.441 4.004-5.828 0-11.174-1.517-15.497-4.037z"></path>
        </g>
      </svg>
      {isWordmark ? (
        <span
          className="Logo__wordmark"
          style={{ fontSize: fontSize, color: currentColor }}
        >
          Acta
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Logo;
