import * as React from "react";

const SvgUnorderedList = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="unorderedList_svg__icon unorderedList_svg__icon-tabler unorderedList_svg__icon-tabler-list"
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
    <path d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01" />
  </svg>
);

export default SvgUnorderedList;
