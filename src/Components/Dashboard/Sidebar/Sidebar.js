import React from 'react'
import styled from 'styled-components'
import Menu from './Menu/Menu'
import Profile from './Profile'
// import ToggleSwitch from './ToggleSwitch'
import dimension from "../../../OtherFiles/Dimensions"


//Desktop

const Container = styled.div`
    background-color: #303778;
    z-index: 10;
    position: fixed;
    left: 2%;
    top: 4%;
    bottom: 4%;
    border-radius:10px;
    width: 6.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

//Mobile

const MobileContainer = styled.div`
    background-color: #303778;
    z-index: 100;
    position: fixed;
    height: 80px;
    bottom: 5px;
    left: 2%;
    width: 96%;
    display: block;
    flex-direction: row;
    align-items: center;
    box-shadow: 0px -5px 70px 10px rgba(0,0,0,0.6);
    border-radius: 10px;
`

const Sidebar = () => {


    
    const {width} = dimension();

    if(width>1000){
        return (
            <Container>
            <Profile />
            <Menu />
            {/* <ToggleSwitch /> */}
        </Container>
        )
    }
    else{
        return(
            <MobileContainer>
                <Menu />
            </MobileContainer>
        )
    }
        

}

export default Sidebar
