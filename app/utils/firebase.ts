import {
    initializeApp,
    applicationDefault,
    getApps,
    getApp,
} from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore'; // new

const app =
    getApps().length === 0
        ? initializeApp({ credential: applicationDefault() })
        : getApp();
const auth = getAuth();
const db = getFirestore(); // new

const test = 'test';

export { app, auth, db, test }; // new
