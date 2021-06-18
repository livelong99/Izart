import React from 'react'
import styled from 'styled-components'
import Menu from './Menu/Menu'
import Profile from './Profile'
// import ToggleSwitch from './ToggleSwitch'
import dimension from "../../../OtherFiles/Dimensions"

const Container = styled.div`
    background-color: #303778;
    z-index: 10;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;


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
    else
        return(null)

}

export default Sidebar
