import React, {useContext} from 'react'
import Main from './Main/Main'
import SideBar from './Sidebar/Sidebar'
import {
    FirebaseAuthConsumer
} from "@react-firebase/auth";
import {UserContext} from "../../Store";
import "./dash.css"

const Dashboard = ({sel}) => {
    const [User, setUser] = useContext(UserContext);
    return (
        <div>
            <FirebaseAuthConsumer>
                {({ isSignedIn, user, providerId }) => {
                    if(isSignedIn === false)
                        // window.location.href="/login";
                        console.log(isSignedIn);
                    else{
                        setUser(user);
                    }
                }}
            </FirebaseAuthConsumer>
            <SideBar />
            <Main sel={sel}/>
        </div>
    )
}

export default Dashboard