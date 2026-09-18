require('dotenv').config();

// ייבוא מודולרי התואם לגרסאות החדשות של פיירבייס
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const admin = require('firebase-admin');

const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  // מתקן את ירידות השורה במפתח הפרטי
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
};

// אתחול האפליקציה עם הפונקציות המודולריות החדשות
initializeApp({
  credential: cert(serviceAccount)
});

// יצירת חיבור למסד הנתונים
const db = getFirestore();

// ייצוא החיבור החוצה
module.exports = { db, admin };