import React, { useEffect, useState } from "react";
import profilePicture from "../images/profilePic.jpg";
import commentIcon from "../images/commentIcon.png";
import heartIcon from "../images/heartIcon.png";
import anotherHeart from "../images/anotherHeart.png";
import shareIcon from "../images/shareIcon.png";
import "./post.css";
import axios from "axios";

function Post({ post }) {
  const [Like, setLike] = useState(heartIcon);
  const [Count, setCount] = useState(post.like.length);
  const [Comments, setComments] = useState([]);
  const [CommentWriting, setCommentWriting] = useState("");
  const [CommentCount, setCommentCount] = useState(3);
  const [ShowComment, setShowComment] = useState(false);
  const [user, setUser] = useState([]);
 
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

  const accesstoken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmE3OWQxNzlkMDdmNjA1MDdiOGQxZSIsInVzZXJuYW1lIjoic2hlcnZhIiwiaWF0IjoxNjczMTcyODAwfQ.FzukuO2lw5K4WB2BTyLSUpOgPWFDob3uM0trAlogFRc";

  useEffect(() => {
    const getUser = async () => {
      try {
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
        console.log("error on response");
      }
    };
    getUser();
  }, []);

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
        <p
          style={{
            width: "95%",
            textAlign: "left",
            margin: "auto",
            marginTop: "10px",
            marginLeft: "40px",
          }}
        >
          {post.title}
        </p>
        <img src={`${post.image}`} className="PostImage" alt="" />
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
              <p style={{ marginLeft: "10px" }}> {post.like.length} likes</p>
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
              <p style={{ marginLeft: "10px" }}>{post.comments.length} comments</p>
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
                      src={`${profilePicture}`}
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
                      {items.title}
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
