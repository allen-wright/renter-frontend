import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLeaseTerms } from '../../actions/leaseTermsActions';

const LeaseTerms = ({ leaseTerms, getLeaseTerms }) => {
  const { userLeaseTerms } = leaseTerms;

  useEffect(() => {
    getLeaseTerms();
  }, [getLeaseTerms]);

  let sections = [];

  return(
      <main className="lease-terms">
      { userLeaseTerms ?
        <>
          <h1>Lease Terms</h1>
          {sections}
        </>
      : <p>Loading</p>
      }
    </main>
  )
}

const mapStateToProps = state => {
  return {
    leaseTerms: state.leaseTerms,
  }
}

export default connect(mapStateToProps, { getLeaseTerms })(LeaseTerms);