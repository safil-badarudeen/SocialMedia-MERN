import React from "react";

import frndImage from "../../component/images/friendImage.jpg";

import "./profilerightbar.css";

function ProfileRightBar() {
  return (
    <div className='ProfileRightBar'>
    <div className="HabitiansRequestContainer">
      <p style={{ fontWeight: "bold" }}>Habitians Request</p>
      <div style={{ marginTop:15}}>
        <div style={{ display: "flex" ,marginTop:1}}>
          <img
            src={`${frndImage}`}
            className="RequestTapProfilePic"
            alt=""
          ></img>
          <p
            style={{
              textAlign: "start",
              marginLeft: "10px",
              marginRight: 20,
            }}
          >
            mubu want to make you a peer
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button className="AcceptDenyButton">Accept</button>
          <button className="AcceptDenyButton">Deny</button>
        </div>
      </div>
      {/* ------------------------------ */}
      <div style={{ marginTop:15}}>
        <div style={{ display: "flex" }}>
          <img
            src={`${frndImage}`}
            className="RequestTapProfilePic"
            alt=""
          ></img>
          <p
            style={{
              textAlign: "start",
              marginLeft: "10px",
              marginRight: 20,
            }}
          >
            mubu want to make you a peer
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button className="AcceptDenyButton">Accept</button>
          <button className="AcceptDenyButton">Deny</button>
        </div>
      </div >

      {/* ------------------------------------- */}
      <div style={{ marginTop:15}}>
        <div style={{ display: "flex" }}>
          <img
            src={`${frndImage}`}
            className="RequestTapProfilePic"
            alt=""
          ></img>
          <p
            style={{
              textAlign: "start",
              marginLeft: "10px",
              marginRight: 20,
            }}
          >
            mubu want to make you a peer
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button className="AcceptDenyButton">Accept</button>
          <button className="AcceptDenyButton">Deny</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProfileRightBar;
