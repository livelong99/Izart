import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import AddItm from "./AddItem";
import Cart from "./Cart";
import Orders from "./Orders";
import Account from "./Account";
import {DashContext} from "../../../Store";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



const Main = ({sel}) => {

    const [dash, setDash] = useContext(DashContext);

    return (           
            <div className="mainContainer">
                <Nav />
                    {(sel == 1) ? <AddItm /> : <div />}
                    {(sel == 2) ? <Orders /> : <div />}
                    {(sel == 3) ? <Cart /> : <div />}
                    {(sel == 4) ? <Account /> : <div />}
            </div>
    )
}

export default Main
