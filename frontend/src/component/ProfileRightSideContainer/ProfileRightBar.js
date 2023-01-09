import React from "react";
import addFrnd from '../../component/images/addFriend.png'

import frndImage from "../../component/images/friendImage.jpg";

import "./profilerightbar.css";

function ProfileRightBar() {
  return (
    <div className='ProfileRightBar'>
    <div className="HabitiansRequestContainer">
      <p style={{ fontWeight: "bold" }}>Followers</p>
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
            mubu
          </p>
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
            mubu
          </p>
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
            mubu 
          </p>
        </div>
       
      </div>
    </div>
     

     {/* profile Right side bottom container
     ------------------------------- */}

<div className="RightContainer2">
        <h3 style={{textAlign:'start', marginLeft:'20px'}}>Suggested for you</h3>
        <div style={{ marginTop:'10px '}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${frndImage}`} className="ProfileImage" alt="" />
              <div>
              <p style={{ marginLeft: "20px" }}>Sanam</p>
              <p style={{marginLeft:'20px',textAlign:'start',marginTop:'-17px',fontSize:'13px',color:'#aaa'}}>follows you</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa",borderRadius:'35%' ,marginRight:'10px',cursor:'pointer'}}>
              <img src={`${addFrnd}`} className="AddFrndImage" alt="" />
            </div>
          </div>
        </div>
        {/* -------------------- */}
        <div style={{ marginTop:'10px '}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${frndImage}`} className="ProfileImage" alt="" />
              <div>
              <p style={{ marginLeft: "20px" }}>Sanam</p>
              <p style={{marginLeft:'20px',textAlign:'start',marginTop:'-17px',fontSize:'13px',color:'#aaa'}}>follows you</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa",borderRadius:'35%' ,marginRight:'10px',cursor:'pointer'}}>
              <img src={`${addFrnd}`} className="AddFrndImage" alt="" />
            </div>
          </div>
        </div>
        {/* ----------------------- */}
        <div style={{ marginTop:'10px '}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${frndImage}`} className="ProfileImage" alt="" />
              <div>
              <p style={{ marginLeft: "20px" }}>Sanam</p>
              <p style={{marginLeft:'20px',textAlign:'start',marginTop:'-17px',fontSize:'13px',color:'#aaa'}}>follows you</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa",borderRadius:'35%' ,marginRight:'10px',cursor:'pointer'}}>
              <img src={`${addFrnd}`} className="AddFrndImage" alt="" />
            </div>
          </div>
        </div>
        {/* ------------------------- */}
        <div style={{ marginTop:'10px '}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${frndImage}`} className="ProfileImage" alt="" />
              <div>
              <p style={{ marginLeft: "20px" }}>Sanam</p>
              <p style={{marginLeft:'20px',textAlign:'start',marginTop:'-17px',fontSize:'13px',color:'#aaa'}}>follows you</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa",borderRadius:'35%' ,marginRight:'10px',cursor:'pointer'}}>
              <img src={`${addFrnd}`} className="AddFrndImage" alt="" />
            </div>
          </div>
        </div>
        {/* ------------------------ */}
        <div style={{ marginTop:'10px '}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={`${frndImage}`} className="ProfileImage" alt="" />
              <div>
              <p style={{ marginLeft: "20px" }}>Sanam</p>
              <p style={{marginLeft:'20px',textAlign:'start',marginTop:'-17px',fontSize:'13px',color:'#aaa'}}>follows you</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa",borderRadius:'35%' ,marginRight:'10px',cursor:'pointer'}}>
              <img src={`${addFrnd}`} className="AddFrndImage" alt="" />
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}

export default ProfileRightBar;
