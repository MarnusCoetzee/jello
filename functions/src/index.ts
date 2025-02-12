const functions = require('firebase-functions');
const admin = require('firebase-admin');
import { UserRecord } from 'firebase-functions/v1/auth';

admin.initializeApp();

exports.createUserDocument = functions.auth
  .user()
  .onCreate(async (user: UserRecord) => {
    const { uid, email, displayName, photoURL, phoneNumber, providerData } =
      user;

    const userData = {
      uid,
      email,
      displayName,
      photoURL,
      phoneNumber,
      providerData,
      metadata: user.metadata,
    };

    try {
      await admin.firestore().collection('users').doc(uid).set(userData);
    } catch (error) {}
  });
