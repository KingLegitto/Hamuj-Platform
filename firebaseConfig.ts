// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, DataSnapshot } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "hamuj-platform-test.firebaseapp.com",
  projectId: "hamuj-platform-test",
  storageBucket: "hamuj-platform-test.appspot.com",
  messagingSenderId: "120018862802",
  appId: "1:120018862802:web:653c66b62af3dae25a230b",
  measurementId: "G-N40DECYM35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

function uploadResponse(responseObj : string, name: string){
  const date = Date.now()
  const id = `${name}${date}`
  set( ref(db, 'consultation-responses/' + id ), {author: name, response: responseObj})
  return id
}

async function fetchResponse(id: string){
 const results = await get(ref( db, `consultation-responses/${id}`))
 return results.val()
}



export {uploadResponse, fetchResponse}