import * as React from "react";

const SvgNormal = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-5 -5 24 24"
    width={22}
    fill="currentColor"
    {...props}
  >
    <path d="M12 2v11a1 1 0 0 1-2 0V2H8v11a1 1 0 0 1-2 0V8H4a4 4 0 1 1 0-8h9a1 1 0 0 1 0 2h-1ZM6 6V2H4a2 2 0 1 0 0 4h2Z" />
  </svg>
);

export default SvgNormal;
