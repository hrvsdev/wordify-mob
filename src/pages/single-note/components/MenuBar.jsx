import BoldIcon from "../../../assets/editor/Bold";
import ItalicIcon from "../../../assets/editor/Italic";
import UnderlineIcon from "../../../assets/editor/Underline";
import StrikethroughIcon from "../../../assets/editor/Strikethrough";
import ClearMarksIcon from "../../../assets/editor/ClearFormat";
import UndoIcon from "../../../assets/editor/Undo";
import RedoIcon from "../../../assets/editor/Redo";
import ClearNodeIcon from "../../../assets/editor/Normal";
import H1Icon from "../../../assets/editor/H1";
import H2Icon from "../../../assets/editor/H2";
import H3Icon from "../../../assets/editor/H3";
import H4Icon from "../../../assets/editor/H4";
import BlockquoteIcon from "../../../assets/editor/Blockquote";
import CodeIcon from "../../../assets/editor/Code";
import BulletListIcon from "../../../assets/editor/UnorderedList";
import OrderedListIcon from "../../../assets/editor/OrderedList";
import TaskListIcon from "../../../assets/editor/CheckList";
import AlignLeftIcon from "../../../assets/editor/AlignLeft";
import AlignCenterIcon from "../../../assets/editor/AlignCenter";
import AlignRightIcon from "../../../assets/editor/AlignRight";
import AlignJustifyIcon from "../../../assets/editor/AlignJustify";
import LinkIcon from "../../../assets/editor/Link";
import UnLinkIcon from "../../../assets/editor/Unlink";
import CheckIcon from "../../../assets/editor/Check";

import { useRef } from "react";
import MQ from "react-responsive";
import prependHttp from "prepend-http";

