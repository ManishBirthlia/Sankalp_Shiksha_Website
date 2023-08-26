import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMSms1zoe3a-aDJyoeDveEBv3yLTYzO2A",
  authDomain: "sankalp-shiksha-manish.firebaseapp.com",
  projectId: "sankalp-shiksha-manish",
  storageBucket: "sankalp-shiksha-manish.appspot.com",
  messagingSenderId: "893338749120",
  appId: "1:893338749120:web:bfa8d2d00ca999a4980525",
  measurementId: "G-ZH5NBQ2HGY",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const database = app.database();
// const analytics = firebase.getAnalytics(app);
