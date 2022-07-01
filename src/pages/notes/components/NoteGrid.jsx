import { NavLink } from "react-router-dom";
import Masonry from "react-masonry-css";

function Note({ notes, content, children }) {
  return (
    <NavLink to="/random" className="note-wrapper">
      <p className="title">Note Title</p>
      <p className="description">{children}</p>
      <div className="note-bottom-wrapper">
        <p className="time">17 Jun</p>
        <p className="divider">|</p>
        <p className="category">Category</p>
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
      <Note>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore delectus
        nostrum doloribus impedit, neque, rerum odit tempora animi fugit
        voluptatibus necessitatibus aut.
      </Note>
      <Note>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem harum
        perferendis amet porro, soluta laboriosam vero nam, ab magni tenetur
      </Note>
      <Note>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        architecto perspiciatis voluptate minima labore nemo tenetur sed, optio
        officiis nihil porro sunt.
      </Note>
      <Note>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore delectus
        nostrum doloribus impedit, neque, rerum odit tempora animi fugit
        voluptatibus necessitatibus aut.
      </Note>
      <Note>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem harum
        perferendis amet porro, soluta laboriosam vero nam, ab magni tenetur
        omnis laborum dolorum.
      </Note>
      <Note>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        architecto perspiciatis voluptate minima labore nemo tenetur sed, optio
        officiis nihil porro sunt.
      </Note>
      <Note>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore delectus
        voluptatibus necessitatibus aut.
      </Note>
      <Note>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem harum
        perferendis amet porro, soluta laboriosam vero nam, ab magni tenetur
        omnis laborum dolorum.
      </Note>
      <Note>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        architecto perspiciatis voluptate minima labore nemo tenetur sed, optio
        officiis nihil porro sunt.
        officiis nihil porro sunt.
        officiis nihil porro sunt.
      </Note>
      <Note>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore delectus
        nostrum doloribus impedit, neque, rerum odit tempora animi fugit
        voluptatibus nDecessitatibus aut.
      </Note>
      <Note>
        laudantium sit, ad eveniet nihil illo aperiam. Excepturi consequuntur
        omnis laborum dolorum.
      </Note>
      <Note>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        architecto perspiciatis voluptate minima labore nemo tenetur sed, optio
        officiis nihil pDDorro sunt.
      </Note>
    </Masonry>
  );
}
