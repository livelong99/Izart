import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import AddItm from "./AddItem";
import Cart from "./Cart";
import Orders from "./Orders";
import {DashContext} from "../../../Store";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Container = styled.div`
    width: auto;
    margin-left: 20rem;
    position: relative;
    padding: 0 1.8rem;
`



const Main = ({sel}) => {

    const [dash, setDash] = useContext(DashContext);

    return (           
            <Container>
                <Nav />
                    {(sel == 1) ? <AddItm /> : <div />}
                    {(sel == 2) ? <Orders /> : <div />}
                    {(sel == 3) ? <Cart /> : <div />}
            </Container>
    )
}

export default Main
