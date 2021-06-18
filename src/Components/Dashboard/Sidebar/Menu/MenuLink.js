import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
    border-right: ${props => props.active ? "25px solid rgba(51,67,224,1)" : "none"};
    width: 100%;
    background-color: ${props => props.active ? "rgba(51,67,224,0.8)" : "rgba(51,67,224,0)"};
    border-radius: 0px 5px 5px 0px;
    padding: 0rem;
    padding-left: 0rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 2rem;
    transition: 0.3s all ease-in-out;

    &:hover {
        background-color: ${props => props.active ? "rgba(51,67,224,0.8)" : "rgba(0,0,0,0.1)"};
    }
`


const Span = styled.img`
    font-size: 100px;
    height: 25px;
    width: 25px;
    position: absolute;
    left: 20%;
`

const Title = styled.h1`
    font-size: 25px;
    font-weight: 600;
    padding-left: 45%;
    font-family: "League Spartan Variable";
    text-align: left;
    color: ${props => props.active ? "#FFFFFF" : "#FFFFFF"};
`

const MenuLink = ({ title, active, icon }) => {

    return (
        <Container active={active}>
            <Span active={active} src={"../Images/" + icon}></Span>
            <Title active={active}>{title}</Title>
        </Container>
    )
}

export default MenuLink
