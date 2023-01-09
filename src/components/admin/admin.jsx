import { connect } from 'react-redux'
import Login from '../login/index'
import s from './admin.module.css'
import Table from './table/index'
import { Link, Route, Routes } from 'react-router-dom'
import Statistics from './statistic/statistic'
import Print from './print/print'

const Admin = ({ loginData, state }) => {
  const { error, loginStatus, userType } = loginData
  if (loginStatus === false) return <Login />
  if (error === 'Fail login') return <Login error={error} />
  if (userType === 'admin') {
    return (
      <div>
        <Link style={{ paddingLeft: '10px' }} to={`/admin`}>
          Admin
        </Link>
        <Link style={{ paddingLeft: '10px' }} to={`/admin/statistics`}>
          Statistics
        </Link>
        <Link style={{ paddingLeft: '10px' }} to={`/admin/print`}>
          Print
        </Link>
        <p className={s.title}>Admin panel</p>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/print" element={<Print />} />
        </Routes>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loginData: state.login,
  state: state,
})

export default connect(mapStateToProps)(Admin)
