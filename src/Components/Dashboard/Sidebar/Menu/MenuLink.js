import React,{useState} from 'react'
import styled from 'styled-components'
import dimension from "../../../../OtherFiles/Dimensions"

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
const LastContainer = styled.div`
    width: 100%;
    padding-top:10%;
    padding-bottom:10%;
    border-radius: 0px;
    cursor: pointer;
    align-items: center;
    margin-top: 5.5rem;
    margin-bottom: 1.5rem;
    transition: 0.3s all ease-in-out;
`

//Mobile

const MobileContainer = styled.div`
    background-color: ${props => props.active ? "rgba(225,225,225,0.95)" : "rgba(51,67,224,0)"};
    height:100%;
    width:7vh;
    max-width:50px;
    border-radius: 5px 5px 5px 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    transition: 0.3s all ease-in-out;

    &:hover {
        background-color: ${props => props.active ? "rgba(225,225,225,0.95)" : "rgba(0,0,0,0.1)"};
    }
`

const MobileSpan = styled.img`
    height: 80%;
    margin: 7px auto;
    transform: translateX(-50%);
    margin-left: 50%;
    color: #000000;
`


const MenuLink = ({ title, active, icon, last}) => {

    const {width} = dimension();
    const [log, setLog] = useState(0);

    

    if(width>1000){
        if(last == 0){
            return (
                <Container active={active}>
                    <Span active={active} src={"../Images/" + icon + ((active) ? "_active.svg" : ".svg")}></Span>
                    {/* <Title active={active}>{title}</Title> */}
                </Container>
            )
        }
        else{
            return (
                <LastContainer>
                    <Span onMouseEnter={() => {setLog(1)}} onMouseLeave={() => {setLog(0)}} src={"../Images/" + icon + ((log) ? "_hover.svg" : ".svg")}></Span>
                    {/* <Title active={active}>{title}</Title> */}
                </LastContainer>
            )
        }
    }
    else
    return (
        <MobileContainer active={active}>
            <MobileSpan  active={active} src={"../Images/" + icon + ((active) ? "_active.svg" : ".svg")}></MobileSpan>
            {/* <Title active={active}>{title}</Title> */}
        </MobileContainer>
    )
}

export default MenuLink
