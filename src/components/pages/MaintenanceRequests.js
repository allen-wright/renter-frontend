import React from 'react';
import { connect } from 'react-redux';

const MaintenanceRequests = ({ auth }) => {
  return(
    <main className="maintenance-requests">
      <p>Maintenance Requests</p>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(MaintenanceRequests);