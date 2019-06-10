import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMaintenanceRequests } from '../../actions/maintenanceRequestsActions';

const MaintenanceRequests = ({ maintenanceRequests, getMaintenanceRequests }) => {

  // request sub-component
  const Request = ({ request }) => {
    return(
      <>
       <h2>{request.name}</h2>
       <h3>{request.estimatedCompletionDate}</h3>
       <p>{request.request}</p>
      </>
    )
  }

  useEffect(() => {
    getMaintenanceRequests();
  }, [getMaintenanceRequests])

  const { userMaintenanceRequests } = maintenanceRequests;

  const requests = userMaintenanceRequests ? userMaintenanceRequests.map((request, idx) => <Request request={request} key={idx}/>) : null;

  return(
    <main className="maintenance-requests">
      <p>Maintenance Requests</p>
      {requests}
    </main>
  )
}

const mapStateToProps = state => {
  return {
    maintenanceRequests: state.maintenanceRequests,
  }
}

export default connect(mapStateToProps, { getMaintenanceRequests })(MaintenanceRequests);