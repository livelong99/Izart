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
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`


const Main = () => {

    const [dash, setDash] = useContext(DashContext);

    return (           
            <Container>
                <Nav />
                <Switch>
                    <Route path="/add" exact component={AddItm} />
                    <Route path="/orders" exact component={Orders} />
                    <Route path="/cart" exact component={Cart} />
                </Switch>
            </Container>
    )
}

export default Main
