import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useEditor, EditorContent } from "@tiptap/react";
import MQ from "react-responsive";

import StarterKit from "@tiptap/starter-kit";
import TaskList from "@tiptap/extension-task-list";
import Placeholder from "@tiptap/extension-placeholder";
import TaskItem from "@tiptap/extension-task-item";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";

import MenuBar from "./MenuBar";
import { Context } from "../../../Context";

export default function Editor() {
  // Params
  const { note } = useParams();

  // Context
  const { content, setContent, editorValue, setEditorValue } =
    useContext(Context);

  const editor = useEditor({
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },

    content: content,

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
    editor.commands.setContent(editorValue);
    setContent(editor.getHTML());
  }, [editorValue]);

  return (
    <>
      <MQ minWidth={1001}>
        <MenuBar editor={editor} />
      </MQ>
      <EditorContent editor={editor} className="editor-wrapper" />
      <MQ maxWidth={1000}>
        <MenuBar editor={editor} />
      </MQ>
    </>
  );
}