export default function MenuBar({ editor, dropdownRef }) {
  // Returning if there is no editor instance

  if (!editor) return null;

  const undo = {
    onClick: () => editor.chain().focus().undo().run(),
    disabled: !editor.can().undo(),
  };

  const redo = {
    onClick: () => editor.chain().focus().redo().run(),
    disabled: !editor.can().redo(),
  };

  const bold = {
    onClick: () => editor.chain().focus().toggleBold().run(),
    className: editor.isActive("bold") ? "is-active" : null,
  };

  const italic = {
    onClick: () => editor.chain().focus().toggleItalic().run(),
    className: editor.isActive("italic") ? "is-active" : null,
  };

  const underline = {
    onClick: () => editor.chain().focus().toggleUnderline().run(),
    className: editor.isActive("underline") ? "is-active" : null,
  };

  const strike = {
    onClick: () => editor.chain().focus().toggleStrike().run(),
    className: editor.isActive("strike") ? "is-active" : null,
  };

  const clearMarks = {
    onClick: () => editor.chain().focus().unsetAllMarks().run(),
  };

  const h1 = {
    onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    className: editor.isActive("heading", { level: 1 }) ? "is-active" : null,
  };

  const h2 = {
    onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    className: editor.isActive("heading", { level: 2 }) ? "is-active" : null,
  };

  const h3 = {
    onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    className: editor.isActive("heading", { level: 3 }) ? "is-active" : null,
  };

  const h4 = {
    onClick: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
    className: editor.isActive("heading", { level: 4 }) ? "is-active" : null,
  };

  const bulletList = {
    onClick: () => editor.chain().focus().toggleBulletList().run(),
    className: editor.isActive("bulletList") ? "is-active" : null,
  };

  const orderedList = {
    onClick: () => editor.chain().focus().toggleOrderedList().run(),
    className: editor.isActive("orderedList") ? "is-active" : null,
  };

  const taskList = {
    onClick: () => editor.chain().focus().toggleTaskList().run(),
    className: editor.isActive("taskList") ? "is-active" : null,
  };

  const inlineCode = {
    onClick: () => editor.chain().focus().toggleCode().run(),
    className: editor.isActive("code") ? "is-active" : null,
  };

  const codeBlock = {
    onClick: () => editor.chain().focus().toggleCodeBlock().run(),
    className: editor.isActive("codeBlock") ? "is-active" : null,
  };

  const blockquote = {
    onClick: () => editor.chain().focus().toggleBlockquote().run(),
    className: editor.isActive("blockquote") ? "is-active" : null,
  };

  const clearNode = {
    onClick: () => editor.chain().focus().clearNodes().run(),
  };

  const alignLeft = {
    onClick: () => editor.chain().focus().setTextAlign("left").run(),
    className: editor.isActive({ textAlign: "left" }) ? "is-active" : null,
  };

  const alignCenter = {
    onClick: () => editor.chain().focus().setTextAlign("center").run(),
    className: editor.isActive({ textAlign: "center" }) ? "is-active" : null,
  };

  const alignRight = {
    onClick: () => editor.chain().focus().setTextAlign("right").run(),
    className: editor.isActive({ textAlign: "right" }) ? "is-active" : null,
  };

  const alignJustify = {
    onClick: () => editor.chain().focus().setTextAlign("justify").run(),
    className: editor.isActive({ textAlign: "justify" }) ? "is-active" : null,
  };

  return (
    <>
      <MQ minWidth={1001}>
        <div className="menu-bar ls">
          <div className="block-wrapper">
            <button {...undo}>
              <UndoIcon />
            </button>
            <button {...redo}>
              <RedoIcon />
            </button>
          </div>

          <div className="block-wrapper">
            <button {...bold}>
              <BoldIcon />
            </button>
            <button {...italic}>
              <ItalicIcon />
            </button>
            <button {...underline}>
              <UnderlineIcon />
            </button>
            <button {...strike}>
              <StrikethroughIcon />
            </button>
            <button {...clearMarks}>
              <ClearMarksIcon />
            </button>
          </div>

          <div className="block-wrapper">
            <button {...h1}>
              <H1Icon />
            </button>
            <button {...h2}>
              <H2Icon />
            </button>
            <button {...h3}>
              <H3Icon />
            </button>
            <button {...h4}>
              <H4Icon />
            </button>
          </div>

          <div className="block-wrapper">
            <button {...bulletList}>
              <BulletListIcon />
            </button>
            <button {...orderedList}>
              <OrderedListIcon />
            </button>
            <button {...taskList}>
              <TaskListIcon />
            </button>
          </div>

          <div className="block-wrapper">
            <button {...inlineCode}>
              <CodeIcon />
            </button>
            <button {...codeBlock}>
              <CodeIcon />
            </button>
            <button {...blockquote}>
              <BlockquoteIcon />
            </button>
            <button {...clearNode}>
              <ClearNodeIcon />
            </button>
          </div>

          <div className="block-wrapper">
            <button {...alignLeft}>
              <AlignLeftIcon />
            </button>
            <button {...alignCenter}>
              <AlignCenterIcon />
            </button>
            <button {...alignRight}>
              <AlignRightIcon />
            </button>
            <button {...alignJustify}>
              <AlignJustifyIcon />
            </button>
          </div>
        </div>
      </MQ>
      <MQ maxWidth={1000}>
        <div className="menu-bar ss">
          <div className="block-wrapper">
            <button className="is-active" {...bold}>
              <BoldIcon />
            </button>
            <button {...italic}>
              <ItalicIcon />
            </button>
            <button {...underline}>
              <UnderlineIcon />
            </button>
            <button {...strike}>
              <StrikethroughIcon />
            </button>
            <button {...clearMarks}>
              <ClearMarksIcon />
            </button>
            <button {...bulletList}>
              <BulletListIcon />
            </button>
            <button {...orderedList}>
              <OrderedListIcon />
            </button>
            <button {...taskList}>
              <TaskListIcon />
            </button>
            <button {...blockquote}>
              <BlockquoteIcon />
            </button>
            <button {...h2}>
              <H2Icon />
            </button>
          </div>
        </div>
      </MQ>
    </>
  );
}
