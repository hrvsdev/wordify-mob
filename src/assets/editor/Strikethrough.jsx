import * as React from "react";

const SvgStrikethrough = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="strikethrough_svg__icon strikethrough_svg__icon-tabler strikethrough_svg__icon-tabler-strikethrough"
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
    <path d="M5 12h14M16 6.5A4 2 0 0 0 12 5h-1a3.5 3.5 0 0 0 0 7h2a3.5 3.5 0 0 1 0 7h-1.5a4 2 0 0 1-4-1.5" />
  </svg>
);

export default SvgStrikethrough;
