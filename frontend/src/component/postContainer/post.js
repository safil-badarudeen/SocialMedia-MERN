import React, { useState } from "react";
import profilePicture from "../images/profilePic.jpg";
import commentIcon from "../images/commentIcon.png";
import heartIcon from "../images/heartIcon.png";
import anotherHeart from "../images/anotherHeart.png";
import shareIcon from "../images/shareIcon.png";
import "./post.css";

function Post() {
  const [Like, setLike] = useState(heartIcon);
  const [Count, setCount] = useState(10);
  const [Comments, setComments] = useState([]);
  const [CommentWriting, setCommentWriting] = useState("");
  const [CommentCount, setCommentCount] = useState(3);
  const [ShowComment, setShowComment] = useState(false);

  const handleLike = () => {
    if (Like === heartIcon) {
      setLike(anotherHeart);
      setCount(Count + 1);
    } else {
      setLike(heartIcon);
      setCount(Count - 1);
    }
  };

  const addComment = () => {
    const comment = {
      id: "154144554da5554",
      username: "Safil",
      title: `${CommentWriting}`,
    };
    setComments(Comments.concat(comment));
    setCommentCount(CommentCount + 1);
  };

  const handleComment = () => {
    addComment();
  };

  const handleShowComment = () => {
    if (ShowComment === true) {
      setShowComment(false);
    } else {
      setShowComment(true);
    }
  };

  return (
    <div className="PostContainer">
      <div className="SubPostContainer">
        
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
                <img
                  src={`${Like}`}
                  onClick={handleLike}
                  className="LikeAndComment"
                  alt=""
                />
                <p style={{ marginLeft: "10px" }}> {Count} likes</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  src={`${commentIcon}`}
                  onClick={handleShowComment}
                  className="LikeAndComment"
                  alt=""
                />
                <p style={{ marginLeft: "10px" }}>{CommentCount} comments</p>
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

          {ShowComment === true ? (
            <div style={{display:'grid'}}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={`${profilePicture}`}
                className="CommentProfileImage"
                alt=""
              ></img>
              {/* <p style={{marginLeft:10}}>Safil</p> */}
              <input
                className="CommentInput"
                placeholder="Write your thoughts.."
                onChange={(e) => setCommentWriting(e.target.value)}
                type="text"
              />
              <button className="AddCommentButton" onClick={handleComment}>
                Comment
              </button>
            </div>
            
            {Comments.map((items) => {
            return (
                <div>
              <div style={{ display: "flex" }}>
                <img
                  src={`${profilePicture}`}
                  className="CommentProfileImage"
                  alt=""
                ></img>
                <p style={{ marginLeft: 10, fontWeight: "bold" }}>
                  {items.username}
                </p>
                
                
              </div>
              <div style={{ marginLeft:100,marginTop:-30}}>
                <p style={{ marginLeft: 10 , textAlign:'left',fontSize:15,}}>{items.title}</p>
                <p style={{ marginLeft: 10 , textAlign:'left',fontSize:11,color:'#aaa',marginTop:-11}}>Reply</p>
                </div>
              </div>
            );
          })}
            </div>
          ) : (
            <div> 
                
            </div>
          )}

        
        </div>
    </div>
  );
}

export default Post;
