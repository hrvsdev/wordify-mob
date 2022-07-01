import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import "./globals.scss";

type Props = {};

export default function App({}: Props): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
