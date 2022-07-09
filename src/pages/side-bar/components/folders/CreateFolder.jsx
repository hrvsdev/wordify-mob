import { useState, useRef, useContext } from "react";
import axios from "axios";

import { Folder } from "tabler-icons-react";
import { FolderPlus } from "tabler-icons-react";
import { Plus } from "tabler-icons-react";

import { Context } from "../../../../Context";
import { addFolder } from "../../../../firebase/notes";

export default function CreateFolder() {
  // Context
  const { user } = useContext(Context);

  // New folder input state
  const [folderName, setFolderName] = useState("");

  // Refs
  const addFolderRef = useRef(null);
  const addFolderInputRef = useRef(null);

  // Showing input box for folder
  const addFolderFunc = () => {
    addFolderRef.current.classList.add("show");
    addFolderInputRef.current.focus();
  };

  // Creating a folder
  const createFolder = () => {
    addFolder({ name: folderName, user: user.uid });
  };

  // Handling creating a folder
  const handleCreateFolder = () => {
    if (folderName.trim()) {
      createFolder();
    }
    addFolderRef.current.classList.remove("show");
    addFolderInputRef.current.value = "";
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
