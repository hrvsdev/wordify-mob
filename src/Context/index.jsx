import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../firebase/auth";

export const Context = createContext();

export default function ContextProvider(props) {
  // Navigate
  const navigate = useNavigate();

  // Side bar state
  const [sideBarOpened, setSideBarOpened] = useState(false);

  // Note State
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [editorValue, setEditorValue] = useState("");

  // User State
  const [user] = useAuthState(auth);

  // Folders state
  const [folders, setFolders] = useState([]);

  // Notes state
  const [notes, setNotes] = useState([]);

  // Forgot email state
  const [forgotEmail, setForgotEmail] = useState("");

  // Getting user
  const getUser = async () => {
    const url = "http://localhost:5000/user";
    try {
      const res = await axios.get(url, { withCredentials: true });
      setUser(res.data.user);
    } catch (err) {
      if (err.response.data.type === "noUser") return navigate("/login");
    }
  };

  // Getting folders
  const getFolders = async () => {
    const url = "http://localhost:5000/folders";
    try {
      const res = await axios.get(url, { withCredentials: true });
      setFolders(res.data.obj);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  // Getting notes
  const getNotes = async (folder) => {
    let url;
    if (!folder) return;
    else if (folder === "all") url = "http://localhost:5000/notes";
    else url = `http://localhost:5000/${folder}/note`;
    try {
      const res = await axios.get(url, { withCredentials: true });
      return setNotes(res.data.obj);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  // Getting folder name
  const getFolderName = (folder) => {
    for (let i = 0; i < folders.length; i++) {
      if (folders[i]._id === folder) return folders[i].name;
      else return "All Notes";
    }
  };

  // Creating a note
  const createNote = async (folder) => {
    let url;
    if (folder === "all") url = "http://localhost:5000/note";
    else url = `http://localhost:5000/${folder}/note`;
    try {
      const data = { title, category, content: content };
      await axios.post(url, data, { withCredentials: true });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  // Getting a note
  const getNote = async (note) => {
    const url = `http://localhost:5000/note/${note}`;
    if (note && note != "add") {
      try {
        const res = await axios.get(url, { withCredentials: true });
        const note = res.data.obj;
        setTitle(note.title);
        setCategory(note.category);
        setEditorValue(note.content);
      } catch (err) {
        console.log(err.response.data);
      }
    }
  };

  return (
    <Context.Provider
      value={{
        user,
        getUser,
        forgotEmail,
        setForgotEmail,
        folders,
        setFolders,
        getFolders,
        notes,
        getNotes,
        setNotes,
        sideBarOpened,
        setSideBarOpened,
        title,
        setTitle,
        category,
        setCategory,
        content,
        setContent,
        getFolderName,
        createNote,
        getNote,
        editorValue,
        setEditorValue,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
