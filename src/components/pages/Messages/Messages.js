import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getChats } from '../../../actions/chatActions';
import './Messages.css';

const Messages = ({ auth, chats, getChats }) => {
  const [ chatSelection, setChatSelection ] = useState({
    activeSelection: 0
  });

  const [ userMessage, setUserMessage ] = useState({
    message: '',
  });

  const ChatSelector = ({ idx, chatSubject, chatDate }) => {
    return (
      <>
        <div className='chat-selector' onClick={() => handleClick(idx)}>
          <p className='chat-date'>{chatDate}</p>
          <p className='chat-subject'>{chatSubject}</p>
        </div>
      </>
    )
  }
  // chat sub-component
  const UserChat = ({ chat }) => {
    const messages = chat.messages ? chat.messages.map((message, idx) => <ChatMessage message={message} key={idx}/>) : null;
    return (
      <>
        <div className='chat'>
          {messages}
        </div>
      </>
    )
  }
  // message sub-component
  const ChatMessage = ({ message }) => {
    return (
      <>
        <div className={ message.senderId._id === auth.currentUser._id ? 'message message-self' : 'message message-other' }>
          <p className='message-sender'>{message.senderId.name.split(' ')[0]}</p>
          <p className='message-content'>{message.content}</p>
        </div>
      </>
    )
  }

  useEffect(() => {
    getChats();
  }, [getChats]);

  const handleClick = (idx) => {
    setChatSelection({
      ...chatSelection,
      activeSelection: idx
    });
  }

  const handleMessageChange = e => {
    setUserMessage({
      ...userMessage,
      [e.target.name]: e.target.value
    });
  };

  const handleMessageSubmit = e => {

  }

  const { message } = userMessage;
  const { userChats } = chats;
  const chatObjs = userChats ? userChats.map((chat, idx) => <UserChat chat={chat} key={idx}/>) : null;
  const chatSelectors = userChats ? userChats.map((chat, idx) => <ChatSelector chatSubject={chat.subject} chatDate={chat.date} idx={idx} key={idx}/>) : null;

  return(
    <main className="messages">
      <h1>Messages</h1>
      <div id='chat-container'>
        <div id='chat-selector'>
          <button id='new-chat-button'>New Message</button>
          { chatSelectors || null }
        </div>
        <div id='active-chat'>{chatObjs ? chatObjs[chatSelection.activeSelection] : 'Please start a new chat to the left.'}
          <form id='new-message' onSubmit={handleMessageSubmit}>
            <input type="text" name="chat-message" className='new-chat-message' value={message} onChange={handleMessageChange} />
            <input value="Send" type="submit" />
          </form>
        </div>
      </div>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    chats: state.chats
  }
}

export default connect(mapStateToProps, { getChats })(Messages);