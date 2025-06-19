// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  databaseUrl: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
};

// const firebase = initializeApp(firebaseConfig);
const messagePath: string = "chatroom";

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getDatabase(app, firebaseConfig.databaseUrl);

export { messagePath, app };
