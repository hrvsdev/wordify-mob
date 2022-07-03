import * as React from "react";

const SvgCheckList = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="checkList_svg__icon checkList_svg__icon-tabler checkList_svg__icon-tabler-list-check"
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
    <path d="M3.5 5.5 5 7l2.5-2.5M3.5 11.5 5 13l2.5-2.5M3.5 17.5 5 19l2.5-2.5M11 6h9M11 12h9M11 18h9" />
  </svg>
);

export default SvgCheckList;
