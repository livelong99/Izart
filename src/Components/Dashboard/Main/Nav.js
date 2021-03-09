import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1.5rem;
`

const ProfileImg = styled.img`
    height: 3rem;
    margin: 0 1rem;
    cursor: pointer;
    border-radius: 100%;
`

const MessageIcon = styled.img`
    cursor: pointer;
    height: 2rem;
    margin-right: 30px; 
`
const Nav = () => {
    return (
        <Container>
            <MessageIcon src="Images/not.svg"></MessageIcon>
            <ProfileImg src="Images/portrait.jpg" />
        </Container>
    )
}

export default Nav