import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import {UserContext} from "../../../Store";


const Container = styled.div`
    margin-top: 20px;
    border-bottom: 5px solid #FFFFFF;
`

const ProfileImg = styled.img`
    width: 70%;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-bottom:20px;
`
const ProfileName = styled.h1`
    text-align:center;
    width:100%;
    color: #FFFFFF;
    font-size: 50px;
    font-family: "League Spartan Variable";
    font-weight: 900;
`

const Profile = () => {
    const [User, setUser] = useContext(UserContext);

    useEffect(() => {
        console.log(JSON.stringify(User));
    })

    return (
        <Container>
            <ProfileImg src="../nav_icon.png" />
            {/* <ProfileName>izart</ProfileName> */}
        </Container>
    )
}

export default Profile
