import React from 'react'
import  './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from "./HeaderOption.js";
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
import ChatIcon from "@material-ui/icons/Chat"
import NotificationIcon from "@material-ui/icons/Notifications"


function Header() {
    return (
        <div className="header">
           <div className="header__left">
            <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG24.png" alt=""/>
            <div className="header__search">
                <SearchIcon/>
                <input type="text"/>
            </div>
           </div>
           <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Chat"/>
                <HeaderOption Icon={NotificationIcon} title="Notifications"/>
                <HeaderOption avatar="https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png" title="Me"/>
           </div>
           
           
           
        </div>
    )
}

export default Header
