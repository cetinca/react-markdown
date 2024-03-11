import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "domain",
  projectId: "project-id",
  storageBucket: "bucket",
  messagingSenderId: "sender-id",
  appId: "api-id"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
