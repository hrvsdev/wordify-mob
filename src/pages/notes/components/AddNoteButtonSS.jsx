import { Link } from "react-router-dom";
import { Plus } from "tabler-icons-react";

export default function AddNoteButtonSS() {
  return (
    <Link to="add" className="add-note-button">
      <Plus size={30} strokeWidth={3} />
    </Link>
  );
}
