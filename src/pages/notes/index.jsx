import { NavLink } from "react-router-dom";
import { Plus } from "tabler-icons-react";
import Masonry from "react-masonry-css";
import Header from "./components/Header";
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
    <>
      <Header />
      <NoteGridSS />
    </>
  );
}
