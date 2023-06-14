import React, { Component } from 'react'
import UserOutput from './component/UserOutput'
import UserInput from './component/UserInput'
import './component/App.css'


export default class App extends Component {
  state = {
    username: 'Temitayo'
  };

  changeHandler = (event) =>{
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className='App'>
  
      <UserOutput username={this.state.username}/>
      <UserInput  change={this.changeHandler} />
      </div>
    )
  }
}

