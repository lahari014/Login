// Write your code here
import {Component} from 'react'

import './index.css'

class Message extends Component {
  state = {isLogged: false}

  msg = () => {
    const {isLogged} = this.state
    if (isLogged === false) {
      return 'Please Login'
    }
    return 'Welcome User'
  }

  render() {
    return <h1 className="text">{this.msg()}</h1>
  }
}

export default Message
