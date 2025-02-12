const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(); // Make sure this is called once in your functions

exports.createUserDocument = functions.auth
  .user()
  .onCreate(async (user: any) => {
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
      console.log(`Successfully created Firestore doc for user: ${uid}`);
    } catch (error) {
      console.error(`Error creating Firestore doc for user: ${uid}`, error);
    }
  });
