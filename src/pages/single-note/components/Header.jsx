import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ArrowLeft, DotsVertical } from "tabler-icons-react";
import { AiOutlineDelete } from "react-icons/ai";

import { Context } from "../../../Context";

export default function HeaderSS() {
  const navigate = useNavigate();
  const {} = useContext(Context);

  const handleBack = () => {
    setTimeout(() => {
      navigate(-1);
    }, 200);
  };

  return (
    <header>
      <div className="arrow icon-wrapper" onClick={handleBack}>
        <ArrowLeft size={30} />
      </div>
      <div className="right-side">
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
