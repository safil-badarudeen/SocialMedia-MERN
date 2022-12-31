import React from 'react'
import Navbar from '../../component/Navbar/Navbar'
import LeftBar from '../../component/leftSideContainer/Leftbar'
import "./Home.css"
import RightBar from '../../component/rightSideContainer/RightBar'
import MainPost from '../../component/mainPostContainer/MainPost'


const Home = () => {
  return (
    
    <div className='Home'>
      <Navbar/>
      <div className='ComponentContainer'>
        <div><LeftBar/></div>
        <div><MainPost/></div>
        <div className='Rightbar'><RightBar/></div>
      </div>
     
    </div>
    
    
    
  )
}

export default Home