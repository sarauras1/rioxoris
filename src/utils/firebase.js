// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  writeBatch,
  doc,
  runTransaction,
  getDocs,
  updateDoc,
  arrayRemove,
  arrayUnion
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ-W-sC-_ahjEOh-Dwj7bSucL2654kPQY",
  authDomain: "rio-prices-update.firebaseapp.com",
  projectId: "rio-prices-update",
  storageBucket: "rio-prices-update.appspot.com",
  messagingSenderId: "961195782491",
  appId: "1:961195782491:web:b73f877b3664b347556a7e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

// add data to firebase used just one time fot the scope of adding the deta needed
// I leave this method here even if at the moment is unused just in case I need it again
export const addCollectionAndDocument = async (
  CollectionKey,
  DocumentToAdd
) => {
  try {
    const batch = writeBatch(db);
    const collectionRef = collection(db, CollectionKey);
    DocumentToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.titolo.toLowerCase());
      batch.set(docRef, object);
    });
    await batch.commit();
    console.log("done");
  } catch (error) {
    console.log(error);
  }
};
//get  prezzi from firestore database
export const getPrezziFromFirestore = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "prezzi"));
    const q = querySnapshot.docs.map((doc) => {
      return { id: doc.id, prezzi: doc.data() };
    });
    return q;
  } catch (error) {
    console.error("error from the get prezzi query", error);
  }
};
export const signInAuth = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const authStateChanges = (callback) =>
  onAuthStateChanged(auth, callback);


export const updatePricesFromFirestore = async (values) => { 
  // Create a DocumentReference
  const docRef = doc(db, 'prezzi', 'b&b');
    try {
      await runTransaction(db, async (transaction) => {
        const sfDoc = await transaction.get(docRef);
        if (!sfDoc.exists()) {
          throw "Document does not exist!";
        }
        
        const prezzi = sfDoc.data().data
        if (prezzi[0].stagione === "bassa") {
         
          var nuovoPrezzo = values["prezzo bassa b&b"];
          
          //transaction.set(docRef,  {});
         // Atomically add a new region to the "regions" array field.
            await updateDoc(docRef, {
              data: arrayRemove("0.prezzo")//it doesn't remove the item not sure how to use this problem to solve next time 
            });
        
          await updateDoc(docRef, {
            data: arrayUnion({prezzi: `€ ${nuovoPrezzo},00`, stagione: "bassa"})
          });
         }
      });
      console.log("Transaction successfully committed!");
    } catch (e) {
      console.log("Transaction failed: ", e);
    }

 
};
