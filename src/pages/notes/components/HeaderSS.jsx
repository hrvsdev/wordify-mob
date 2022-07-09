import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Search } from "tabler-icons-react";
import { Menu2 } from "tabler-icons-react";

import { Context } from "../../../Context";

export default function HeaderSS() {
  // Params
  const { folder } = useParams();

  // Context
  const { sideBarOpened, setSideBarOpened, getFolderName } =
    useContext(Context);

  return (
    <header>
      <Menu2 size={28} onClick={() => setSideBarOpened(!sideBarOpened)} />
      <div className="folder-name">Random</div>
      <div className="search-wrapper">
        <Search />
      </div>
    </header>
  );
}
