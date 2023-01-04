import React from "react";
import Image from "../images/friendprofile.jpg";
import ProfilePic from "../images/profilePic.jpg";

import "./profileleftbar.css";

function ProfileLeftbar() {
  return (
    <div className="ProfileLeftbar">
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
              marginLeft: 15,
              marginTop: 0,
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Bio
          </p>
          <p
            style={{ marginTop:-18, fontSize: 14, margin: 20, color: "black" }}
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
              width:'100%'
            }}
          >
            Edit Bio
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileLeftbar;
