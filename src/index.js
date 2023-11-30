import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCP_SIoMZ90sjTFSEUsyyWGSp-PFPBe0cU",
//   authDomain: "mmsgs-3d95c.firebaseapp.com",
//   projectId: "mmsgs-3d95c",
//   storageBucket: "mmsgs-3d95c.appspot.com",
//   messagingSenderId: "682872180219",
//   appId: "1:682872180219:web:6e45cf1e252d3904030f5e",
// };

// Initialize Firebase
// initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
