import React from 'react';
import { connect } from 'react-redux';
import './Payments.css';
import wompWomp from './images/payments.jpg'

const Payments = () => {
  return (
    <main id='payments'>
      <img className='womp-womp' src={wompWomp} alt='if i had one meme' />
    </main>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Payments);