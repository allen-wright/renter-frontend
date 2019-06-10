import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getMaintenanceRequests } from '../../../actions/maintenanceRequestsActions';
import './MaintenanceRequests.css';

const MaintenanceRequests = ({ maintenanceRequests, getMaintenanceRequests }) => {
  const [ userSelection, setUserSelection ] = useState({
    activeSection: 0
  });

  const RequestSelector = ({ idx, request }) => {
    return (
      <>
        <div className={idx === userSelection.activeSelection ? 'request-selector active' : 'request-selector'} onClick={() => handleClick(idx)}>
          <p className='request-subject'>{request.request}</p>
          <p className='request-date'>{new Date(request.date).toDateString()}</p>
        </div>
      </>
    )
  }

  const handleClick = (idx) => {
    setUserSelection({
      ...userSelection,
      activeSelection: idx,
    });
  }
  // request sub-component
  const Request = ({ request }) => {
    return(
      <>
        <div className='request'>
          <h3 className='request-name'>Request: {request.request}</h3>
          <p className='request-completionDate'>Estimated completion: {new Date(request.completionEstimate).toDateString()}</p>
          <p className='request-status'>Status: {request.status}</p>
          <p className='request-notes'>Notes: {request.notes}</p>
        </div>
      </>
    )
  }

  useEffect(() => {
    getMaintenanceRequests();
  }, [getMaintenanceRequests])

  const { userMaintenanceRequests } = maintenanceRequests;

  const requests = userMaintenanceRequests ? userMaintenanceRequests.map((request, idx) => <Request request={request} key={idx}/>) : null;
  const selectors = userMaintenanceRequests ? userMaintenanceRequests.map((request, idx) => <RequestSelector key={idx} idx={idx} request={request} />) : null;

  return(
    <main className="maintenance-requests">
      <h1>Maintenance Requests</h1>
      <div id='requests-container'>
        <div id='request-selectors'>
          <div id='new-request'>
            <button id='new-request-button' className='hvr-grow'>New Request</button>
          </div>
          {selectors}
        </div>
        <div id='active-request'>
          {requests ? requests[userSelection.activeSection] : 'Please submit a new request on the left.'}
        </div>
      </div>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    maintenanceRequests: state.maintenanceRequests,
  }
}

export default connect(mapStateToProps, { getMaintenanceRequests })(MaintenanceRequests);