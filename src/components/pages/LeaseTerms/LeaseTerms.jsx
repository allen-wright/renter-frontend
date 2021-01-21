import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getLeaseTerms } from 'redux/actions/leaseTermsActions';
import './LeaseTerms.css';

const LeaseTerms = ({ leaseTerms, getLeaseTerms }) => {
  const [ userSelection, setUserSelection ] = useState({
    activeSection: 0
  });

  // dropdown sub-component
  const LeaseTermsDropDown = ({ sectionName, idx }) => {
    return(
      <>
        <button className="lease-terms-button hvr-underline-from-center" onClick={() => handleClick(idx)}>{sectionName}</button>
      </>
    )
  }
  // section sub-component
  const LeaseTermsSection = ({ section }) => {
    return(
      <>
        <div id="lease-terms-section">
          <h2>{section.name}</h2>
          <p>{section.content}</p>
        </div>
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
      <main id="lease-terms">
      { userLeaseTerms ?
        <>
          <h1 className="lease-terms-title">Lease Terms</h1>
          <div id="lease-terms-sections">
            {dropdownNames}
          </div>
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