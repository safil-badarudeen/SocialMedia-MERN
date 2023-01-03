import React from 'react'
import './Navbar.css'
import search from '../images/search.png';
import Notification from '../images/notificationIcon.png'
import ProfilePic from '../images/profilePic.jpg'
import Message from '../images/Message.png'


const Navbar = () => {
  return (
    <div className="MainNavbar">
        <div className="LogoContainer">
                 <p>Social</p>
        </div>
        <div>
           <div className="SearchInputContainer">
              <img src={`${search}`} className="SearchIcon" alt=""></img>
              <input type="text" className="SearchInput" placeholder="search your friends" name="" id=""></input>
           </div>

        </div>
        <div className="IconsContainer">
             <img src={`${Notification}`} className="IconsNav" alt="" ></img>
             <img src={`${Message}`} className="IconsNav"  alt=''></img>
              <div style={{display:'flex' , alignItems:'center'}} >
                  <img src={`${ProfilePic}`} className="ProfileImage"  alt=""></img>
                   <p style={{marginLeft:'10px'}}>Safil</p>
              </div>
        </div>
    </div>
  )
}

export default Navbar