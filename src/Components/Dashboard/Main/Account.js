import React, {useContext, useEffect} from 'react'
import styled from 'styled-components'
import {DashContext} from "../../../Store";
import dimensions from "../../../OtherFiles/Dimensions";
import {UserContext} from "../../../Store";


//Desktop

const Container = styled.div `
    width: 90%;
    margin-left: 0%;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.1);
    margin-bottom: 50px;
    padding-left: 60px;
    padding-right: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
`
const Head = styled.h1 `
    width: 100%;
    font-size: 35px;
    padding-left: 20px;
    font-weight: 800;
    text-align: left;
    opacity: 0.8;
    font-family: "League Spartan Variable";
`
const ProfilePic = styled.div `
    display: inline-block;
    margin-top: 20px;
    width: 25%;
    vertical-align: top;
`
const ProfilePicImg = styled.img `
    width: 60%;
    border-radius: 50%;
    background-color: #FFFFFF;
`
const Profile = styled.div `
    display: inline-block;
    margin-top: 20px;
    width: 60%;
    padding-left:50px;
    border-radius:20px;
    background-color:#303778;
    padding-bottom:0px;
`
const ProfileHd = styled.h1 `
    font-size: 30px;
    font-weight: 700;
    width: 80%;
    margin-left:00%;
    margin-top:30px;
    padding-bottom: 10px;
    border-bottom: 2px solid #FFFFFF;
    font-family: "League Spartan Variable";
    color: #FFFFFF;
    margin-bottom: 50px;
`
const ProfileDet = styled.div `
    width: 80%;
    margin-left: 0%;
    padding-bottom: 10px;
`


const ProfileItem = styled.div `
    width: 100%;
    margin-top: 10px;
    border-bottom: 2px solid #FFFFFF;
`
const Desc = styled.h2 `
    font-size: 20px;
    font-weight: 500px;
    display: inline-block;
    font-family: "League Spartan Variable";
    color: #FFFFFF;
    width: 30%;
`
const Val = styled.h2 `
    font-size: 20px;
    font-weight: 500px;
    display: inline-block;
    font-family: "League Spartan Variable";
    color: #FFFFFF;
    text-align: right;
    width: 70%;
`
const LogOut = styled.div `
    width: 45%;
    height: 60px;
    margin: 50px;
    margin-left: 0px;
    background-color: #FEB848;
    border-radius: 10px;
    cursor: pointer;
`
const LoutH = styled.h2 `
    font-size: 22px;
    font-weight: 500px;
    display: inline-block;
    font-family: "League Spartan Variable";
    color: #FFFFFF;
    width: 100%;
    text-align:center;
    margin-top: 17px;
    vertical-align: middle;
`

//Mobile

const MobileContainer = styled.div `
    width: 96%;
	margin: 10px auto;  
    border-radius: 10px;
    background-color: rgba(0,0,0,0.1);
    margin-bottom: 50px;
    padding-top: 1px;
    padding-bottom: 20px;
`

const MobileProfilePic = styled.div `
    margin-top: 20px;
    width: auto;
`

const MobileProfilePicImg = styled.img `
    width: 30%;
    margin-left:50%;
    transform:translateX(-50%);
    border-radius: 50%;
    background-color: #FFFFFF;
`

const MobileProfile = styled.div `
    margin-top: 20px;
    width: 100%;
    padding-left:30px;
    border-radius:15px;
    padding-top:15px;
    background-color:#303778;
    padding-bottom:15px;
`
const MobileProfileHd = styled.h1 `
    font-size: 30px;
    font-weight: 700;
    width: 80%;
    margin-left:00%;
    margin-top:30px;
    padding-bottom: 10px;
    border-bottom: 2px solid #FFFFFF;
    font-family: "League Spartan Variable";
    color: #FFFFFF;
    margin-bottom: 50px;
`
const MobileProfileDet = styled.div `
    width: 80%;
    margin-left: 0%;
    padding-bottom: 10px;
`


const Account = () => {
    
    const [dash, setDash] = useContext(DashContext);
    const [User, setUser] = useContext(UserContext);
    const {width} = dimensions();

    useEffect(() => {
        setDash(4);
    })
    if(width>1000){
        return(
            <Container>
                <ProfilePic>
                    <ProfilePicImg src={User.photoURL}/>
                </ProfilePic>
                <Profile>
                    <ProfileHd>Personal Information</ProfileHd>
                    <ProfileDet>
                        <ProfileItem>
                            <Desc>Name</Desc>
                            <Val>{User.displayName}</Val>
                        </ProfileItem>
                        <ProfileItem>
                            <Desc>Email</Desc>
                            <Val>{User.email}</Val>
                        </ProfileItem>
                        <ProfileItem>
                            <Desc>Phone</Desc>
                            <Val>{User.phone}</Val>
                        </ProfileItem>
                        <ProfileItem>
                            <Desc>Provider</Desc>
                            <Val>{(User) ? User.providerData[0].providerId : null}</Val>
                        </ProfileItem>
                    </ProfileDet>
                    <LogOut><LoutH>LogOut</LoutH></LogOut>
                </Profile>
            </Container>
        )
    }
    else{
        return(
            <MobileContainer>
                <MobileProfile>
                    <ProfileHd>Personal Information</ProfileHd>
                    <ProfileDet>
                        <ProfileItem>
                            <Desc>Name</Desc>
                            <Val>{User.displayName}</Val>
                        </ProfileItem>
                        <ProfileItem>
                            <Desc>Email</Desc>
                            <Val>{User.email}</Val>
                        </ProfileItem>
                        <ProfileItem>
                            <Desc>Phone</Desc>
                            <Val>{User.phone}</Val>
                        </ProfileItem>
                        <ProfileItem>
                            <Desc>Provider</Desc>
                            <Val>{(User) ? User.providerData[0].providerId : null}</Val>
                        </ProfileItem>
                    </ProfileDet>
                    <LogOut><LoutH>LogOut</LoutH></LogOut>
                </MobileProfile>
            </MobileContainer>
        )
    }

    
}

export default Account;