import { Routes, Route } from "react-router-dom";
import MQ from "react-responsive";

import ContextProvider from "./Context";
import Home from "./pages/home";
import Notes from "./pages/notes";
import SingleNote from "./pages/single-note";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Forgot from "./pages/auth/Forgot";

export default function App() {
  return (
    <ContextProvider>
      <MQ minWidth={1001}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Notes />}>
              <Route index element={<SingleNote />} />
            </Route>
            <Route path=":folder" element={<Notes />}>
              <Route index element={<SingleNote />} />
              <Route path=":note" element={<SingleNote />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<Forgot />} />
        </Routes>
      </MQ>
      <MQ maxWidth={1000}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Notes />} />
            <Route path=":folder" element={<Notes />} />
            <Route path=":folder/:note" element={<SingleNote />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<Forgot />} />
        </Routes>
      </MQ>
    </ContextProvider>
  );
}
