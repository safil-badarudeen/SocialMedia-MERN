import React from "react";
import profilePicture from "../images/profilePic.jpg";
import commentIcon from "../images/commentIcon.png";
import heartIcon from "../images/heartIcon.png";
import shareIcon from "../images/shareIcon.png";
import "./post.css";

function Post() {
  return (
    <div className="PostContainer">
      <div className="SubPostContainer">
        <div>
          <div style={{ display: "flex", marginLeft: "30px" }}>
            <img
              src={`${profilePicture}`}
              className="PostProfileImage"
              alt=""
            ></img>
            <p style={{marginLeft:"015px",fontWeight:'bold'}}>SAFIL</p>
          </div>
          <p
            style={{
              width: "95%",
              textAlign: "left",
              margin: "auto",
              marginTop: "10px",
              marginLeft: "40px",
            }}
          >
            The autumn leaves rustled gently as a cool breeze blew through the
            park. Children laughed and played on the swings and slides, their
            joyful screams echoing through the air. A lone squirrel scurried
            across the grass, searching for any stray nuts it could find before
            winter set in
          </p>
          <img src={`${profilePicture}`} className="PostImage" alt="" />
          <div style={{display:'flex'}}>
            <div style={{ display: "flex", marginLeft: "40px",cursor:'pointer' }}>
              <div style={{ display:'flex',alignItems:'center'}}>
                <img src={`${heartIcon}`} className="LikeAndComment" alt="" />
                <p style={{ marginLeft:'10px'}}> 100K likes</p>
              </div>
              <div style={{ display:'flex',alignItems:'center',cursor:'pointer'}}>
                <img src={`${commentIcon}`} className="LikeAndComment" alt="" />
                <p style={{ marginLeft:'10px'}}>100K comments</p>
              </div>
            </div>
            <div style={{ display:'flex',marginLeft:'150px',alignItems:'center',cursor:'pointer'}}>
                <img src={`${shareIcon}`} className="LikeAndComment" alt="" />
                <p style={{ marginLeft:'10px'}}>share</p>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
