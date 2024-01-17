import React from 'react';

export default function SolIcon() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={12}
        cy={12}
        r={12}
        fill="url(#paint0_radial_4614_45682)"
        style={{}}
      />
      <defs>
        <radialGradient
          id="paint0_radial_4614_45682"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 12) rotate(90) scale(12)"
        >
          <stop
            stopColor="#9747FF"
            style={{
              stopColor: 'color(display-p3 0.5922 0.2784 1.0000)',
              stopOpacity: 1,
            }}
          />
          <stop offset={1} style={{ stopColor: 'black', stopOpacity: 1 }} />
        </radialGradient>
      </defs>
    </svg>
  );
}
