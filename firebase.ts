import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getStorage, connectStorageEmulator } from 'firebase/storage'

// Config
const firebaseConfig = {
    apiKey: 'AIzaSyA7X2i8Dl0hi_bSdxx2ZbOfxrp6WSKvFls',
    authDomain: 'chiquezi.firebaseapp.com',
    projectId: 'chiquezi',
    storageBucket: 'chiquezi.appspot.com',
    messagingSenderId: '584565220826',
    appId: '1:584565220826:web:552766e7a886cabc964ce3',
    measurementId: 'G-TTTSX9N1SH'
}

// Standard Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const storage = getStorage(app)

// Connection with emulator
if (process.env.NODE_ENV === 'development') {
    // connectAuthEmulator(auth, 'http://localhost:9099')
    // connectStorageEmulator(storage, 'http://localhost', 9199)
    // connectStorageEmulator(storage, 'http://localhost', 9199, { mockUserToken: { user_id: 'HIBxg7wwfWvGKwlkoanlLAu5OIIf' } })
}
