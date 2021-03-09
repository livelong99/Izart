import React, {useContext} from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'
import {DashContext} from "../../../../Store";
import {
    Link
  } from "react-router-dom";


const Container = styled.div`
    margin-top: 0.5rem;
    width: 100%;
`

const Add = styled.div`
    width: 70%;
    border-right: ${props => props.active ? "90px solid rgba(255,255,255,1)" : "none"};
    border-radius: 50px;
    margin-left: 15%;
    background-color: #FFFFFF;
    color: #000000;
    margin-bottom: 50px;
    cursor: pointer;
    transition: 0.3s all ease-in-out;

    &:hover {
        background-color: ${props => props.active ? "#FFFFFF" : "rgba(0,0,0,0.3)"};
        color: ${props => props.active ? "#000000" : "#FFFFF"};
    }
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

    return (
        <Container>
            <Link to="/add"><Add active={dash==1 ? true : false}>
                <AddTxt>Add Item</AddTxt>
            </Add></Link>
            <Link to="/orders"><MenuLink title="Orders" icon={'orders.svg'} active={dash==2 ? true : false}/></Link>
            <Link to="/cart"><MenuLink title="Cart" icon={'cart.svg'} active={dash==3 ? true : false}/></Link>
            <MenuLink title="Settings" icon={'settings.svg'} active={dash==4 ? true : false}/>
        </Container>
    )
}

export default Menu
