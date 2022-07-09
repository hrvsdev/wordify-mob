import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import MQ from "react-responsive";

import Title from "./components/Title";
import Editor from "./components/Editor";

import { Context } from "../../Context";
import { db } from "../../firebase/notes";

import "./single-note.scss";

export default function index() {
  // Navigation
  const { note } = useParams();

  // Getting a note
  const [noteData] = useDocument(doc(db, "notes", note));

  // Context
  const { setTitle, setEditorValue, setCategory } = useContext(Context);

  // Running on first load
  useEffect(() => {
    const noteMainData = { ...noteData?.data(), id: noteData?.id };

    if (note === "all") {
      setTitle("");
      setEditorValue("");
      setCategory("");
    } else {
      setTitle(noteMainData.title);
      setEditorValue(noteMainData.content);
      setCategory(noteMainData.category);
    }
  }, [noteData, note]);

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
