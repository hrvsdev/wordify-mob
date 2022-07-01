import { NavLink } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

type Props = {};

export default function Footer({}: Props): JSX.Element {
  return (
    <div className="bottom-sec">
      <NavLink to="bin" className="bin">
        <AiOutlineDelete />
        <p>Deleted notes</p>
      </NavLink>
    </div>
  );
}
