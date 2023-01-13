import React, { useState,useEffect } from "react";
import Image from "../images/friendprofile.jpg";
import ProfilePic from "../images/profilePic.jpg";
import FriendProfile from "../images/friendprofile.jpg";

import "./profileleftbar.css";
import axios from "axios";
import { useSelector } from "react-redux";

function ProfileLeftbar() {
 
  //using state from store get user details
  const userDetails = useSelector((state)=>state.user)
  const user=userDetails.user;
   let id = user.data.userId;
   const username = user.data.username;
   const profileimage=user.data.profile;

  
  //state to get value of user currently using account
  //get user from loged in and send data to profile tab
  const [followinguser,setFollowinguser]=useState([])
  const [User,setUser]=useState([])
 

  useEffect(()=>{
     const getUser = async()=>{
      try {
        const response = await axios.get(`http://localhost:5000/api/user/followingusers/${id}`);
        setFollowinguser(response.data);
        
      } catch (error) {
        console.log(error)
      }
     }
     getUser()
  },[])
 console.log(followinguser)
  //to get data of currnt logged in user
  
  useEffect(()=>{
    const getUser = async()=>{
     try {
       const response = await axios.get(`http://localhost:5000/api/user/userdetails/${id}`);
       setUser(response.data);
       
     } catch (error) {
       console.log(error)
     }
    }
    getUser()
 },[])

  return (
    <div className="ProfileLeftbar">
      {/* Left User Profile tab */}
      {/* --------------------------------- */}
      <div className="ProfileLeftContainer">
        <img src={`${Image}`} className="CoverImage" alt></img>
        <div
          style={{
            textAlign: "left",
            marginLeft: 15,
            marginTop: -10,
            display: "flex",
          }}
        >
          <img
            src={profileimage}
            className="ProfileContainerProfilePic"
            alt=""
          ></img>
          <div>
            <p
              style={{
                fontWeight: "bold",
                marginLeft: 9,
                marginTop: 9,
                fontSize: 20,
              }}
            >
             {username}
            </p>
            <p
              style={{
                marginLeft: 9,
                marginTop: -23,
                fontSize: 12,
                color: "#aaa",
              }}
            >
              Software developer
            </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ marginLeft: 15, marginTop: 9, fontSize: 16 }}>
            Followers
          </p>
          <p
            style={{
              marginTop: 15,
              fontSize: 14,
              marginRight: 20,
              color: "black",
            }}
          >
           {User.followers && User.followers.length}
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ marginLeft: 15, marginTop: 9, fontSize: 16 }}>
            Following
          </p>
          <p
            style={{
              marginTop: 15,
              fontSize: 14,
              marginRight: 20,
              color: "black",
            }}
          >
          {User.followers && User.followers.length}
          </p>
        </div>
        <div style={{}}>
          <p
            style={{
              textAlign:"start",
              marginTop: 0,
              fontSize: 17,
              fontWeight: "bold",
              marginBottom:0,
              marginLeft:10
            }}
          >
            Bio
          </p>
          <p
            style={{ marginTop:10, fontSize: 14, color: "black" }}
          >
            software developer who never lacks hunger for growth
          </p>
          <button
            style={{
              border: "none",
              padding: 10,
              backgroundColor: "green",
              color: "white",
              fontSize: 15,
              width: "100%",
            }}
          >
            Edit Bio
          </button>
        </div>
      </div>

      {/* Left profile ->following*/}
      {/* -------------------------------------------- */}

      <div className="YourFriendscontainer">
        <h4 style={{ marginTop: "2px" }}>following</h4>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ marginLeft: 18, marginTop: -12 }}>Friends</p>
          <p style={{ marginRight: 18, marginTop: -12, color: "#aaa" }}>
            See all
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
        {followinguser.map((data)=>(
          <div style={{cursor:'pointer'}} key={data._id}>
          <img src={data.profile} className="FriendProfilePic" alt="" />
          <p className="FriendsName">{data.username}</p>
        </div>
        ))}
          

        </div>
      </div>
    </div>
  );
}

export default ProfileLeftbar;
