import * as React from "react";

const SvgBlockquote = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="blockquote_svg__icon blockquote_svg__icon-tabler blockquote_svg__icon-tabler-blockquote"
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
    <path d="M6 15h15M21 19H6M15 11h6M21 7h-6M9 9h1a1 1 0 1 1-1 1V7.5a2 2 0 0 1 2-2M3 9h1a1 1 0 1 1-1 1V7.5a2 2 0 0 1 2-2" />
  </svg>
);

export default SvgBlockquote;
