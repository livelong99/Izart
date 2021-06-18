import React, {useContext, useEffect} from "react";
import { render } from "react-dom";
import "./auth.css"
import {UserContext} from "../../Store";
import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";

import {config} from "../../config";

const Sign = () => {

    const [User, setUser] = useContext(UserContext);

    const googleSign = () => {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleAuthProvider);
    }


    return(
            <div class="authOutCont">
                <div class="authCont">
                    <div class="authLogo"></div>
                    <div class="auth">
                        <div class="links">
                            <div onClick={googleSign} class="link google"><img src="Images/google.svg"/><p>Sign In with Google</p></div>
                            <div class="link face"><img src="Images/facebook.svg"/><p>Sign In with Facebook</p></div>
                            <div class="link twit"><img src="Images/twitter.svg"/><p>Sign In with Twitter</p></div>
                        </div>
                    </div>
                </div>
            <FirebaseAuthConsumer>
            </FirebaseAuthConsumer>
            <div>
            <IfFirebaseAuthed>
                {() => {
                window.location.href="/dashboard"
                }}
            </IfFirebaseAuthed>
            </div>
        </div>
    )
} 

export default Sign;