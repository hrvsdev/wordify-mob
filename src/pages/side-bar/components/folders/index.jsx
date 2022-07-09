import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Folder } from "tabler-icons-react";

export function FolderButton({ slug, name }) {
  return (
    <NavLink to={slug} className="side-button">
      <Folder />
      <p>{name}</p>
    </NavLink>
  );
}

export default function Folders({ folders }) {
  return folders?.docs.map((doc) => {
    return <FolderButton key={doc.id} {...doc.data()} slug={doc.id} />;
  });
}
