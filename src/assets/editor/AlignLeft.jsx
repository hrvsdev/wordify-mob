import * as React from "react";

const SvgAlignLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="alignLeft_svg__icon alignLeft_svg__icon-tabler alignLeft_svg__icon-tabler-align-left"
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
    <path d="M4 6h16M4 12h10M4 18h14" />
  </svg>
);

export default SvgAlignLeft;
