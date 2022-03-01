// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCuHRC1rs6isUMKqxbnterVwA0nLMpa4m0',
  authDomain: 'legendaryweeding.firebaseapp.com',
  projectId: 'legendaryweeding',
  storageBucket: 'legendaryweeding.appspot.com',
  messagingSenderId: '183439966104',
  appId: '1:183439966104:web:7647f5d9a04273f858b5ed',
  measurementId: 'G-R7DP1WL9DR',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)

export default app
