import { NavLink } from "react-router-dom";
import { Folder } from "tabler-icons-react";

export function FolderButton({ _id, name }) {
  return (
    <NavLink to={_id} className="side-button">
      <Folder />
      <p>{name}</p>
    </NavLink>
  );
}


export default function Folders({ folders }) {
  return folders.map((e) => {
    return <FolderButton {...e} key={e._id} />;
  });
}
