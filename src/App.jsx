import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import ContextProvider from "./Context"
import "./globals.scss";

export default function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ContextProvider>
  );
}
