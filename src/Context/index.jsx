import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Context = createContext();

export default function ContextProvider(props) {
  const navigate = useNavigate();

  const [sideBarOpened, setSideBarOpened] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const [user, setUser] = useState({});

  const [forgotEmail, setForgotEmail] = useState("");

  const [folders, setFolders] = useState([]);

  const getUser = async () => {
    const url = "http://localhost:5000/user";
    try {
      const res = await axios.get(url, { withCredentials: true });
      setUser(res.data.user);
    } catch (err) {
      if (err.response.data.type === "noUser") return navigate("/login");
    }
  };
  return (
    <Context.Provider
      value={{
        user,
        getUser,
        setUser,
        forgotEmail,
        setForgotEmail,
        folders,
        setFolders,
        sideBarOpened,
        setSideBarOpened,
        title,
        setTitle,
        category,
        setCategory,
        content,
        setContent
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
