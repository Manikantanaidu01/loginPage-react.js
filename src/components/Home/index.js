import {Component} from 'react'
import {LoginMessage, LogoutMessage} from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: true}

  onClickingButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    let headingElement
    let buttonElement

    if (isLoggedIn === true) {
      headingElement = <LoginMessage />
      buttonElement = <Login login={this.onClickingButton} />
    } else {
      headingElement = <LogoutMessage />
      buttonElement = <Logout logout={this.onClickingButton} />
    }
    return (
      <div>
        {headingElement}
        {buttonElement}
      </div>
    )
  }
}

export default Home