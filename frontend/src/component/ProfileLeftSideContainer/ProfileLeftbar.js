import React from "react";
import Image from "../images/friendprofile.jpg";
import ProfilePic from "../images/profilePic.jpg";
import FriendProfile from "../images/friendprofile.jpg";

import "./profileleftbar.css";

function ProfileLeftbar() {
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
            src={`${ProfilePic}`}
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
              Safil
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
            Profile Views
          </p>
          <p
            style={{
              marginTop: 15,
              fontSize: 14,
              marginRight: 20,
              color: "black",
            }}
          >
            8599
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ marginLeft: 15, marginTop: 9, fontSize: 16 }}>
            Profile Views
          </p>
          <p
            style={{
              marginTop: 15,
              fontSize: 14,
              marginRight: 20,
              color: "black",
            }}
          >
            8599
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

      {/* Left profile -> your friends */}
      {/* -------------------------------------------- */}

      <div className="YourFriendscontainer">
        <h4 style={{ marginTop: "2px" }}>Your Friends</h4>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ marginLeft: 18, marginTop: -12 }}>Friends</p>
          <p style={{ marginRight: 18, marginTop: -12, color: "#aaa" }}>
            See all
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div>
            <img src={`${FriendProfile}`} className="FriendProfilePic" alt="" />
            <p className="FriendsName">name</p>
          </div>
          <div>
            <img src={`${FriendProfile}`} className="FriendProfilePic" alt="" />
            <p className="FriendsName">name</p>
          </div>
          <div>
            <img src={`${FriendProfile}`} className="FriendProfilePic" alt="" />
            <p className="FriendsName">name</p>
          </div>
          <div>
            <img src={`${FriendProfile}`} className="FriendProfilePic" alt="" />
            <p className="FriendsName">name</p>
          </div>
          <div>
            <img src={`${FriendProfile}`} className="FriendProfilePic" alt="" />
            <p className="FriendsName">name</p>
          </div>
          <div>
            <img src={`${FriendProfile}`} className="FriendProfilePic" alt="" />
            <p className="FriendsName">name</p>
          </div>
          <div>
            <img src={`${FriendProfile}`} className="FriendProfilePic" alt="" />
            <p className="FriendsName">name</p>
          </div>
          <div>
            <img src={`${FriendProfile}`} className="FriendProfilePic" alt="" />
            <p className="FriendsName">name</p>
          </div>
          <div>
            <img src={`${FriendProfile}`} className="FriendProfilePic" alt="" />
            <p className="FriendsName">name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileLeftbar;