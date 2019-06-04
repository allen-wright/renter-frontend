const defaultState = {
  currentUser: {},
  isLoggedIn: false,
  isFetching: true
}

const user = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      return {...state, currentUser: action.payload, isLoggedIn: true, isFetching: false}
    default:
      return state;
  }
}

export default user;