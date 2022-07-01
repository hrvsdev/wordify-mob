import { useParams, NavLink } from "react-router-dom";
import { Folder } from "tabler-icons-react";

export function FolderButton({ _id, name }) {
  const { note } = useParams();
  return (
    <NavLink to={`${_id}/${note}`} className="side-button">
      <Folder />
      <p>{name}</p>
    </NavLink>
  );
}


export default function Folders({ folders }) {
  folders.map((e) => {
    return <FolderButton {...e} key={e._id} />;
  });
}
