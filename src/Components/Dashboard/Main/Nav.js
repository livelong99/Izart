import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import {UserContext} from "../../../Store";
import dimensions from "../../../OtherFiles/Dimensions";

//Desktop

const Container = styled.div`
    display: flex;
    width:90%;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1.5rem;
`

const ProfileImg = styled.img`
    height: 3rem;
    margin: 0 1rem;
    cursor: pointer;
    border-radius: 100%;
`

const MessageIcon = styled.img`
    cursor: pointer;
    height: 2rem;
    margin-right: 30px; 
`
const Logo = styled.img`
    cursor: pointer;
    height: 3.5rem;
    margin-right: 40%;
    border-radius: 30%;
`

//Mobile

const MobileContainer = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    background-color: rgba(48, 55, 120,0.2);
    margin-bottom: 1.5rem;
    border-radius: 0px 0px 7px 7px;
`


const Nav = () => {
    const [User, setUser] = useContext(UserContext);
    const {width} = dimensions();

    if(width>1000){
        return (
            <Container>
                <MessageIcon src="../Images/not.svg"></MessageIcon>
                <ProfileImg src={User.photoURL} />
            </Container>
        )
    }
    else{
        return (
            <MobileContainer>
                <Logo src="../new_icon.jpeg"/>
                <MessageIcon src="../Images/not.svg"></MessageIcon>
                <ProfileImg src={User.photoURL} />
            </MobileContainer>
        )
    }
}

export default Nav