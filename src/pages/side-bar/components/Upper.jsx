import { useContext } from "react";
import { Avatar } from "@mantine/core";
import { Search } from "tabler-icons-react";

import { Context } from "../../../Context";

export default function Upper() {

  const {user} = useContext(Context)

  return (
    <div className="upper-sec">
      <div className="user-info-wrapper">
        <Avatar className="user-image" src={user?.photoURL} />
        <p className="user-name">{user?.displayName}</p>
      </div>
      <div className="search-wrapper">
        <Search className="icon" />
        <input type="text" placeholder="Search notes" />
      </div>
    </div>
  );
}
