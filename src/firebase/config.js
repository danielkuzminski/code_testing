import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDXJ4Ju0q5sstCgkt96oAJ5JqXw_MaVclo",
    authDomain: "battleground-945e5.firebaseapp.com",
    projectId: "battleground-945e5",
    storageBucket: "battleground-945e5.appspot.com",
    messagingSenderId: "87031811888",
    appId: "1:87031811888:web:cef0c06896a062edcd42f5"
  };

initializeApp(firebaseConfig)

const db = getFirestore()

export {db}