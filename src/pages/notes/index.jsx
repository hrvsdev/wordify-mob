import { NavLink } from "react-router-dom";
import { Plus } from "tabler-icons-react";

import HeaderSS from "./components/HeaderSS";
import AddNoteButtonSS from "./components/AddNoteButtonSS"
import { NoteGridLS, NoteGridSS } from "./components/NoteGrid";
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
      <NoteGridLS />
    </div>
  );
}

export function NotesSmallScreen() {
  return (
    <div className="middle-side-ss">
      <HeaderSS />
      <NoteGridSS />
      <AddNoteButtonSS/>
    </div>
  );
}
