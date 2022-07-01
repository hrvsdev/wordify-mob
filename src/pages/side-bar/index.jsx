import Upper from "./components/Upper";
import Middle from "./components/Middle";
import Bottom from "./components/Bottom";
import "./folders.scss";

export default function SideBar(){
  return (
    <div className="side-bar-wrapper">
      <Upper />
      <Middle/>
      <Bottom/>
    </div>
  );
}
