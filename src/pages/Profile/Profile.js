import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import ProfileLeftbar from '../../component/ProfileLeftSideContainer/ProfileLeftbar'
import ProfileRightBar from '../../component/rightSideContainer/ProfileRightBar'
import MainPost from '../../component/mainPostContainer/MainPost'

import './profile.css'

function Profile() {
  return (
    <div className='ProfileContainer'>
     <Navbar/>
     <div  className='ComponentContainer'>
    <ProfileLeftbar/>
    <MainPost/>
    <ProfileRightBar/>
    </div>

    </div>
  )
}

export default Profile