import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Plus } from "tabler-icons-react";
import MQ from "react-responsive";

import HeaderSS from "./components/HeaderSS";
import AddNoteButtonSS from "./components/AddNoteButtonSS";
import { NoteGridLS, NoteGridSS } from "./components/NoteGrid";
import "./notes.scss";

export function NotesLargeScreen() {
  const navigate = useNavigate();
  const { folder } = useParams();

  useEffect(() => {
    if (!folder) navigate("/all");
  }, []);

  return (
    <>
      <MQ minWidth={1000}>
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
        <Outlet />
      </MQ>
      <MQ maxWidth={1000}>
        <div className="middle-side-ss">
          <HeaderSS />
          <NoteGridSS />
          <AddNoteButtonSS />
        </div>
      </MQ>
    </>
  );
}

// export function NotesSmallScreen() {
//   return (
//   );
// }
