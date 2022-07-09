import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

import { auth } from "../firebase/auth";
import { foldersRef, notesRef } from "../firebase/notes";
import { query, where } from "firebase/firestore";

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

  // User folders reference
  const userFoldersRef = query(
    foldersRef,
    where("user", "==", user?.uid || "")
  );

  // Folders state
  const [folders] = useCollection(userFoldersRef);

  // Notes state
  const [notes] = useCollection(notesRef);

  return (
    <Context.Provider
      value={{
        sideBarOpened,
        setSideBarOpened,
        title,
        setTitle,
        category,
        setCategory,
        content,
        setContent,
        editorValue,
        setEditorValue,
        user,
        folders,
        notes,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
