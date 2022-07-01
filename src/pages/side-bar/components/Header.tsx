import { Avatar } from "@mantine/core";
import { Search } from "tabler-icons-react";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="upper-sec">
      <div className="user-info-wrapper">
        <Avatar className="user-image" color="blue" />
        <p className="user-name">Harsh Vyas</p>
      </div>
      <div className="search-wrapper">
        <Search className="icon" />
        <input type="text" placeholder="Search notes" />
      </div>
    </div>
  );
}
