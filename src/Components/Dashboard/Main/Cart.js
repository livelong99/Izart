import React, {useContext, useEffect, useState} from "react";
import styled from 'styled-components'
import {DashContext} from "../../../Store";
import firebase from "firebase/app";
import "firebase/firestore";
import {UserContext} from "../../../Store";
import {CartContext} from "../../../Store";

const Container = styled.div `
    width: 90%;
    margin-left: 0%;
    min-width: 400px;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.1);
    margin-bottom: 50px;
    padding-left: 70px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 50px;
    vertical-align: middle;
`

// .block2:before {
//     content: "";
//     display: inline-block;
//     vertical-align: middle;
//     height: 100%;
//   }

const CartDet = styled.div `
    width: 55%;
    display: inline-block;
    vertical-align: middle;
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
    overflow:hidden;
    height: 100px;
    border-radius: 10px;
    padding-left: 20px;
    background-color: #FFFFFF;
`

const ItemIll = styled.div `
    width: 70px;
    height: 70px;
    margin: 15px;
    display: inline-block;
    background-color: #303778;
    margin-right: 30px;
    margin-left: 0px;
    border-radius: 10px;
`
const Ill = styled.img `
    width: 50px;
    position: absolute;
    margin-left: 10px;
    margin-top: 10px;
`

const ItmLabel = styled.div `
    height: 100%;
    display: inline-block;
    width: 30%;
    margin-right: 60px;
`
const ItmHead = styled.h1 `
    position: absolute;
    margin-top: 25px;
    width: auto;
    font-size: 23px;
    font-weight: 700;
    font-family: "League Spartan Variable";
`
const ItmSubHead = styled.h2 `
    position: absolute;
    margin-top: 55px;
    width: auto;
    font-size: 13px;
    font-weight: 300;
    font-family: "Sanchez";
`
const Charge = styled.div `
    display: inline-block;
    height: 100%;
    width: 20%;
`

const ChargeTxt = styled.h1 `
    font-size: 25px;
    position: absolute;
    margin-top: 35px;
    font-weight: 700;
    font-family: "League Spartan Variable";
`

const Del = styled.div `
    display: inline-block;
    height: 100%;
    padding-left: 5%;
    cursor:pointer;
`
const DelIcon = styled.img `
    position: absolute;
    height: 25px;
    margin-top: 35px;
    opacity: 0.5;
`
const Payment = styled.div `
    display: inline-block;
    width:40%;
    margin-top: 100px;
    background-color: #303778;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    vertical-align: middle;
`

const PayHead = styled.h1 `
    font-size: 30px;
    font-weight: 700;
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 2px solid #FFFFFF;
    font-family: "League Spartan Variable";
    color: #FFFFFF;
    margin-bottom: 50px;
`

const PayList = styled.div `
    width: 80%;
    margin-left: 10%;
    padding-bottom: 10px;
    border-bottom: 2px solid #FFFFFF;
`
const PayListItem = styled.div `
    width: 100%;
    margin-top: 10px;
`
const PayL1 = styled.h2 `
    font-size: 20px;
    font-weight: 500px;
    display: inline-block;
    font-family: "League Spartan Variable";
    color: #FFFFFF;
    width: 70%;
`
const PayL2 = styled.h2 `
    font-size: 20px;
    font-weight: 500px;
    display: inline-block;
    font-family: "League Spartan Variable";
    color: #FFFFFF;
    text-align: right;
    width: 30%;
`
const CheckOut = styled.div `
    width: calc(90% - 40px);
    height: 60px;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 10%;
    background-color: #FEB848;
    border-radius: 10px;
    padding-left: 30px;
    padding-right: 10px;
    cursor: pointer;
`
const CheckH1 = styled.h2 `
    font-size: 22px;
    font-weight: 500px;
    display: inline-block;
    font-family: "League Spartan Variable";
    color: #FFFFFF;
    width: 40%;
    margin-top: 15px;
    vertical-align: middle;
`

