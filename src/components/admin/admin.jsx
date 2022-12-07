import { connect } from "react-redux";
import Login from '../login/index'
import s from './admin.module.css'
import Table from "./table/index";

const Admin = ({loginData, state}) => {
  const {error, loginStatus,userType } = loginData;
  if (loginStatus === true) return <Login/>;
  if (error === "Fail login") return <Login error={error}/>
  if(userType === 'user') {
  return (
    <div>
      <p className={s.title}>Admin panel</p>
      <Table/>
    </div>
  )}
}

const mapStateToProps = (state) => ({
  loginData: state.login,
  state: state,
})



export default connect(mapStateToProps)(Admin);