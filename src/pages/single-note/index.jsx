import Header from "./components/Header";
import Title from "./components/Title";
import Editor from "./components/Editor";
import MenuBar from "./components/MenuBar";
import "./single-note.scss";

export default function index() {
  return (
    <div className="single-note-wrapper-ss">
      <Header />
      <Title/>
      <Editor/>
      <MenuBar/>
    </div>
  );
}