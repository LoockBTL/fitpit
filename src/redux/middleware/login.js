
const logger = (store) => (next) => (action) => {
  if (!action.userData) return next(action)
  const { userName, password } = action.userData
  if (userName === 'admin' && password === 'admin') {
    let result = next({
      type: action.type,
      userId: 'admin-2342',
      userType: 'admin',
      loginStatus: true,
      error: false,
      userData: action.userData,
    })

    return result
  } else {
    let result = next({
      type: action.type,
      userId: null,
      userType: 'user',
      loginStatus: false,
      error: 'Fail login',
      userData: action.userData,
    })
    return result
  }
}

export default logger
