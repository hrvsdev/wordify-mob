import { useContext, useEffect } from "react";

import CreateFolder from "./folders/CreateFolder";
import Folders from "./folders";
import { FolderButton } from "./folders";

import { Context } from "../../../Context";

export default function Middle() {
  const { folders } = useContext(Context);
  return (
    <div className="middle-sec">
      <FolderButton slug="all" name="All notes" />
      <Folders folders={folders} />
      <CreateFolder />
    </div>
  );
}
