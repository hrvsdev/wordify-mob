import Editor from "./components/Editor";
import Header from "./components/Header";
import "./single-note.scss";

export default function index() {
  return (
    <div className="single-note-wrapper-ss">
      <Header />
      <Editor/>
    </div>
  );
}