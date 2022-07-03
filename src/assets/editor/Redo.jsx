import * as React from "react";

const SvgRedo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="redo_svg__icon redo_svg__icon-tabler redo_svg__icon-tabler-rotate-clockwise-2"
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
    <path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01" />
  </svg>
);

export default SvgRedo;
