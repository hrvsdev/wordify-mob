import MQ from "react-responsive";
import { useContext } from "react";
import { Context } from "../../../Context";

import Header from "./Header"

export default function Title() {
  const { title, setTitle, category, setCategory } = useContext(Context);

  return (
    <>
      <MQ minWidth={1001}>
        <div className="upper-sec">
          <div className="title-wrapper">
            <input
              type="text"
              placeholder="Enter note title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="note-info">
          <div className="category-wrapper">
            <p className="info-title">Category</p>
            <div className="info">
              <input
                type="text"
                placeholder="Enter category here"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
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
      </MQ>
      <MQ maxWidth={1000}>
      <Header/>
        <div className="note-data-wrapper">
          <div className="title-wrapper">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="category-wrapper">
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </div>
        </div>
      </MQ>
    </>
  );
}