const CheckH2 = styled.h2 `
    font-size: 22px;
    font-weight: 500px;
    display: inline-block;
    margin-top: 15px;
    margin-right: 2%;
    font-family: "League Spartan Variable";
    color: #FFFFFF;
    text-align: right;
    width: 45%;
    vertical-align: middle;
`
const CheckArr = styled.h2 `
    display: inline-block;
    width: 10%;
    margin-top: 10px;
    text-align: right;
    color: #FFFFFF;
    vertical-align: middle;
`

// const Container = styled.div `
//     width: 100%;
//     min-width: 400px;
//     border-radius: 10px;
//     background-color: rgba(0,0,0,0.1);
//     margin-bottom: 50px;
//     padding-top: 10px;
//     padding-bottom: 50px;
//     vertical-align: middle;
// `

// // .block2:before {
// //     content: "";
// //     display: inline-block;
// //     vertical-align: middle;
// //     height: 100%;
// //   }

// const CartDet = styled.div `
//     width: 100%;
//     min-width: 375px;
//     display: inline-block;
//     padding-left:40px;
//     vertical-align: middle;
// `

// const Head = styled.h1 `
//     width: 100%;
//     font-size: 35px;
//     font-weight: 800;
//     text-align: left;
//     opacity: 0.8;
//     font-family: "League Spartan Variable";
// `
// const SubHead = styled.h2 `
//     width: 100%;
//     font-size: 18px;
//     font-weight: 500;
//     margin-top: -15px;
//     text-align: left;
//     opacity: 0.8;
//     font-family: "Sanchez";
// `
// const Item = styled.div `
//     margin-top: 50px;
//     width: 85%;
//     overflow:hidden;
//     height: 100px;
//     border-radius: 10px;
//     padding-left: 20px;
//     background-color: #FFFFFF;
// `

// const ItemIll = styled.div `
//     width: 70px;
//     height: 70px;
//     margin: 15px;
//     display: inline-block;
//     background-color: #303778;
//     margin-right: 30px;
//     margin-left: 0px;
//     border-radius: 10px;
// `
// const Ill = styled.img `
//     width: 50px;
//     position: absolute;
//     margin-left: 10px;
//     margin-top: 10px;
// `

// const ItmLabel = styled.div `
//     height: 100%;
//     display: inline-block;
//     width: 30%;
//     margin-right: 60px;
// `
// const ItmHead = styled.h1 `
//     position: absolute;
//     margin-top: 25px;
//     width: auto;
//     font-size: 23px;
//     font-weight: 700;
//     font-family: "League Spartan Variable";
// `
// const ItmSubHead = styled.h2 `
//     position: absolute;
//     margin-top: 55px;
//     width: auto;
//     font-size: 13px;
//     font-weight: 300;
//     font-family: "Sanchez";
// `
// const Charge = styled.div `
//     display: inline-block;
//     height: 100%;
//     width: 20%;
// `

// const ChargeTxt = styled.h1 `
//     font-size: 25px;
//     position: absolute;
//     margin-top: 35px;
//     font-weight: 700;
//     font-family: "League Spartan Variable";
// `

// const Del = styled.div `
//     display: inline-block;
//     height: 100%;
//     padding-left: 5%;
//     cursor:pointer;
// `
// const DelIcon = styled.img `
//     position: absolute;
//     height: 25px;
//     margin-top: 35px;
//     opacity: 0.5;
// `
// const Payment = styled.div `
//     display: inline-block;
//     width:40%;
//     margin-top: 100px;
//     background-color: #303778;
//     padding-left: 20px;
//     padding-right: 20px;
//     border-radius: 10px;
//     vertical-align: middle;
// `

// const PayHead = styled.h1 `
//     font-size: 30px;
//     font-weight: 700;
//     width: 100%;
//     padding-bottom: 10px;
//     border-bottom: 2px solid #FFFFFF;
//     font-family: "League Spartan Variable";
//     color: #FFFFFF;
//     margin-bottom: 50px;
// `

