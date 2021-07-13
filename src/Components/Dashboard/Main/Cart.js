import React, {useContext, useEffect, useState, useRef} from "react";
import styled from 'styled-components'
import {DashContext} from "../../../Store";
import firebase from "firebase/app";
import "firebase/firestore";
import {UserContext} from "../../../Store";
import {CartContext} from "../../../Store";
import dimensions from "../../../OtherFiles/Dimensions";
import axios from "axios";
var ID = require("nodejs-unique-numeric-id-generator")


const Cart = () => {
    const db = firebase.firestore();

    const LoadRef = useRef(null);
    const bgLoadRef = useRef(null);
    const [dash, setDash] = useContext(DashContext);
    const [User, setUser] = useContext(UserContext);
    const [cart, setCart] = useContext(CartContext);
    const [cartPrice, setCartPrice] = useState(0);
    const [paymentDetails, setPayment] = useState(null);
    const [paymentLoading, setPayLoading] = useState(0);
    const [load, setLoad] = useState(0);

    const getData = () => {
        const k = db.collection('Cart').doc(User.uid).collection('Items')
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.docs.map((doc) =>
                    arr.push({ id: doc.id, value: doc.data() })
                );
                setCart(arr);
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

        if(cart.length === 0){
            if(paymentLoading === 1){
                document.getElementById("OrderProcessfront").style.width = "100%"; 
                window.location.href="/dashboard";
            }
            else{
                getData();
            }
        }

        // if(paymentLoading === 1 && load < 100){
        //     setLoad(load + (100/((cart.length * 4) + 4)))
        // }
    });
    function loadScript(src){
      return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
     		script.onload = () => {
          console.log("No Errrrrrror")
     			resolve(true)
     		}
     		script.onerror = () => {
          console.log("Errrrrrror")
     			resolve(false)
     		}
     		document.body.appendChild(script)
    })

    }
    async function displayRazorPay(){
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        if(res){
          console.log("script running")
        }
        
        const razorpaydata = await axios
        .post("https://izart-razorpay.herokuapp.com/razorpay", {
            amount: (cartPrice/1000)
        })
        .then((t)=>
        t.data
      )

      console.log(razorpaydata)

        const options = {
        key: "rzp_live_uBw1YTqvj3SyYa", // Enter the Key ID generated from the Dashboard
        amount: razorpaydata.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: razorpaydata.currency,
        name: "Acme Corp",
        description: User.uid,
        image: "https://example.com/your_logo",
        order_id: razorpaydata.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: Razorpay_Response_Handler,
        prefill: {
            name: User.displayName,
            email: User.email
        },
        theme: {
          color: "#3399cc"
      }
  }
  console.log("reached here")
  const rzp = new window.Razorpay(options);
  
  rzp.open();
}

const  Razorpay_Response_Handler = async (response) => {

    setPayLoading(1);

    const payment = {
        paymentID: response.razorpay_payment_id,
        razorpay_orderID: response.razorpay_order_id,
        paymentSignature: response.razorpay_signature
    }

    var loadStep = (document.getElementById("OrderProcessback").style.width)*(1/((cart.length * 4) + 1));

    
    document.getElementById("OrderProcessfront").style.width = "0%";

    console.log(response.razorpay_payment_id);
    console.log(response.razorpay_order_id);
    console.log(response.razorpay_signature);
    console.log(payment);

    
    document.getElementById("OrderProcessfront").style.width = "50%";

    console.log("Started Fullfillment of the Order");

    console.log("Check for Fulfill");
    await ParseCart(payment, loadStep);
    //.then(() => {});    
    
    



    

    // db.collection('Fulfill').doc(User.uid).get()
    // .then((doc) => {
    //     if(doc.exists){
    //         console.log("Check for Fulfill");
    //         ParseCart(User.uid);
    //     }
    //     else{
    //         console.log("Fulfill entry not found");
    //     }
            
    // })
    
    
}

const AddToOrders = async (data, payment, loadStep) => {
    const checkOrderId = await axios
        .post("https://izart-razorpay.herokuapp.com/check-order-id")
        .then((t)=>
            t.data
      )
    var orderId = "123456"

    if(checkOrderId.status == 'ok'){
        //document.getElementById("OrderProcessfront").style.width = "20%";
        orderId = checkOrderId.orderId;
        console.log("OrderId Assigned : " + orderId);
        //console.log(payment);

        var date = new Date();

        var dDate = new Date(date);
        dDate.setDate(dDate.getDate() + parseInt(data.value.data.delivery.days));

        var delivery = {
            orderDate: date,
            deliveryDays: data.value.data.delivery.days,
            deliveryDate: dDate
        }

        const AddToOrders = await axios
        .post("https://izart-razorpay.herokuapp.com/add-order-to-firebase", {
            orderId: orderId,
            paymentDet: payment,
            orderDet: data.value,
            delivery: delivery
        })
        .then((t)=>
            t.data
        )
        if(AddToOrders.status == 'ok'){
            //document.getElementById("OrderProcessfront").style.width = "40%";
            console.log("Order Added to Orders Collection : " + orderId);
            
            const ConnectWithCart = await axios
            .post("https://izart-razorpay.herokuapp.com/connect-cart-with-orders", {
                orderId: orderId,
                UserId: User.uid,
                timeStamp: new Date()
            })
            .then((t)=>
                t.data
            )

            if(ConnectWithCart.status == 'ok'){
                //document.getElementById("OrderProcessfront").style.width = "60%";
                console.log("Order Added to User Cart with Order ID : " + orderId);

                const DeleteFromCart = await axios
                .post("https://izart-razorpay.herokuapp.com/delete-from-cart", {
                    ItemId: data.id,
                    UserId: User.uid
                })
                .then((t)=>
                    t.data
                )

                if(DeleteFromCart.status == 'ok'){
                   // document.getElementById("OrderProcessfront").style.width = "80%";
                    console.log("Item Deleted from Cart : " + orderId);
                }

            }
        }
        
    }
    getData();
  }

const ParseCart = async (payment, loadStep) => {

    const deleteFulFill = await axios
        .post("https://izart-razorpay.herokuapp.com/delete-fulfill", {
            UserId: User.uid
        })
        .then((t)=>
        t.data
      )

    if(deleteFulFill.status == 'ok'){
        console.log("Deleted fulfill");
    }
    

    var result = await cart.map(async (item) => {var result = await AddToOrders(item, payment, loadStep)})

    document.getElementById("OrderProcessfront").style.width = "75%"; 
    // window.location.href="/dashboard";    
    
};

// const sendOrderConfirmationMail = async () => {
//     const deleteFulFill = await axios
//         .post("https://izart-razorpay.herokuapp.com/send-orderConfirmation-mail")
//         .then((t)=>
//         t.data
//       )

//     console.log("MailSent");

    
// }


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
                <div className="checkOut" onClick={() => {displayRazorPay()}}>
                    <h2 className="val">{"₹" + cartPrice}</h2>
                    <h2 className="desc">Checkout</h2>
                    <h2 className="arrow" >➜</h2>
                </div>
            </div>
            <div style={{display: (paymentLoading) ? "block" : "none"}} class="AfterPaymentLoad">
            <div class="AfterPaymentText">Processing Payment......</div>
            <div id="OrderProcessback" class="OrderProcessback"><div id="OrderProcessfront" class="OrderProcessfront"/></div>
            </div>
        </div>
    )
}

export default Cart;
