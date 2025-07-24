import { initializeApp, cert } from 'firebase-admin/app';
import fs from 'fs';
import admin from 'firebase-admin';

const serviceAccount = JSON.parse(
  fs.readFileSync(new URL('./firebase-key.json', import.meta.url))
);

initializeApp({
  credential: cert(serviceAccount)
});

export const db = admin.firestore();
