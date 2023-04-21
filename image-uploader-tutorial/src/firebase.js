// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJDR7taVoq7Ppm27JkFuQEhuVP7rr7DbY",
  authDomain: "image-uploader-yt-aa698.firebaseapp.com",
  projectId: "image-uploader-yt-aa698",
  storageBucket: "image-uploader-yt-aa698.appspot.com",
  messagingSenderId: "284291416418",
  appId: "1:284291416418:web:21ae0bf99603b9f168ac3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;