import React from 'react';
import { connect } from 'react-redux';
import './Home.css';

function Home({user}){

  return(
    <section className="home">
      <h1>Home</h1>
      <img className='hero' src='./images/daniel-dinuzzo-qCjolcMFaLI-unsplash.jpg' alt='Apartment complex' />
    </section>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Home);