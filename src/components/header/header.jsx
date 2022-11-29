import { Link } from 'react-router-dom'
import s from './header.module.css'
import logo from './logo.svg'

const Header = () => {
  return (
<div className={s.container}>
      <div className={s.header}>
        <Link to={`/`}>
          <img src={logo} alt="logo" height='50px'/>
        </Link>
        <div>
          <Link className={s.link} to={`/admin`}>Admin</Link>
          <Link className={s.link} to={`/busket`}>Busket</Link>
        </div>
      </div>
</div>
  )
}

export default Header
