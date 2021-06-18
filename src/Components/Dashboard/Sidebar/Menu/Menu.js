import React, {useContext} from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'
import {DashContext} from "../../../../Store";
import firebase from "firebase/app";
import {
    Link
  } from "react-router-dom";

import dimension from "../../../../OtherFiles/Dimensions"


const Container = styled.div`
    margin-top: 0.5rem;
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

const Menu = () => {

    const [dash, setDash] = useContext(DashContext);
    const {width} = dimension();

    if(width>1000){
        return (
            <Container>
                <Link to="/dashboard/add"><Add active={dash==1 ? true : false}>
                    <AddTxt>Add Item</AddTxt>
                </Add></Link>
                <Link to="/dashboard"><MenuLink title="Orders" icon={'orders.svg'} active={dash==2 ? true : false}/></Link>
                <Link to="/dashboard/cart"><MenuLink title="Cart" icon={'cart.svg'} active={dash==3 ? true : false}/></Link>
                <a onClick={() => {firebase.auth().signOut(); window.location.href="/login";}}><MenuLink title="Settings" icon={'settings.svg'} active={dash==4 ? true : false}/></a>
            </Container>
        )
    }
    else
        return(null)

    
}

export default Menu
