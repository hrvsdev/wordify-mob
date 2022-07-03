import * as React from "react";

const SvgOrderedList = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="orderedList_svg__icon orderedList_svg__icon-tabler orderedList_svg__icon-tabler-list-numbers"
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
    <path d="M11 6h9M11 12h9M12 18h8M4 16a2 2 0 1 1 4 0c0 .591-.5 1-1 1.5L4 20h4M6 10V4L4 6" />
  </svg>
);

export default SvgOrderedList;
