import * as React from "react";

const SvgUnlink = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="unlink_svg__icon unlink_svg__icon-tabler unlink_svg__icon-tabler-unlink"
    width={22}
    height={22}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#000"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M10 14a3.5 3.5 0 0 0 5 0l4-4a3.5 3.5 0 0 0-5-5l-.5.5" />
    <path d="M14 10a3.5 3.5 0 0 0-5 0l-4 4a3.5 3.5 0 0 0 5 5l.5-.5M16 21v-2M19 16h2M3 8h2M8 3v2" />
  </svg>
);

export default SvgUnlink;
