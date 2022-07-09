import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./config";

const db = getFirestore(app);

// Folders reference
const foldersRef = collection(db, "folders");

// Notes reference
const notesRef = collection(db, "notes");

// Adding a folder
const addFolder = async (data) => {
  try {
    const res= await addDoc(foldersRef, data);
  } catch (err) {
    console.log(err);
  }
};

// Adding a note
const addNote = async (data) => {
  try {
    await addDoc(notesRef, data);
  } catch (err) {
    console.log(err);
  }
};

export { db, foldersRef, notesRef, addFolder, addNote };