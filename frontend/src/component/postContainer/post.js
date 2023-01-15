import React, { useEffect, useState } from "react";
import profilePicture from "../images/profilePic.jpg";
import commentIcon from "../images/commentIcon.png";
import heartIcon from "../images/heartIcon.png";
import anotherHeart from "../images/anotherHeart.png";
import shareIcon from "../images/shareIcon.png";
import "./post.css";
import axios from "axios";
import { useSelector } from "react-redux";

function Post({ post }) {
  // user logged in from global state
  const userDetails = useSelector((state) => state.user);
  const loggedInUser = userDetails.user;
  const accesstoken = loggedInUser.accessToken;

  const userId = loggedInUser.data.userId;

  useEffect(() => {
    const getUser = async () => {
      try {
        //backend userDetails route
        const response = await axios.get(
          `http://localhost:5000/api/user/userdetails/${post.user}`,
          {
            headers: {
              token: accesstoken,
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.log("error on response", error);
      }
    };
    getUser();
  }, [post.user]);

  const [Like, setLike] = useState([
    post.like.includes(userId) ? anotherHeart : heartIcon,
  ]);
  const [Count, setCount] = useState(post.like.length);
  const [Comments, setComments] = useState(post.comments);
  const [CommentWriting, setCommentWriting] = useState("");
  const [CommentCount, setCommentCount] = useState(post.comments.length);
  const [ShowComment, setShowComment] = useState(false);
  const [user, setUser] = useState([]);

  const handleLike = async () => {
    await fetch(`http://localhost:5000/api/post/${post._id}/like`, {
      method: "PUT",
      headers: { "Content-Type": "application/Json", token: accesstoken },
    });
    if (Like === heartIcon) {
      setLike(anotherHeart);
      setCount(Count + 1);
    } else {
      await fetch(`http://localhost:5000/api/post/${post._id}/like`, {
        method: "PUT",
        headers: { "Content-Type": "application/Json", token: accesstoken },
      });
      setLike(heartIcon);
      setCount(Count - 1);
    }
  };

  const addComment = async () => {
    const comment = {
      postId: `${post._id}`,
      username: `${loggedInUser.data.username}`,
      comment: `${CommentWriting}`,
      profile: `${loggedInUser.data.profile}`,
    };
    await fetch(`http://localhost:5000/api/post/user/comment`, {
      method: "PUT",
      headers: { "Content-Type": "application/Json", token: accesstoken },
      body: JSON.stringify(comment),
    });
    setComments(Comments.concat(comment));
    
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
              {user.username}
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
        <p className="postTitle">{post.title}</p>
        
        {/* diplay image and video alternatively*/}
        {post.image !== "" ? (
          <img src={`${post.image}`} className="PostImage" alt="" />
        ) : post.video !== "" ? (
          <video  className="PostImage" width="500" height="500" controls>
            <source src={`${post.video}`} type="video/mp4" />
          </video>
        ) : (
          ""
        )}

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
            <div className="commentIconDiv">
              <img
                src={`${commentIcon}`}
                onClick={handleShowComment}
                className="LikeAndComment"
                alt=""
              />
              <p style={{ marginLeft: "10px" }}>{Comments.length} comments</p>
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
          <div style={{ display: "grid" }}>
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
                      src={loggedInUser.data.profile}
                      className="CommentProfileImage"
                      alt=""
                    ></img>
                    <p style={{ marginLeft: 10, fontWeight: "bold" }}>
                      {items.username}
                    </p>
                  </div>
                  <div style={{ marginLeft: 100, marginTop: -30 }}>
                    <p
                      style={{
                        marginLeft: 10,
                        textAlign: "left",
                        fontSize: 15,
                      }}
                    >
                      {items.comment}
                    </p>
                    <p
                      style={{
                        marginLeft: 10,
                        textAlign: "left",
                        fontSize: 11,
                        color: "#aaa",
                        marginTop: -11,
                      }}
                    >
                      Reply
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Post;
