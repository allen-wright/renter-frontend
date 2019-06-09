import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getChats } from '../../actions/chatActions';

const Messages = ({ chats, getChats }) => {
  // chat sub-component
  const UserChat = ({ chat }) => {
    const messages = chat.messages ? chat.messages.map((message, idx) => <ChatMessage message={message} key={idx}/>) : null;
    return (
      <>
      {messages}
      </>
    )
  }
  // message sub-component
  const ChatMessage = ({ message }) => {
    return (
      <>
        <h3>{message.senderId.name}</h3>
        <p>{message.content}</p>
      </>
    )
  }

  useEffect(() => {
    getChats();
  }, [getChats]);

  const { userChats } = chats;
  const chatObjs = userChats ? userChats.map((chat, idx) => <UserChat chat={chat} key={idx}/>) : null;

  return(
    <main className="messages">
      <h1>Messages</h1>
      {chatObjs}
    </main>
  )
}

const mapStateToProps = state => {
  return {
    chats: state.chats,
  }
}

export default connect(mapStateToProps, { getChats })(Messages);