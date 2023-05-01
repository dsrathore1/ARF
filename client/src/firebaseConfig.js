import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCXDaRs1cR83a69pz2fNSAWc3uDCMt0mCk",
    authDomain: "arforce-72884.firebaseapp.com",
    projectId: "arforce-72884",
    storageBucket: "arforce-72884.appspot.com",
    messagingSenderId: "407841641880",
    appId: "1:407841641880:web:abb8a44d599952cac447ed"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);