import React,{useState, useContext} from 'react'
import styled from 'styled-components'
import dimension from "../../../../OtherFiles/Dimensions"
import {ExpandContext} from "../../../../Store";

//Desktop

const Container = styled.div`
    // border-right: ${props => props.active ? "25px solid rgba(51,67,224,1)" : "none"};
    width: 100%;
    padding-top:10%;
    padding-bottom:10%;
    background-color: ${props => props.active ? "rgba(255,255,255,0.9)" : "rgba(51,67,224,0)"};
    border-radius: 0px;
    cursor: pointer;
    align-items: center;
    margin-bottom: 1.5rem;
    transition: 0.3s all ease-in-out;

    &:hover {
        background-color: ${props => props.active ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.1)"};
    }
`


const Span = styled.img`
    width:45%;
    margin-left:50%;
    transform: translateX(-50%);
`

const SpanExp = styled.img`
    width:20%;
    display: inline-block;
    margin-left:10%;
    margin-right: 15%;
    // transform: translateX(-50%);
    vertical-align: middle;
`
const Text = styled.p`
    width: 50%;
    display: inline-block;
    position: relative;
    text-align: Left;
    font-size: 25px;
    font-weight: ${props => props.active ? "650" : "500"};
    margin-top: 5px;
    margin-bottom: 5px;
    font-family: "League Spartan Variable";
    color: ${props => props.active ? "#303778" : "#FFFFFF"};
`



const LastContainer = styled.div`
    position : absolute;
    width: 100%;
    padding-top:10%;
    padding-bottom:10%;
    border-radius: 0px;
    cursor: pointer;
    align-items: center;
    bottom: 3%;
    transition: 0.3s all ease-in-out;
`

//Mobile

const MobileContainer = styled.div`
    background-color: ${props => props.active ? "rgba(225,225,225,0.95)" : "rgba(51,67,224,0)"};
    height:80%;
    width:100%;
    max-width:100px;
    border-radius: 5px 5px 5px 5px;
    cursor: pointer;
    align-items: center;
    padding: 0px 15px;
    transition: 0.3s all ease-in-out;

    &:hover {
        background-color: ${props => props.active ? "rgba(225,225,225,0.95)" : "rgba(0,0,0,0.1)"};
    }
`

const MobileSpan = styled.img`
    height: 80%;
    transform: translate(-50%, 10%);
    margin-left: 50%;
    color: #000000;
`
const Mobiletext = styled.p`
    width: 100%;
    position: relative;
    text-align: center;
    transform: translateY(15%);
    font-family: "League Spartan Variable";
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    color: white;
`


const MenuLink = ({ title, active, icon, last}) => {

    const {width} = dimension();
    const [log, setLog] = useState(0);
    const [expand, setExpand] = useContext(ExpandContext);   

    

    if(width>1000){
        if(last == 0){
            return (
                <Container active={active}>
                    {(expand) ? <><SpanExp active={active} src={"../Images/" + icon + ((active) ? "_active.svg" : ".svg")}></SpanExp><Text active={active}>{title}</Text></> : <Span active={active} src={"../Images/" + icon + ((active) ? "_active.svg" : ".svg")}></Span>}
                    {/* <Title active={active}>{title}</Title> */}
                    
                </Container>
            )
        }
        else{
            return (
                <LastContainer>
                    {/* <Span onMouseEnter={() => {setLog(1)}} onMouseLeave={() => {setLog(0)}} src={"../Images/" + icon + ((log) ? "_hover.svg" : ".svg")}></Span> */}
                    {/* <Title active={active}>{title}</Title> */}
                    {(expand) ? <><SpanExp active={active} src={"../Images/" + icon + ((active) ? "_active.svg" : ".svg")}></SpanExp><Text active={active}>{title}</Text></> : <Span active={active} src={"../Images/" + icon + ((active) ? "_active.svg" : ".svg")}></Span>}
                    </LastContainer>
            )
        }
    }
    else
    return (
        <MobileContainer active={active}>
            <MobileSpan  active={active} src={"../Images/" + icon + ((active) ? "_active.svg" : ".svg")}></MobileSpan>
            {(!active) ? <Mobiletext>{title}</Mobiletext> : <Mobiletext>{title}</Mobiletext>}
            
            {/* <Title active={active}>{title}</Title> */}
        </MobileContainer>
    )
}

export default MenuLink
