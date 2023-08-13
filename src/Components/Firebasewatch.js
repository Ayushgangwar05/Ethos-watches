import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyC4RNMEq6oOusOgMXO4sTrjXWCP2zWJjxU",
  authDomain: "ethoswatch-cf18a.firebaseapp.com",
  databaseURL: "https://ethoswatch-cf18a-default-rtdb.firebaseio.com",
  projectId: "ethoswatch-cf18a",
  storageBucket: "ethoswatch-cf18a.appspot.com",
  messagingSenderId: "122420049679",
  appId: "1:122420049679:web:2a23d3e40f173b81a4707a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getWatch(db) {
  const WatchCol = collection(db, "Watch");
  const WatchSnapshot = await getDocs(WatchCol);
  const WatchList =  WatchSnapshot.docs.map((doc) => doc.data());
  return WatchList;
}
let Watch = await getWatch(db);
export default Watch
