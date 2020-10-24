import React from 'react';
import { connect } from 'react-redux';
import background from './daniel-dinuzzo-qCjolcMFaLI-unsplash.jpg';
import './Home.css';

function Home({user}){
  let style = {
    backgroundImage: `linear-gradient(90deg, transparent, rgb(24, 24, 24)), url(${background})`,
    backgroundPosition: 'center'
  }

  return(
    <main id="home">
      <div className="hero bottom-border" style={ style }>
        <p>Managing properties should be simple.</p>
        <br />
        <p>That's why Renter is.</p>
      </div>
      <div className="features">
        <div>
          <p>Easily communicate with tenants, schedule maintenances, and even receive rent payments - all across as many properties as you own.</p>
        </div>
        <div>
          <ul>
            <li>Multiple employee admin roles</li>
            <li>Manage multiple rental properties</li>
            <li>Chat with your tenants</li>
            <li>Full-featured maintenance request forms</li>
            <li>View floorplans and see occupied/vacant units</li>
            <li>Accept payments via Paypal, Square, and Stripe</li>
            <li>Industry-leading encryption</li>
            <li>Extremely fast, React-based site</li>
          </ul>
        </div>
      </div>
      <div className="cta"><p>Ready to move your business forward? Contact our sales team for a quote.</p></div>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Home);