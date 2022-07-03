import CreateFolder from "./folders/CreateFolder";
import Folders from "./folders";
import { FolderButton } from "./folders";


export default function Middle() {
  return (
    <div className="middle-sec">
      <FolderButton _id="all" name="All notes" />
      <FolderButton _id="/personal" name="Personal" />
      <Folders folders={[]} />
      <CreateFolder />
    </div>
  );
}
