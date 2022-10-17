import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_APPID
  // =================================
  apiKey: "AIzaSyDviEFzibEtISnoAcm5uScQX92e4dYN2Nc",
  authDomain: "doctors-portal-915ff.firebaseapp.com",
  projectId: "doctors-portal-915ff",
  storageBucket: "doctors-portal-915ff.appspot.com",
  messagingSenderId: "8955812468",
  appId: "1:8955812468:web:c04f6c6fca31a248260f21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;