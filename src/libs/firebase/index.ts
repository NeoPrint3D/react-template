import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIRE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIRE_AUTH_DOM,
  databaseURL: process.env.NEXT_PUBLIC_FIRE_DB_URL,
  projectId: process.env.NEXT_PUBLIC_FIRE_PRJ_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIRE_STG_BKT,
  messagingSenderId: process.env.NEXT_PUBLIC_FIRE_MSG_ID,
  appId: process.env.NEXT_PUBLIC_FIRE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIRE_MESG_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

export { analytics, firestore, auth };
