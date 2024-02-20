import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAV7AFbyvyA44Hd3VUGmUG_sAnax3c6V5A",
    authDomain: "sber-hackathon-b55cc.firebaseapp.com",
    projectId: "sber-hackathon-b55cc",
    storageBucket: "sber-hackathon-b55cc.appspot.com",
    messagingSenderId: "511816292157",
    appId: "1:511816292157:web:ae188a830a8412366ed754"
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;