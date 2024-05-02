import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDo5ld9TaNRBU0Y_8b7JaTy6VVs5E8zv9I",
  authDomain: "pokebattle-app.firebaseapp.com",
  projectId: "pokebattle-app",
  storageBucket: "pokebattle-app.appspot.com",
  messagingSenderId: "661125605609",
  appId: "1:661125605609:web:e2f62b2d806dd3294ba878"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };