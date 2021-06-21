import React, {useContext, useEffect, useState} from "react";
import styled from 'styled-components'
import {DashContext} from "../../../Store";
import firebase from "firebase/app";
import "firebase/firestore";
import {UserContext} from "../../../Store";
import {CartContext} from "../../../Store";
import dimensions from "../../../OtherFiles/Dimensions";

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
        <div className="cartContainer">
            <div className="cartDet">
                <h1 className="head">Content Cart</h1>
                <h2 className="subHead">You have {cart.length} items in your cart</h2>
                {cart.map((ct) => {
                    return(
                        <div className="Item">
                            <div className="ItemIll"><img src={"../Images/Services/"+ct.value.data.Product+".svg"}/></div>
                            <div className="ItemLabel">
                                <h1 className="ItmHead">{ct.value.data.Product.replace("_"," ")}</h1>
                                <h2 className="ItmSubHead">{ct.value.data.ProjectName}</h2>
                            </div>
                            <div className="charge"><h1>{"₹" + ct.value.data.delivery.charge}</h1></div>
                            <div className="del" onClick={() => {deleteData(ct.id)}}><img src="../Images/del.svg" /></div>
                        </div>
                    )
                })}
            </div>
            <div className="payment">
                <h1 className="payHead">Order Summary</h1>
                <div className="paylist">
                    <div className="payListItem">
                        <h2 className="desc">Total (Inc. of Taxes)</h2>
                        <h2 className="val">{"₹" + cartPrice}</h2>
                    </div>
                    {/* <PayListItem>
                        <PayL1>Discount</PayL1>
                        <PayL2>100$</PayL2>
                    </PayListItem>
                    <PayListItem>
                        <PayL1>Subtotal</PayL1>
                        <PayL2>2000$</PayL2>
                    </PayListItem> */}
                </div>
                <div className="checkOut">
                    <h2 className="val">{"₹" + cartPrice}</h2>
                    <h2 className="desc">Checkout</h2>
                    <h2 className="arrow">➜</h2>
                </div>
            </div>
        </div>
    )
}

export default Cart;