import './index.css'

const Login = props => {
  const {onClickLogin} = props // This speelling mistake cost you 1 hr onClickLogin, on_c_lickLogin

  return (
    <button type="button" className="button" onClick={onClickLogin}>
      Login
    </button>
  )
}

export default Login
