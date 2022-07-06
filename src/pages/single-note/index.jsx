import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import MQ from "react-responsive";

import Title from "./components/Title";
import Editor from "./components/Editor";

import { Context } from "../../Context";
import "./single-note.scss";

export default function index() {
  // Navigation
  const { note } = useParams();

  // Context
  const { getNote, setTitle, setContent, setCategory } = useContext(Context);

  // Running on first load
  useEffect(() => {
    if (note === "add") {
      setTitle("");
      setContent("");
      setCategory("");
    } else getNote(note);
  }, [note]);

  return (
    <>
      <MQ minWidth={1001}>
        <div className="single-note-wrapper-ls">
          <Title />
          <Editor />
        </div>
      </MQ>
      <MQ maxWidth={1000}>
        <div className="single-note-wrapper-ss">
          <Title />
          <Editor />
        </div>
      </MQ>
    </>
  );
}
