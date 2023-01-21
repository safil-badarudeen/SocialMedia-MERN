import React from "react";
import "./chatContainer.css";
import profileImage from "../images/profilePic.jpg";
function ChatContainer() {
  return (
    <div className="ChatContainerMainContainer">
      <div className="imageNameChatContainer">
        <img
          src={`${profileImage}`}
          className="ChatContainerProfilePic"
          alt=""
        />
        <p className="chatContainerName">safill</p>
      </div>
      <div className="conversationContainer">
        <div className='messageContainer'>
           <img src={profileImage} className='messageProfielPic' alt=''/>
           <div>
            <p className='message'>jfa askdjasdioasdfjawgfwrhgqowrgtqowjrtqwirtjqworjt</p>
            </div>        
        </div>
        <div className='sendingMessageContainer'>
           
          
            <p className='message'>jfa askdjasdioasdfjawgfwrhgqowrgtqowjrtqwirtjqworjt</p>
                 
        </div>
      </div>

      <div className="messageInputContainer">
        <input
          type="text"
          placeholder="Type a message"
          name="message"
          id="message"
          className="messageInput"
        />

        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}

export default ChatContainer;
