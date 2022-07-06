import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Masonry from "react-masonry-css";

import { Context } from "../../../Context";

function Note({ _id, title, content, category }) {
  return (
    <NavLink to={_id} className="note-wrapper">
      <p className="title">{title}</p>
      <p className="description">{content}</p>
      <div className="note-bottom-wrapper">
        <p className="category">{category}</p>
        <p className="time">17 mins ago</p>
      </div>
    </NavLink>
  );
}

function Notes() {
  const { notes } = useContext(Context);

  return notes.map((e) => {
    return <Note {...e} key={e._id} />;
  });
}

export function NoteGridLS() {
  return (
    <div className="notes-grid-wrapper large-screen">
      <Notes />
    </div>
  );
}

export function NoteGridSS() {
  const breakpointColumnsObj = {
    default: 4,
    800: 3,
    600: 2,
    350: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="notes-grid-wrapper small-screen"
    >
      <Notes/>
    </Masonry>
  );
}
