import { initializeApp, getApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCSQjxhyRY5E2pmGCVGfd5dqk6wmn5wQSo",
  authDomain: "parkpilot-9d373.firebaseapp.com",
  projectId: "parkpilot-9d373",
  storageBucket: "parkpilot-9d373.appspot.com",
  messagingSenderId: "156962081666",
  appId: "1:156962081666:web:0c8554ef6fd05c962e1d9b",
  measurementId: "G-LG6W8D6H85"
};

// Initialize Firebase
const app = getApps.length === 0 ? initializeApp(firebaseConfig) : getApp();