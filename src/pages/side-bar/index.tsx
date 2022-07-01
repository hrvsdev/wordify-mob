import Header from "./components/Header";
import Middle from "./components/Middle";
import Footer from "./components/Footer";
import "./folders.scss";
type Props = {};

export default function SideBar({}: Props): JSX.Element {
  return (
    <div className="side-bar-wrapper">
      <Header />
      <Middle/>
      <Footer/>
    </div>
  );
}
