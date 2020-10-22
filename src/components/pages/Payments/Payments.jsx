import React from 'react';
import { connect } from 'react-redux';

const Payments = () => {
  return (
    <section className='payments'>
      <img className='womp-womp' src='./images/payments.jpg' alt='womp womp' />
    </section>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Payments);