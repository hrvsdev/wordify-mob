import * as React from "react";

const SvgAlignCenter = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="alignCenter_svg__icon alignCenter_svg__icon-tabler alignCenter_svg__icon-tabler-align-center"
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
    <path d="M4 6h16M8 12h8M6 18h12" />
  </svg>
);

export default SvgAlignCenter;
