import { NavLink } from "react-router-dom";
import { Plus } from "tabler-icons-react";
import NoteGrid from "./components/NoteGrid";
import "./notes.scss";

export function NotesLargeScreen() {
  return (
    <div className="middle-side">
      <div className="folder-name">
        <p>Personal notes</p>
      </div>
      <NavLink to="add" className="add-note">
        <Plus />
        <p>Add a new note</p>
      </NavLink>
      <NoteGrid />
    </div>
  );
}

export function NotesSmallScreen() {
  return <NoteGrid />;
}
