import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// import firebase from 'firebase/app';
// import { initializeApp } from 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB8UZNzkmRp0ZTPLcQ2PoC8A5m5uXZJBEg",
  authDomain: "crown-db-392e7.firebaseapp.com",
  projectId: "crown-db-392e7",
  storageBucket: "crown-db-392e7.appspot.com",
  messagingSenderId: "462779139692",
  appId: "1:462779139692:web:a18d140f0e8a90101e3a49",
  measurementId: "G-7F09R6T0RR"
};

firebase.initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // Firebase refresher 2
  // const collectionRef = firestore.collection('users');

  // Firebase refresher 1
  // const userRef = firestore.doc(`users/13yjfu84`);
  // console.log(userRef);

  const snapShot = await userRef.get();

  // Firebase refresher 2
  // const collectionSnapshot = await collectionRef.get();
  // console.log({collectionSnapshot});
  // console.log({collection: collectionSnapshot.docs.map(doc => doc.data())});

  // Firebase refresher 1
  // console.log(snapShot.data());

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });

      // Firebase refresher 1
      // await userRef.set({
      //   displayName: 'Test User',
      //   email: 'randomemail@gmail.com',
      //   createdAt,
      //   ...additionalData
      // });

    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
  // console.log(snapShot);
};

// Moving our shop data to firebase 2
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {

  // Moving our shop data to firebase
  // export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log(collectionRef);

  // Moving our shop data to firebase 2
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    // console.log(newDocRef);
    batch.set(newDocRef, obj);
  });
  // Moving our shop data to firebase 2
  return await batch.commit();
}

// reason for Bringing shop data to our app
export const convertCollectionsSnapshotToMap = (collections) => {
  // .docs querySnapshot k map krbe
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  // console.log(transformedCollection);

  // Adding shop data to redux
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}

// const firebase = initializeApp(config)
// const analytics = getAnalytics(firebase);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// export const auth = auth();
// export const firestore = firestore();


// google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
// export default analytics;