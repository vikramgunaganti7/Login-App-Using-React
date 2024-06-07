import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickButton = () => {
    this.setState(preState => ({isLoggedIn: !preState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="home-container">
        <div className="sub-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout onClickLogout={this.onClickButton} />
          ) : (
            <Login onClickLogin={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
