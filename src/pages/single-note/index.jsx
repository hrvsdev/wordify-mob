import MQ from "react-responsive";
import { useContext } from "react";

import Title from "./components/Title";
import Editor from "./components/Editor";

import { Context } from "../../Context";

import "./single-note.scss";

export default function index() {
  const {} = useContext(Context);

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
