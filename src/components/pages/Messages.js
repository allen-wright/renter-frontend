import React from 'react';
import { connect } from 'react-redux';

const Messages = ({ auth }) => {
  return(
    <main className="messages">
      <p>Messages</p>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(Messages);