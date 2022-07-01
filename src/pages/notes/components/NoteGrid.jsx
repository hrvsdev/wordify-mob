import { NavLink } from "react-router-dom";

// import {
//   convertDateToString,
//   extractTextFromHTML,
// } from "../../../helper/note.helper";

function Note({ notes }) {
  return (
    <NavLink to="/random" className="note-wrapper">
      <p className="title">Note Title</p>
      <p className="description">It is note description</p>
      <div className="note-bottom-wrapper">
        <p className="time">17 Jun</p>
        <p className="divider">|</p>
        <p className="category">Category</p>
      </div>
    </NavLink>
  );
}

export default function NoteGrid() {
  return (
    <div className="notes-grid-wrapper">
      <Note />
      <Note />
    </div>
  );
}
