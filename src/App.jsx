import { Routes, Route, Navigate, useParams } from "react-router-dom";
import MQ from "react-responsive";

import ContextProvider from "./Context";
import Home from "./pages/home";
import { NotesLargeScreen } from "./pages/notes";
import SingleNote from "./pages/single-note";

export default function App() {
  return (
    <ContextProvider>
      <MQ minWidth={1000}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<NotesLargeScreen />}>
              <Route index element={<SingleNote />} />
            </Route>
            <Route path=":folder" element={<NotesLargeScreen />}>
              <Route index element={<SingleNote />} />
              <Route path=":note" element={<SingleNote />} />
            </Route>
          </Route>
        </Routes>
      </MQ>
      <MQ maxWidth={1000}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<NotesLargeScreen />} />
            <Route path=":folder" element={<NotesLargeScreen />} />
            <Route path=":folder/:note" element={<SingleNote />} />
          </Route>
        </Routes>
      </MQ>
    </ContextProvider>
  );
}
