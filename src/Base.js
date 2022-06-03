import { initializeApp} from 'firebase/app'
import {getFirestore} from '@firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCkQ5MluiORf60hYJOfJEHSRB1CSt012Uk",
    authDomain: "luciatodoapp.firebaseapp.com",
    projectId: "luciatodoapp",
    storageBucket: "luciatodoapp.appspot.com",
    messagingSenderId: "567663352330",
    appId: "1:567663352330:web:dd3e2474748d9509065df3"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)