import * as React from "react";

const SvgBold = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="bold_svg__icon bold_svg__icon-tabler bold_svg__icon-tabler-bold"
    width={22}
    height={22}
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M7 5h6a3.5 3.5 0 0 1 0 7H7zM13 12h1a3.5 3.5 0 0 1 0 7H7v-7" />
  </svg>
);

export default SvgBold;
