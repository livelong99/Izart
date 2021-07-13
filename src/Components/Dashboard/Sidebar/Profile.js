import { Rotate90DegreesCcw } from '@material-ui/icons';
import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import {UserContext, ExpandContext} from "../../../Store";


const Container = styled.div`
    margin-top: 10px;
    width: 100%;
`

const ProfileImg = styled.img`
    width: 70%;
    max-width: 70px;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-bottom:10px;
`
const BtnCont = styled.div`
    width:100%;
    background-color: #E5EEE5;
    height: 40px;
`
const Btn = styled.div`
    width:40px;
    margin-left: 100%;
    background-color: #E5EEE5;
    height: 100%;
    border-radius: 0px 10px 10px 0px;
    cursor: pointer;
`

const SVG = styled.svg`
    transform: ${props => props.expand ? "rotate(0deg)" : "rotate(180deg)"};
`

const Profile = () => {
    const [User, setUser] = useContext(UserContext);
    const [expand, setExpand] = useContext(ExpandContext);

    useEffect(() => {
    })

    return (
        <Container>
            <ProfileImg src="../nav_icon.png" />
            <BtnCont><Btn onClick={() => {setExpand(!expand)}}><SVG expand={expand} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#303778" d="M16.7,15.3L13.4,12l3.3-3.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-4,4c0,0,0,0,0,0c-0.4,0.4-0.4,1,0,1.4l4,4
	c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3C17.1,16.3,17.1,15.7,16.7,15.3z M8,7C7.4,7,7,7.4,7,8v8c0,0.6,0.4,1,1,1s1-0.4,1-1
	V8C9,7.4,8.6,7,8,7z"/></SVG></Btn></BtnCont>
            {/* <ProfileName>izart</ProfileName> */}
        </Container>
    )
}

export default Profile
