import React from 'react';

import { Benefit } from '../components/Benefit';

export const Benefits: React.FC = () => {
  const secureSvg = () => {
    return (
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        stroke-width="3"
        stroke="#000000"
        fill="#ffffff">
        <path d="M31.74,7.19,13.36,14.85a1,1,0,0,0-.62.93V32.11h0A22.89,22.89,0,0,0,23.93,51.78l8.18,4.86,8.06-4.85a22.87,22.87,0,0,0,11.09-19.6V14.84a1,1,0,0,0-.65-.94L32.48,7.18A1,1,0,0,0,31.74,7.19Z" />
        <polyline points="22.01 33.5 29.44 39.12 42.56 20.69" />
      </svg>
    );
  };
  const analyzeSvg = () => {
    return (
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 512 512"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <title>analyze</title>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="add" fill="#ffffff" transform="translate(42.666667, 64.000000)">
            <path
              d="M266.666667,128 C331.468077,128 384,180.531923 384,245.333333 C384,270.026519 376.372036,292.938098 363.343919,311.840261 L423.228475,371.725253 L393.058586,401.895142 L333.173594,342.010585 C314.271431,355.038703 291.359852,362.666667 266.666667,362.666667 C201.865256,362.666667 149.333333,310.134744 149.333333,245.333333 C149.333333,180.531923 201.865256,128 266.666667,128 Z M266.666667,170.666667 C225.429405,170.666667 192,204.096072 192,245.333333 C192,286.570595 225.429405,320 266.666667,320 C307.903928,320 341.333333,286.570595 341.333333,245.333333 C341.333333,204.096072 307.903928,170.666667 266.666667,170.666667 Z M128.404239,234.665576 C128.136379,238.186376 128,241.743928 128,245.333333 C128,256.34762 129.284152,267.061976 131.710904,277.334851 L7.10542736e-15,277.333333 L7.10542736e-15,234.666667 L128.404239,234.665576 Z M85.3333333,1.42108547e-14 L85.3333333,213.333333 L21.3333333,213.333333 L21.3333333,1.42108547e-14 L85.3333333,1.42108547e-14 Z M170.666667,85.3333333 L170.663947,145.273483 C151.733734,163.440814 137.948238,186.928074 131.710904,213.331815 L106.666667,213.333333 L106.666667,85.3333333 L170.666667,85.3333333 Z M256,42.6666667 L255.999596,107.070854 C232.554315,108.854436 210.738728,116.46829 191.999452,128.465799 L192,42.6666667 L256,42.6666667 Z M341.333333,64 L341.333983,128.465865 C322.594868,116.468435 300.779487,108.854588 277.334424,107.070906 L277.333333,64 L341.333333,64 Z"
              id="Combined-Shape"></path>
          </g>
        </g>
      </svg>
    );
  };
  const safeSvg = () => {
    return (
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="#ffffff"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23 15.37V17.5601C23 20.0001 21.22 22.3 18.8 22.97C18.63 23.01 18.45 23.01 18.29 22.97C17.11 22.65 16.07 21.93 15.34 21C14.55 20.02 14.09 18.8101 14.09 17.5601V15.37C14.09 14.95 14.4 14.49 14.78 14.33L17.56 13.1899C18.19 12.9399 18.89 12.9399 19.52 13.1899L20.52 13.6L22.31 14.33C22.69 14.49 23 14.95 23 15.37Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.9501 11.0101L20.52 13.6L19.52 13.19C18.89 12.94 18.19 12.94 17.56 13.19L14.78 14.33C14.4 14.49 14.09 14.95 14.09 15.37V17.5601C14.09 18.8101 14.55 20.02 15.34 21H6.18003C4.81003 21 3.52005 19.9101 3.29005 18.5601L2.03004 11.0101C1.87004 10.0801 2.34002 8.83004 3.08002 8.24004L9.66004 2.98003C10.67 2.17003 12.31 2.17004 13.32 2.99004L19.9 8.24004C20.63 8.83004 21.1101 10.0801 20.9501 11.0101Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  };

  return (
    <div style={{ margin: '10%' }}>
      <Benefit mainText="Secure Uploads" secondaryText="Privacy First" svg={secureSvg} />
      <Benefit mainText="Instant Analysis" secondaryText="Quick Results" svg={analyzeSvg} />
      <Benefit mainText="Stay Safe Online" secondaryText="Peace of Mind" svg={safeSvg} />
    </div>
  );
};
