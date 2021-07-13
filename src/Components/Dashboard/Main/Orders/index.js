import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import {UserContext} from "../../../../Store";
import {OrderContext} from "../../../../Store";
import {DashContext} from "../../../../Store";
import dimensions from "../../../../OtherFiles/Dimensions";
import firebase from "firebase/app";
import "firebase/firestore";
import OrderItem from './OrderItem';
import axios from "axios";



//Desktop

const Container = styled.div `
    width: 90%;
    margin-left: 0%;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.1);
    margin-bottom: 50px;
    padding-left: 7%;
    padding-right: 7%;
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

const Grid01 = styled.div`
    margin-top: 10px;
    width: 100%;
`

const Text01 = styled.div`
margin-top: 10px;
width: 60%;
display: inline-block;
`

const OrderId = styled.h3 `
    width: 100%;
    font-size: 15px;
    font-weight: 500;
    text-align: left;
    font-family: "League Spartan Variable";
`

//Mobile

const MobileContainer = styled.div `
    width: 96%;
	margin: 10px auto;  
    border-radius: 10px;
    background-color: rgba(0,0,0,0.1);
    margin-bottom: 50px;
    padding-left: 4%;
    padding-top: 10px;
    padding-bottom: 70px;
`

const MobileItem = styled.div `
    margin-top: 50px;
    width: 95%;
    height: 150px;
    border-radius: 10px;
    background-color: #FFFFFF;
`


const Orders = () => {

    const db = firebase.firestore();
    
    const [dash, setDash] = useContext(DashContext);
    const [User, setUser] = useContext(UserContext);
    const [orders, setOrders] = useContext(OrderContext);
    const {width} = dimensions();
    const [start, setStart] = useState(0);
    const [orderIds, setOrderIds] = useState([]);
    const [orderQuan, setOrderQuan] = useState(-1);


    const getOrderIds = async () => {
        const k = await db.collection('Cart').doc(User.uid).collection('Orders')
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.docs.map((doc) =>
                    arr.push(doc.data().orderId)
                );
                console.log(arr);
                setOrderQuan(arr.length);
                setOrderIds(arr);;
            },[db]);
    }
    
    const getOrders = async () => {

        let OArr = [];

        const result = await Promise.all(orderIds.map(async (Id) => {
            console.log(Id);

            const res = await axios
            .post("https://izart-razorpay.herokuapp.com/get-order-item", {
                OrderId: Id
            })
            .then((t)=>
                t.data
            )            
            console.log(res.data);
            OArr.push(res.data);
        }));

        setOrders(OArr);
        setStart(3);
    }

    const DisplayOrders = () => {
        if(start == 3){
            return (orders.map((order) => <OrderItem data={order}/>))
        }
        else 
            return null;
    }

    useEffect(() => {
        setDash(2);
        if(Orders.length === 0 && orderQuan != 0){
            if(User!=0 && start==0 ){
                setStart(1);
                getOrderIds();
            }
            else if(start==1 && orderIds.length !=0){
                setStart(2);
                getOrders();
            }
        }
        else{
            setStart(3);
        }
        
    })
    if(width>1000){
        return(
            <Container>
                <OrderDet>
                    <Head>Orders</Head>
                    <SubHead>{orderQuan} orders in this month.</SubHead>
                </OrderDet>
                {DisplayOrders()}
                {/* <OrderItem/>
                <OrderItem/>
                <OrderItem/> */}
            </Container>
        )
    }
    else{
        return(
            <MobileContainer>
                <OrderDet>
                    <Head>Orders</Head>
                    <SubHead>6 orders in this month.</SubHead>
                </OrderDet>
                <MobileItem></MobileItem>
                <MobileItem></MobileItem>
                <MobileItem></MobileItem>
                <MobileItem></MobileItem>
            </MobileContainer>
        )
    }

    
}

export default Orders;