import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import TaskList from "@tiptap/extension-task-list";
import Placeholder from "@tiptap/extension-placeholder";
import TaskItem from "@tiptap/extension-task-item";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";


export default function Editor({ readOnly, value, setHTML, setJSON }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list",
          },
        },
      }),
      Underline,
      TaskList,
      TaskItem,
      Link.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder: "Wordify your thoughts ...",
      }),
      TextAlign.configure({
        types: ["paragraph", "heading"],
      }),
    ],
  });

  useEffect(() => {
    if (!editor) {
      return undefined;
    }
  }, []);

  return (
    <>
      <EditorContent editor={editor} className="editor-wrapper"/>
    </>
  );
}
