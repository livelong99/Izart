import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import {DashContext} from "../../../../Store";
import dimensions from "../../../../OtherFiles/Dimensions";
import moment from "moment";


const Container = styled.div `
    margin-top: 50px;
    width: 100%;
    height: 100px;
    border-radius: 10px;
    padding-left:3%;
    background-color: #FFFFFF;
`

const Illus = styled.div`
    width: 70px;
    height: 70px;
    margin: 15px;
    display: inline-block;
    background-color: #303778;
    margin-right: 30px;
    margin-left: 0px;
    border-radius: 10px;
    vertical-align: middle;
`

const IllusImg = styled.img`
    width: 50px;
    position: absolute;
    margin-left: 10px;
    margin-top: 10px;
`

const ItemLabel = styled.div`
    height: 100%;
    display: inline-block;
    width: 20%;
    margin-right: 60px;
    vertical-align: middle;
`

const ItmHead = styled.h1`
    position: absolute;
    margin-top: 25px;
    width: auto;
    font-size: 23px;
    font-weight: 700;
    font-family: "League Spartan Variable";
`

const ItmSubHead = styled.h2`
    position: absolute;
    margin-top: 55px;
    width: auto;
    font-size: 13px;
    font-weight: 300;
    font-family: "Sanchez";
`

const Progress = styled.div`
    height: 9%;
    display: inline-block;
    width: 20%;
    border-radius: 10px;
    background-color: #E5E5E5;
    vertical-align: middle;
    margin-right: 60px;
`

const Progressbar = styled.div`
    height: 100%;
    width: ${props => props.progress  + "%"};
    border-radius: 10px;
    background-color: #303778;
    margin-right: 60px;
`

const Delivery = styled.h1`
    display: inline-block;
    width: 15%;
    border-radius: 10px;
    vertical-align: middle;
    margin-right: 30px;
    font-size: 20px;
    font-weight: 500;
    font-family: "League Spartan Variable";
`

const ViewOrder = styled.div`
    height: 50%;
    display: inline-block;
    width: 15%;
    border-radius: 10px;
    background-color: #303778;
    vertical-align: middle;
`

const ViewOrderText = styled.h2`
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    font-family: "League Spartan Variable";
    border-radius: 10px;
    background-color: #303778;
    color:#FFFFFF;
    text-align: center;
    vertical-align: middle;
`




const OrderItem = ({data}) => {
    
    const [dash, setDash] = useContext(DashContext);
    const {width} = dimensions();  
    const [prog, setProg] = useState(null);

    //const deliveryDate = new Date(data.deliveryData.deliveryDate);

    var deliveryDate = moment(data.deliveryData.deliveryDate).format('Do MMMM, YYYY');

    useEffect(() => {
        if(prog == null){
            var date = new Date().getTime();
            var oDate = new Date(data.deliveryData.orderDate).getTime();
            var dDate = new Date(data.deliveryData.deliveryDate).getTime();
            var progF = (date - oDate)/(dDate-oDate);

            setProg((progF*100)+10);
            console.log(progF);
        }
    })


    if(width>1000){
        return(
            <Container>
                <Illus><IllusImg src={"../Images/Services/social.svg"} /></Illus>
                <ItemLabel>
                    <ItmHead>{data.orderDetails.data.Product}</ItmHead>
                    <ItmSubHead>{data.orderDetails.data.ProjectName}</ItmSubHead>
                </ItemLabel>
                <Progress><Progressbar progress={prog} /></Progress>
                <Delivery>{deliveryDate}</Delivery>
                <ViewOrder><ViewOrderText>View Order</ViewOrderText></ViewOrder>
            </Container>
        )
    }
    // else{
    //     return(
    //         <MobileContainer>
    //             <OrderDet>
    //                 <Head>Orders</Head>
    //                 <SubHead>6 orders in this month.</SubHead>
    //             </OrderDet>
    //             <MobileItem></MobileItem>
    //             <MobileItem></MobileItem>
    //             <MobileItem></MobileItem>
    //             <MobileItem></MobileItem>
    //         </MobileContainer>
    //     )
    // }

    
}

export default OrderItem;