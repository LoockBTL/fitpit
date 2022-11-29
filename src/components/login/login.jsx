import { useRef } from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux/actions'
import s from './login.module.css'

const Login = ({ login, loginData }) => {
  const userName = useRef()
  const password = useRef()

  const { error } = loginData
  const handleSubmit = (e) => {
    e.preventDefault()
    login({
      userName: userName.current.value,
      password: password.current.value,
    })
  }

  return (
    <div className={s.window}>
      <div className={s.text}>Login</div>
        <form onSubmit={handleSubmit} className={s.form}>
          <p>Username</p>
          <input id="userName" type="text" ref={userName} className={s.input}/>
          <p>Password</p>
          <input id="password" type="password" ref={password}  className={s.input}/>
          <input type="submit" className={s.button}/>
        </form>
        <p className={s.error}>{error}</p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  loginData: state.login,
})

const mapDispatchToProps = {
  login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
