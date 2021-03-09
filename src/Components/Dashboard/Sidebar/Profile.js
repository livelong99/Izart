import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 3rem;
`

const ProfileImg = styled.img`
    height: 8rem;
    width: 8rem;
    border-radius: 100%;
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
    return (
        <Container>
            <ProfileImg src="Images/portrait.jpg" />
            <ProfileName>Vaibhav</ProfileName>
        </Container>
    )
}

export default Profile
