import * as firebase from "firebase";
import firestore from "firebase/firestore";
import { DB_CONFIG } from "./Config/Config";

const setting = { timestampsInSnapshots: true };

firebase.initializeApp(DB_CONFIG);

firebase.firestore().settings(setting);

export default firebase;
