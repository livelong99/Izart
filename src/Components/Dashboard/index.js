import React, {useContext, useEffect, useState} from 'react'
import Main from './Main/Main'
import SideBar from './Sidebar/Sidebar'
import firebase from "firebase/app";
import "firebase/firestore";
import {
    FirebaseAuthConsumer
} from "@react-firebase/auth";
import {UserContext} from "../../Store";
import "./dash.css"

const Dashboard = ({sel}) => {

    
    const db = firebase.firestore();

    const [ch, setCh] = useState(0);


    const [User, setUser] = useContext(UserContext);

    const SetUserInFirestore = (user) => {

        db.collection('Users').doc(user.uid)
        .get().then(
            doc => {
                if(doc.exists)
                    setCh(1);
                else
                    db.collection('Users').doc(user.uid).set({
                        created: firebase.firestore.FieldValue.serverTimestamp(),
                        uid: user.uid,
                        email: user.email,
                        photo: user.photoURL,
                        phone: user.phoneNumber,
                        providerData: user.providerData
                    }).then(() => {console.log(user); setCh(1);})
                    .catch((err) => {console.log(err); setCh(0)});                    
            }
        )
    }

    useEffect(() => {
       // console.log(User);
    //    console.log(orderId);
        
    })
    return (
        <div>
            <FirebaseAuthConsumer>
                {({ isSignedIn, user, providerId }) => {
                    if(isSignedIn === false)
                        // window.location.href="/login";
                        console.log(isSignedIn);
                    else{
                        setUser(user);
                        if(user != null && ch===0) {
                            console.log(user.uid);                      
                            SetUserInFirestore(user);
                            setCh(1);
                        }
                    }
                }}
            </FirebaseAuthConsumer>
            <SideBar />
            <Main sel={sel}/>
        </div>
    )
}

export default Dashboard