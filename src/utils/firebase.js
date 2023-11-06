// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  writeBatch,
  doc,
  runTransaction,
  getDocs
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
    const querySnapshot = await getDocs(collection(db, "rioPrezzi"));

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

export const signoutUser = async () =>{
  return await signOut(auth);
}


//UPDATE PREZZI
export const updatePricesFromFirestore = async (values) => {

  try{
  //update b&b prezzo
  await updatebb(values);
  //update mezza pensione prezzo
 await updatePensioneMedia(values);
  //update pensione completa prezzo
  await updatePensioneCompleta(values);
  //update bambini fino ai 24 mesi prezzo
  await updateBambiniFinoAiMesi(values);
  console.log("transaction committed")
  return "perfect"
  }catch(error){
 
   console.log(error)
   return "error"
  }
  

};

const updatebb = async(values) => {
 
  // Create a DocumentReference
  const docRefb = doc(db, "rioPrezzi", "b&b-bassa");
  const docRefm = doc(db, "rioPrezzi", "b&b-media");
  const docRefa = doc(db, "rioPrezzi", "b&b-alta");
 
    await runTransaction(db, async (transaction) => {
      const sfDocb = await transaction.get(docRefb);
      const sfDocm = await transaction.get(docRefm);
      const sfDoca = await transaction.get(docRefa);
      if (!sfDocb.exists() || !sfDoca.exists() || !sfDocb.exists()) {
        throw "Document does not exist!";
      }
    
      const prezzib = sfDocb.data();
      const prezzim = sfDocm.data();
      const prezzia = sfDoca.data();
      if (
        prezzib.stagione === "bassa" ||
        prezzim.stagione === "media" ||
        prezzia === "alta"
      ) {
        var nuovoPrezzob = values["prezzo bassa b&b"];
        var nuovoPrezzom = values["prezzo media b&b"];
        var nuovoPrezzoa = values["prezzo alta b&b"];

        transaction.update(docRefm, { prezzo: `€ ${nuovoPrezzom},00` });
        transaction.update(docRefb, { prezzo: `€ ${nuovoPrezzob},00` });
        transaction.update(docRefa, { prezzo: `€ ${nuovoPrezzoa},00` });
      }
    });
  
}


const updatePensioneMedia = async(values) => {
 
  // Create a DocumentReference
  const docRefb = doc(db, "rioPrezzi", "mezza-pensione-bassa");
  const docRefm = doc(db, "rioPrezzi", "mezza-pensione-media");
  const docRefa = doc(db, "rioPrezzi", "mezza-pensione-alta");
 
    await runTransaction(db, async (transaction) => {
      const sfDocb = await transaction.get(docRefb);
      const sfDocm = await transaction.get(docRefm);
      const sfDoca = await transaction.get(docRefa);
      if (!sfDocb.exists() || !sfDoca.exists() || !sfDocb.exists()) {
        throw "Document does not exist!";
      }
    
      const prezzib = sfDocb.data();
      const prezzim = sfDocm.data();
      const prezzia = sfDoca.data();
      if (
        prezzib.stagione === "bassa" ||
        prezzim.stagione === "media" ||
        prezzia === "alta" 
      ) {
        var nuovoPrezzob = values["prezzo bassa mezza"];
        var nuovoPrezzoa = values["prezzo alta mezza"];
        var nuovoPrezzom = values["prezzo media mezza"];
        
        transaction.update(docRefb, { prezzo: `€ ${nuovoPrezzob},00` });    
        transaction.update(docRefm, { prezzo: `€ ${nuovoPrezzom},00` });   
        transaction.update(docRefa, { prezzo: `€ ${nuovoPrezzoa},00` });
      }
    });
   
}




const updatePensioneCompleta = async(values) => {
 
  // Create a DocumentReference
  const docRefb = doc(db, "rioPrezzi", "pensione-completa-bassa");
  const docRefm = doc(db, "rioPrezzi", "pensione-completa-media");
  const docRefa = doc(db, "rioPrezzi", "pensione-completa-alta");

    await runTransaction(db, async (transaction) => {
      const sfDocb = await transaction.get(docRefb);
      const sfDocm = await transaction.get(docRefm);
      const sfDoca = await transaction.get(docRefa);
      if (!sfDocb.exists() || !sfDoca.exists() || !sfDocb.exists()) {
        throw "Document does not exist!";
      }
    
      const prezzib = sfDocb.data();
      const prezzim = sfDocm.data();
      const prezzia = sfDoca.data();
      if (
        prezzib.stagione === "bassa" ||
        prezzim.stagione === "media" ||
        prezzia === "alta" 
      ) {
        var nuovoPrezzob = values["prezzo bassa completa"];
        var nuovoPrezzom = values["prezzo media completa"];
        var nuovoPrezzoa = values["prezzo alta completa"];
        
        transaction.update(docRefb, { prezzo: `€ ${nuovoPrezzob},00` });   
        transaction.update(docRefm, { prezzo: `€ ${nuovoPrezzom},00` });    
        transaction.update(docRefa, { prezzo: `€ ${nuovoPrezzoa},00` });

      }
    });
  
}


const updateBambiniFinoAiMesi = async(values) => {
 
  // Create a DocumentReference
  const docRefb = doc(db, "rioPrezzi", "bambini-fino-ai-24-mesi-bassa");
  const docRefm = doc(db, "rioPrezzi", "bambini-fino-ai-24-mesi-media");
  const docRefa = doc(db, "rioPrezzi", "bambini-fino-ai-24-mesi-alta");
 
    await runTransaction(db, async (transaction) => {
      const sfDocb = await transaction.get(docRefb);
      const sfDocm = await transaction.get(docRefm);
      const sfDoca = await transaction.get(docRefa);
      if (!sfDocb.exists() || !sfDoca.exists() || !sfDocb.exists()) {
        throw "Document does not exist!";
      }
    
      const prezzib = sfDocb.data();
      const prezzim = sfDocm.data();
      const prezzia = sfDoca.data();
      if (
        prezzib.stagione === "bassa" ||
        prezzim.stagione === "media" ||
        prezzia === "alta" 
      ) {
        var nuovoPrezzob = values["prezzo bassa 24"];
        var nuovoPrezzom = values["prezzo media 24"];
        var nuovoPrezzoa = values["prezzo alta 24"];
    
        transaction.update(docRefb, { prezzo: `€ ${nuovoPrezzob},00` });
        transaction.update(docRefm, { prezzo: `€ ${nuovoPrezzom},00` });   
        transaction.update(docRefa, { prezzo: `€ ${nuovoPrezzoa},00` });
      }
    });
  
}




