import { useState } from 'react';
import { connect } from 'react-redux';

const Signup = ({ signUpUser }) => {
  const [ userData, setUserData ] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = userData;

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(signUpUser(userData));
  }

  return(
    <main className="signup">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password2">Re-enter Password</label>
          <input type="password" name="password2" value={password2} onChange={handleChange} />
        </div>
        <input value="Submit" type="submit" />
      </form>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(Signup);