// const PayList = styled.div `
//     width: 80%;
//     margin-left: 10%;
//     padding-bottom: 10px;
//     border-bottom: 2px solid #FFFFFF;
// `
// const PayListItem = styled.div `
//     width: 100%;
//     margin-top: 10px;
// `
// const PayL1 = styled.h2 `
//     font-size: 20px;
//     font-weight: 500px;
//     display: inline-block;
//     font-family: "League Spartan Variable";
//     color: #FFFFFF;
//     width: 70%;
// `
// const PayL2 = styled.h2 `
//     font-size: 20px;
//     font-weight: 500px;
//     display: inline-block;
//     font-family: "League Spartan Variable";
//     color: #FFFFFF;
//     text-align: right;
//     width: 30%;
// `
// const CheckOut = styled.div `
//     width: calc(90% - 40px);
//     height: 60px;
//     margin-top: 50px;
//     margin-bottom: 50px;
//     margin-left: 10%;
//     background-color: #FEB848;
//     border-radius: 10px;
//     padding-left: 30px;
//     padding-right: 10px;
//     cursor: pointer;
// `
// const CheckH1 = styled.h2 `
//     font-size: 22px;
//     font-weight: 500px;
//     display: inline-block;
//     font-family: "League Spartan Variable";
//     color: #FFFFFF;
//     width: 40%;
//     margin-top: 15px;
//     vertical-align: middle;
// `

// const CheckH2 = styled.h2 `
//     font-size: 22px;
//     font-weight: 500px;
//     display: inline-block;
//     margin-top: 15px;
//     margin-right: 2%;
//     font-family: "League Spartan Variable";
//     color: #FFFFFF;
//     text-align: right;
//     width: 45%;
//     vertical-align: middle;
// `
// const CheckArr = styled.h2 `
//     display: inline-block;
//     width: 10%;
//     margin-top: 10px;
//     text-align: right;
//     color: #FFFFFF;
//     vertical-align: middle;
// `


const Cart = () => {
    const db = firebase.firestore();    

    const [dash, setDash] = useContext(DashContext);
    const [User, setUser] = useContext(UserContext);
    const [cart, setCart] = useContext(CartContext);
    const [cartPrice, setCartPrice] = useState(0);

    const getData = () => {
        const k = db.collection('Cart').doc(User.uid).collection('Items')
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.docs.map((doc) =>
                    arr.push({ id: doc.id, value: doc.data() })
                );
                console.log(arr);
                setCart(arr);;
            },[db]);
    };

    const deleteData = (id) => {
        db.collection('Cart').doc(User.uid).collection('Items').doc(id).delete()
        .then(() => {console.log("deleted"); getData()})
    }

    useEffect(() => {
        setDash(3);

        if(cartPrice==0){
            var price=0
            cart.forEach(ct => {
                price = price + ct.value.data.delivery.charge;
            });
            setCartPrice(price)
        }
        
        if(cart.length === 0)
            getData();
    });
    

    return(
        <Container>
            <CartDet>
                <Head>Content Cart</Head>
                <SubHead>You have 3 items in your cart</SubHead>
                {cart.map((ct) => {
                    return(
                        <Item>
                            <ItemIll><Ill src="../Images/Services/article.svg"></Ill></ItemIll>
                            <ItmLabel>
                                <ItmHead>{ct.value.data.ProjectName}</ItmHead>
                                <ItmSubHead>{ct.value.data.Product}</ItmSubHead>
                            </ItmLabel>
                            <Charge><ChargeTxt>{"₹" + ct.value.data.delivery.charge}</ChargeTxt></Charge>
                            <Del onClick={() => {deleteData(ct.id)}}><DelIcon src="../Images/del.svg" /></Del>
                        </Item>
                    )
                })}
            </CartDet>
            <Payment>
                <PayHead>Order Summary</PayHead>
                <PayList>
                    <PayListItem>
                        <PayL1>Total (Inc. of Taxes)</PayL1>
                        <PayL2>{"₹" + cartPrice}</PayL2>
                    </PayListItem>
                    {/* <PayListItem>
                        <PayL1>Discount</PayL1>
                        <PayL2>100$</PayL2>
                    </PayListItem>
                    <PayListItem>
                        <PayL1>Subtotal</PayL1>
                        <PayL2>2000$</PayL2>
                    </PayListItem> */}
                </PayList>
                <CheckOut>
                    <CheckH1>{"₹" + cartPrice}</CheckH1>
                    <CheckH2>Checkout</CheckH2>
                    <CheckArr>➜</CheckArr>
                </CheckOut>
            </Payment>
        </Container>
    )
}

export default Cart;