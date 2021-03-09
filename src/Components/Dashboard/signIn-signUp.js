import React, {useContext, useEffect} from "react";
import { render } from "react-dom";

import * as firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";

import {config} from "../../config";

const Sign = () => {
    return(
        <FirebaseAuthProvider {...config} firebase={firebase}>
            <div class="authOutCont">
            </div>
        </FirebaseAuthProvider>
    )
} 

export default Sign;