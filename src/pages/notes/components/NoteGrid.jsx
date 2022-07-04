import { useRef, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import Masonry from "react-masonry-css";
import { useLongPress } from 'use-long-press'

function Note({ notes, content, children }) {

  return (
    <NavLink to="random" className="note-wrapper">
      <p className="title">Note Title</p>
      <p className="description">{children}</p>
      <div className="note-bottom-wrapper">
        <p className="category">Category</p>
        <p className="time">17 mins ago</p>
      </div>
    </NavLink>
  );
}

export function NoteGridLS() {
  return (
    <div className="notes-grid-wrapper large-screen">
      <Note>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore delectus
        nostrum doloribus impedit, neque, rerum odit tempora animi fugit
        voluptatibus necessitatibus aut.
      </Note>
      <Note>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem harum
        perferendis amet porro, soluta laboriosam vero nam, ab magni tenetur
        laborum eos minus explicabo consequatur nisi facilis unde perspiciatis
        cumque suscipit sed, a expedita voluptatum error delectus. Pariatur
        laudantium sit, ad eveniet nihil illo aperiam. Excepturi consequuntur
        omnis laborum dolorum.
      </Note>
      <Note>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        architecto perspiciatis voluptate minima labore nemo tenetur sed, optio
        officiis nihil porro sunt.
      </Note>
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
      <Note>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Note>
      <Note>
        Lorem ipsum dolor sit amet c
      </Note>
      <Note>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Note>
    </Masonry>
  );
}
