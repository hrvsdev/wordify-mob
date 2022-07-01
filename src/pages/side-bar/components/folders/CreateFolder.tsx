import { useState, useRef } from "react";
import axios from "axios";

import { Folder } from "tabler-icons-react";
import { FolderPlus } from "tabler-icons-react";
import { Plus } from "tabler-icons-react";

export default function CreateFolder() {
  // Types

  // New folder input state
  const [folderName, setFolderName] = useState("");

  // Refs
  const addFolderRef = useRef<HTMLInputElement>(null);
  const addFolderInputRef = useRef<HTMLInputElement>(null);

  // Showing input box for folder
  const addFolderFunc = () => {
    addFolderRef.current && addFolderRef.current.classList.add("show");
    addFolderInputRef.current && addFolderInputRef.current.focus();
  };

  // Creating a folder
  const createFolder = async () => {
    // const url = "http://localhost:5000/folder";
    // const data = { name: folderName.trim() };
    // try {
    //   await axios.post(url, data, { withCredentials: true });
    //   getFolders();
    // } catch (err: any) {
    //   console.log(err.response.data);
    // }
  };

  // Handling creating a folder
  const handleCreateFolder = () => {
    // if (folderName.trim()) {
    //   createFolder();
    // }
    // addFolderRef.current && addFolderRef.current.classList.remove("show");
    // addFolderInputRef.current && addFolderInputRef.current.value = ""
  };

  return (
    <>
      <div ref={addFolderRef} className="add-folder-input">
        <Folder size={24} className="folder-icon" />
        <div className="input-wrapper">
          <input
            ref={addFolderInputRef}
            placeholder="Folder name"
            onKeyDown={(e) => e.key === "Enter" && handleCreateFolder()}
            onChange={(e) => setFolderName(e.target.value)}
          />
        </div>
        <Plus className="plus-icon" onClick={handleCreateFolder} />
      </div>
      <div className="add-folder" onClick={addFolderFunc}>
        <FolderPlus size={24} />
        <p>Add new folder</p>
      </div>
    </>
  );
}
