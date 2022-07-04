import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Check, DotsVertical, InfoCircle } from "tabler-icons-react";
import { AiOutlineDelete } from "react-icons/ai";

import { Context } from "../../../Context";

export default function HeaderSS({ handleSave }) {
  const navigate = useNavigate();
  const {} = useContext(Context);

  return (
    <header>
      <div className="arrow icon-wrapper" onClick={handleSave}>
        <Check size={30} />
      </div>
      <div className="right-side">
        <div className="info icon-wrapper">
          <InfoCircle size={26}/>
        </div>
        <div className="delete icon-wrapper">
          <AiOutlineDelete />
        </div>
        <div className="menu icon-wrapper">
          <DotsVertical size={27} />
        </div>
      </div>
    </header>
  );
}
