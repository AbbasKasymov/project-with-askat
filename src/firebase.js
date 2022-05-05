import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATeqe2fy8Ca_a3NENM9dlN5pEayjFwKDM",
  authDomain: "js-gang-store.firebaseapp.com",
  projectId: "js-gang-store",
  storageBucket: "js-gang-store.appspot.com",
  messagingSenderId: "728257439984",
  appId: "1:728257439984:web:e96ad1eb57212d3bcbba35",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
