import { useParams, NavLink } from "react-router-dom";
import { Folder } from "tabler-icons-react";

interface PropsFolderButton {
  _id: string;
  name: string;
}

export function FolderButton({ _id, name }: PropsFolderButton): JSX.Element {
  const { note } = useParams();
  return (
    <NavLink to={`${_id}/${note}`} className="side-button">
      <Folder />
      <p>{name}</p>
    </NavLink>
  );
}

interface PropsFolders {
  folders: {
    name: string;
    _id: string;
  }[];
}

export default function Folders({ folders }: PropsFolders): JSX.Element {
  folders.map((e) => {
    return <FolderButton {...e} key={e._id} />;
  });
}
