import * as React from "react";

const SvgH2 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h2_svg__icon h2_svg__icon-tabler h2_svg__icon-tabler-h-2"
    width={22}
    height={22}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M17 12a2 2 0 1 1 4 0c0 .591-.417 1.318-.816 1.858L17 18.001h4M4 6v12M12 6v12M11 18h2M3 18h2M4 12h8M3 6h2M11 6h2" />
  </svg>
);

export default SvgH2;
