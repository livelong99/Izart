import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import {UserContext} from "../../../Store";


const Container = styled.div`
    margin-top: 3rem;
`

const ProfileImg = styled.img`
    height: 8rem;
    width: 8rem;
    border-radius: 100%;
    margin-left: 50%;
    transform: translateX(-50%)
`
const ProfileName = styled.h1`
    font-size: 30px;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-family: "League Spartan Variable";
    color: #FFFFFF;
`

const Profile = () => {
    const [User, setUser] = useContext(UserContext);

    useEffect(() => {
        console.log(JSON.stringify(User));
    })

    return (
        <Container>
            <ProfileImg src={User.photoURL} />
            <ProfileName>{User.displayName}</ProfileName>
        </Container>
    )
}

export default Profile
