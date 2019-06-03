const defaultState = {
  name: 'Test User',
  isAdmin: false,
  property: 1,
  maintenanceRequests: null,
  unit: 202,
  messages: null
}

const auth = (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default auth;