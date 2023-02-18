// Write your code here
import {Component} from 'react'

import Login from './Login/index'

import Logout from './Logout/index'

import Message from './Message/index'

import './index.css'

class Home extends Component {
  state = {isLogged: false}

  in=()=>{
     const {isLogged}=this.state
     if(isLogged===true){
         return <Logout/>
     }
     return <Login/>
  }

  render() {
      return(
        <div>
        <div>
            {this.in()}
        </div>
        </div>
      )
  }
}

export default Home
