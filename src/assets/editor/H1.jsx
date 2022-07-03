import * as React from "react";

const SvgH1 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h1_svg__icon h1_svg__icon-tabler h1_svg__icon-tabler-h-1"
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
    <path d="M19 18v-8l-2 2M4 6v12M12 6v12M11 18h2M3 18h2M4 12h8M3 6h2M11 6h2" />
  </svg>
);

export default SvgH1;
