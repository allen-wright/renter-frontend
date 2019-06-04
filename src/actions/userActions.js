const LOGIN_USER = 'LOGIN_USER';

export const userLoginFetch = user => async dispatch => {
    console.log('passed dispatch');
    const response = await fetch('localhost:4000/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({user})
    })
      // .then(handleErrors)
      // .then(res => { res.json(); console.log(res) })
      // .then(data => {
      //   if (data.message) {
      //     console.log(data.message);
      //   } else {
      //     localStorage.setItem("token", data.jwt);
      //     dispatch(loginUser(data.user));
      //   }
      // })
    console.log(response);
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const loginUser = userObj => ({
  type: LOGIN_USER,
  payload: userObj
})