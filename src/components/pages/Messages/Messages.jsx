import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getChats, postMessage } from 'actions/chatActions';
import './Messages.css';

const Messages = ({ auth, chats, getChats, postMessage }) => {
  const [ chatSelection, setChatSelection ] = useState({
    activeSelection: 0,
    activeId: null
  });

  const [ userMessage, setUserMessage ] = useState({
    message: '',
  });

  const ChatSelector = ({ idx, id, chatSubject, chatDate }) => {
    return (
      <>
        <div className={idx === chatSelection.activeSelection ? 'chat-selector active' : 'chat-selector'} onClick={() => handleClick(idx, id)}>
          <p className='chat-subject'>{chatSubject}</p>
          <p className='chat-date'>{new Date(chatDate).toDateString()}</p>
        </div>
      </>
    )
  }
  // chat sub-component
  const UserChat = ({ chat }) => {
    const messages = chat.messages ? chat.messages.map((message, idx) => <ChatMessage message={message} key={idx}/>) : null;
    return (
      <>
        <div id='chat'>
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

  const handleClick = (idx, id) => {
    setChatSelection({
      ...chatSelection,
      activeSelection: idx,
      activeId: id
    });
  }

  const handleMessageChange = e => {
    e.preventDefault();
    setUserMessage({
      ...userMessage,
      message: e.target.value
    });
  };

  const handleMessageSubmit = e => {
    e.preventDefault();
    postMessage(chatSelection.activeId || userChats[0]._id, {content: userMessage.message});
    setUserMessage({
      ...userMessage,
      message: ''
    });
  }

  const { message } = userMessage;
  const { userChats } = chats;
  const chatObjs = userChats ? userChats.map((chat, idx) => <UserChat chat={chat} key={idx}/>) : null;
  const chatSelectors = userChats ? userChats.map((chat, idx) => <ChatSelector chatSubject={chat.subject} chatDate={chat.date} idx={idx} id={chat._id} key={idx}/>) : null;

  return(
    <section className="messages">
      <h1>Messages</h1>
      <div id='chat-container'>
        <div id='chat-selector'>
          <div id='new-chat'>
            <button id='new-chat-button' className='hvr-grow'>New Message</button>
          </div>
          { chatSelectors || null }
        </div>
        <div id='active-chat'>{chatObjs ? chatObjs[chatSelection.activeSelection] : 'Please start a new chat to the left.'}
          <form id='new-message' onSubmit={handleMessageSubmit}>
            <input type="text" name="chat-message" className='new-chat-message' value={message} onChange={handleMessageChange} />
            <input value="Send" type="submit" />
          </form>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    chats: state.chats
  }
}

export default connect(mapStateToProps, { getChats, postMessage })(Messages);