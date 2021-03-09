import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'
import {DashContext} from "../../../Store";

const Container = styled.div `
    width: 90%;
    margin-left: 0%;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.1);
    margin-bottom: 50px;
    padding-left: 70px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 50px;
`
const OrderDet = styled.div `
    width: 100%;
`

const Head = styled.h1 `
    width: 100%;
    font-size: 35px;
    font-weight: 800;
    text-align: left;
    opacity: 0.8;
    font-family: "League Spartan Variable";
`
const SubHead = styled.h2 `
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    margin-top: -15px;
    text-align: left;
    opacity: 0.8;
    font-family: "Sanchez";
`
const Item = styled.div `
    margin-top: 50px;
    width: 85%;
    height: 200px;
    border-radius: 10px;
    padding-left: 20px;
    background-color: #FFFFFF;
`

const Orders = () => {
    
    const [dash, setDash] = useContext(DashContext);

    useEffect(() => {
        setDash(2);
    })

    return(
        <Container>
            <OrderDet>
                <Head>Orders</Head>
                <SubHead>6 orders in this month.</SubHead>
            </OrderDet>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
        </Container>
    )
}

export default Orders;