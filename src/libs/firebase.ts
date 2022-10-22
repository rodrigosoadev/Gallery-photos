import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {

    apiKey: "AIzaSyCgeN3Yb1JDxTyQjAZ1fasfcZ9C4LN-76U",
    authDomain: "galleryreacttype.firebaseapp.com",
    projectId: "galleryreacttype",
    storageBucket:"galleryreacttype.appspot.com",
    messagingSenderId:"674574938967",
    appId: "1:674574938967:web:05a5d4cfcfa90778fc0412"} 

    /*apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID*/




const firebaseApp = initializeApp(firebaseConfig)

export const storage = getStorage(firebaseApp)