import React from "react";

function ArrowIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 5 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.162156 0.162155C0.378365 -0.0540535 0.728908 -0.0540535 0.945116 0.162155L3.89784 3.11488C4.11405 3.33109 4.11405 3.68163 3.89784 3.89784L0.945116 6.85057C0.728908 7.06678 0.378365 7.06678 0.162156 6.85057C-0.0540521 6.63436 -0.0540521 6.28382 0.162156 6.06761L2.7234 3.50636L0.162156 0.945115C-0.0540521 0.728906 -0.0540521 0.378363 0.162156 0.162155Z"
        fill="#626060"
      />
    </svg>
  );
}

export default ArrowIcon;
