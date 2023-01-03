import React from 'react'
import './mainPost.css'
import ContentPost from '../contentPostContainer/ContentPost'
import Post from '../postContainer/post'


function MainPost() {
  return (
    <div className='MainPostContainer'>
       <ContentPost/>
       <Post/>

    </div>
  )
}

export default MainPost