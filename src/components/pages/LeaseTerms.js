import React from 'react';
import { connect } from 'react-redux';

const LeaseTerms = ({ auth }) => {
  return(
    <main className="lease-terms">
      <p>Lease Terms</p>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(LeaseTerms);