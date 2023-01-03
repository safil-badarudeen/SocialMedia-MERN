import React, { useState } from "react";
import profilePicture from "../images/profilePic.jpg";
import commentIcon from "../images/commentIcon.png";
import heartIcon from "../images/heartIcon.png";
import anotherHeart from "../images/anotherHeart.png";
import shareIcon from "../images/shareIcon.png";
import "./post.css";

function Post() {

    const [Like,setLike]=useState(heartIcon)
    const [count,setCount]= useState(10)

    const handleLike=()=>{
        console.log('hwllo')
        if(Like === heartIcon){
            setLike(anotherHeart)
            setCount(count +1)
        }else{
            setLike(heartIcon)
            setCount(count -1)
        }
    }

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
            <div>
              <p
                style={{
                  marginLeft: "15px",
                  fontWeight: "bold",
                  textAlign: "start",
                }}
              >
                SAFIL
              </p>
              <p
                style={{
                  fontSize: 11,
                  marginTop: -12,
                  marginLeft: 15,
                  textAlign: "start",
                  color: "#aaa",
                }}
              >
                followed by mubashir
              </p>
            </div>
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
            joyful.....
          </p>
          <img src={`${profilePicture}`} className="PostImage" alt="" />
          <div style={{ display: "flex" }}>
            <div
              style={{ display: "flex", marginLeft: "40px", cursor: "pointer" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={`${Like}`} onClick={handleLike} className="LikeAndComment" alt="" />
                <p style={{ marginLeft: "10px" }}> {count} likes</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img src={`${commentIcon}`} className="LikeAndComment" alt="" />
                <p style={{ marginLeft: "10px" }}>100K comments</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginLeft: "150px",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <img src={`${shareIcon}`} className="LikeAndComment" alt="" />
              <p style={{ marginLeft: "10px" }}>share</p>
            </div>
          </div>
           <div style={{ display:'flex',alignItems:'center'}}>
           <img src={`${profilePicture}`} className="CommentProfileImage" alt="" ></img>
           {/* <p style={{marginLeft:10}}>Safil</p> */}
           <input className='CommentInput' placeholder='Write your thoughts..' type='text' />
           <button className="AddCommentButton">Comment</button>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
