import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route';


const User = (params) => {
  return <h1>Welcome {params.username}</h1>
}

class RouterGuids extends Component {
  state = {
    loggedIn: false
  }
  handleLogin = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><NavLink to="/" exact activeStyle={{color:'green'}}>Home</NavLink></li>
            <li><NavLink to="/about/" exact activeStyle={{color:'green'}}>About</NavLink></li>
            <li><NavLink to="/user/john" exact activeStyle={{color:'green'}}>User</NavLink></li>
          </ul>
          <Prompt
            when={!this.state.loggedIn}
            message={(location) => {
              return location.pathname.startsWith('/user')
              ? "Are you sure ? " : true
            }}
          />
          <button onClick={this.handleLogin.bind(this)}>{this.state.loggedIn ? "Logout" : "Login"}</button>
          <Route path="/" exact strict render={
            () => {
              return (<h1>Home Page</h1>)
            }
          }>
          </Route>
          <Route path="/about/" exact strict render={
            () => {
              return (<h1>About Page</h1>)
            }
          }>
          </Route>
          <Route path='/user/:username' exact strict render={({match}) => (
            this.state.loggedIn ? ( <User username={match.params.username}/> ) : (<Redirect to="/" />)
          )} />
        </div>
      </Router>
    );
  }
}

export default RouterGuids;
