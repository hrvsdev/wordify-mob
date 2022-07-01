import CreateFolder from "./folders/CreateFolder";
import Folders from "./folders";
import { FolderButton } from "./folders";

type Props = {};

export default function Middle({}: Props): JSX.Element {
  return (
    <div className="middle-sec">
      <FolderButton _id="/all" name="All notes" />
      <Folders folders={[{ name: "anything", _id: "none" }]} />
      <CreateFolder />
    </div>
  );
}
