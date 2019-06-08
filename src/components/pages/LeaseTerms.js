import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getLeaseTerms } from '../../actions/leaseTermsActions';

const LeaseTerms = ({ leaseTerms, getLeaseTerms }) => {
  const [ userSelection, setUserSelection ] = useState({
    activeSection: 0
  });

  // dropdown sub-component
  const LeaseTermsDropDown = ({ sectionName, idx }) => {
    return(
      <>
        <button onClick={() => handleClick(idx)}>{sectionName}</button>
      </>
    )
  }
  // section sub-component
  const LeaseTermsSection = ({ section }) => {
    return(
      <>
        <h2>{section.name}</h2>
        <p>{section.content}</p>
      </>
    )
  }

  useEffect(() => {
    getLeaseTerms();
  }, [getLeaseTerms]);

  const handleClick = (idx) => {
    setUserSelection({
      ...userSelection,
      activeSection: idx
    });
  }

  const { userLeaseTerms } = leaseTerms;
  const dropdownNames = userLeaseTerms ? userLeaseTerms.sections.map((section, idx) => <LeaseTermsDropDown sectionName={section.name} idx={idx} key={idx}/>) : null;
  const sections = userLeaseTerms ? userLeaseTerms.sections.map((section, idx) => <LeaseTermsSection section={section} key={idx}/>) : null;

  return(
      <main className="lease-terms">
      { userLeaseTerms ?
        <>
          <h1>Lease Terms</h1>
          {dropdownNames}
          {sections[userSelection.activeSection]}
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