import { LOGIN } from "../constatns";

const initialState = {
  loginStatus: false,
  userId: null,
  userType: 'user',
  error: false,
}

const login = (state = initialState, action) => {

  const { type, userId, userType, loginStatus, error } = action
  switch (type) {
    case LOGIN:
      return {userId, userType, loginStatus, error}
    default:
      return state;
  }
}

export default login;