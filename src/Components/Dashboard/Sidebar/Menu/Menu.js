import React, {useContext, useState} from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'
import {DashContext} from "../../../../Store";
import firebase from "firebase/app";
import {
    Link
  } from "react-router-dom";

import dimension from "../../../../OtherFiles/Dimensions"

//Desktop
const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Add = styled.div`
    width: ${props => props.active ? "100%" : "70%"};;
    border-right: ${props => props.active ? "20px solid rgba(255,255,255,1)" : "none"};
    border-radius: ${props => props.active ? "50px 0px 0px 50px " : "50px"};
    margin-left: 15%;
    background-color: #FFFFFF;
    color: #000000;
    margin-bottom: 50px;
    cursor: pointer;
    transition: 0.3s all ease-in-out;

    &:  ${props => props.active ? "hover { background-color: #FFFFFF; color: #000000 }" : "hover {     background-color: #000000; color: #FFFFFF }"};
`
const AddTxt = styled.h1`
    width: 100%;
    padding: 10px;
    padding-left: 0px;
    font-size: 30px;
    text-align: center;
    font-family: "League Spartan Variable";
`
//Mobile

const MobileContainer= styled.div`
    margin-top: 1rem;
    width: 100%;
    display: inline-flex;
    justify-content: space-evenly;
`




const Menu = () => {

    const [dash, setDash] = useContext(DashContext);
    const {width} = dimension();

    if(width>1000){
        return (
            <Container>
                <Link to="/dashboard/add"><MenuLink title="Orders" icon={'add'} active={dash==1 ? true : false} last={0}/></Link>                
                <Link to="/dashboard"><MenuLink title="Orders" icon={'order'} active={dash==2 ? true : false} last={0}/></Link>
                <Link to="/dashboard/cart"><MenuLink title="Cart" icon={'cart'} active={dash==3 ? true : false} last={0}/></Link>
                <Link to="/dashboard/account"><MenuLink title="Account" icon={'account'} active={dash==4 ? true : false} last={0}/></Link>
                <a onClick={() => {firebase.auth().signOut(); window.location.href="/login";}}><MenuLink title="Account" icon={'logout'} last={1}/></a>
            </Container>
        )
    }
    else
        return(
            <MobileContainer>
                <Link to="/dashboard/add"><MenuLink title="Orders" icon={'add'} active={dash==1 ? true : false}/></Link>
                <Link to="/dashboard"><MenuLink title="Orders" icon={'order'} active={dash==2 ? true : false}/></Link>
                <Link to="/dashboard/cart"><MenuLink title="Cart" icon={'cart'} active={dash==3 ? true : false}/></Link>
                <Link to="/dashboard/account"><MenuLink title="Account" icon={'account'} active={dash==4 ? true : false}/></Link>
            </MobileContainer>
        )

    
}

export default Menu

//<a onClick={() => {firebase.auth().signOut(); window.location.href="/login";}}><MenuLink title="Settings" icon={'settings'} active={dash==4 ? true : false}/></a>