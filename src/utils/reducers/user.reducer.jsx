const initialState = {
  logged_in: false,
  user: {}
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'login':
      return { logged_in: true, user: { ...action.payload } }
    case 'logout':
      return { logged_in: false, user: {} }
    default:
      return state
  }
}

