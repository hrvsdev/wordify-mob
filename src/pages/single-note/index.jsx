import MQ from "react-responsive";

import Header from "./components/Header";
import Title from "./components/Title";
import Editor from "./components/Editor";
import MenuBar from "./components/MenuBar";
import "./single-note.scss";

export default function index() {
  return (
    <>
      <MQ minWidth={1000}>
        <div className="single-note-wrapper-ls">
          <div className="upper-sec">
            <div className="title-wrapper">
              <input type="text" placeholder="Enter note title" />
            </div>
          </div>
          <div className="note-info">
            <div className="category-wrapper">
              <p className="info-title">Category</p>
              <div className="info">
                <input type="text" placeholder="Enter category here" />
              </div>
            </div>
            <div className="created-wrapper">
              <p className="info-title">Created at</p>
              <p className="info">28 Aug 2022, 09:16 AM</p>
            </div>
            <div className="modified-wrapper">
              <p className="info-title">Modified at</p>
              <p className="info">28 Aug 2022, 02:56 PM</p>
            </div>
          </div>
          <MenuBar />
            <Editor />
        </div>
      </MQ>
      <MQ maxWidth={1000}>
        <div className="single-note-wrapper-ss">
          <Header />
          <Title />
          <Editor />
          <MenuBar />
        </div>
      </MQ>
    </>
  );
}
