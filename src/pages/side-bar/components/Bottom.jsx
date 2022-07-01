import { NavLink } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

export default function Bottom(){
  return (
    <div className="bottom-sec">
      <NavLink to="bin" className="bin">
        <AiOutlineDelete />
        <p>Deleted notes</p>
      </NavLink>
    </div>
  );
}
