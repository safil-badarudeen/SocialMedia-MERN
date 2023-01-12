import React, { useEffect,useState } from "react";
import "./mainPost.css";
import ContentPost from "../contentPostContainer/ContentPost";
import Post from "../postContainer/post";
import axios from "axios";

function MainPost() {
  const accesstoken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmJkOTY1MzVmYWU2NWUzZTM3YjlmOCIsInVzZXJuYW1lIjoic2hhaWxhIiwiaWF0IjoxNjczMjU1Mjg0fQ.n-TLoBYZcpR7mi5aWFEMB28vLhpSuGbwJRjDcG6DQ2s";
  const [post,setPost]=useState([])
  useEffect(() => {
    const getPost = async() =>{
      try {
        const res = await axios.get(
          "http://localhost:5000/api/post/user/followingPost/63bbd96535fae65e3e37b9f8",
          {
            headers: {
              token: accesstoken,
            },
          }
        );
        setPost(res.data)
      } catch(error) {

      }
    };
    getPost();
  },[]);
  
  
  return (
    <div className="MainPostContainer">
      <ContentPost />
      {post.map((items)=>
        items.map((postDetails)=>(
           <Post post={postDetails}/>
         ))
      )}
       
    </div>
  );
}

export default MainPost;
