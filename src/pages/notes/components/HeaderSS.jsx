import { useContext } from "react";
import { Search } from "tabler-icons-react";
import { Menu2 } from "tabler-icons-react";

import { Context } from "../../../Context";

export default function HeaderSS() {
  const { sideBarOpened, setSideBarOpened } = useContext(Context);

  return (
    <header>
      <Menu2 size={28} onClick={() => setSideBarOpened(!sideBarOpened)} />
      <div className="folder-name">Personal Notes</div>
      <div className="search-wrapper">
        <Search/>
      </div>
    </header>
  );
}
