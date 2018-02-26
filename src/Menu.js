import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './Home'
import ContentPage from './ContentPage'
import AboutUs from './AboutUs'
import Contact from './Contact'

export default class extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Menu</h1>
          <nav>
            <a href="https://google.com">Google</a> <br/>
            <Link to="/">Home</Link> <br/>
            <Link to="/ContentPage">Content Page</Link> <br/>
            <Link to="/AboutUs">About Us</Link> <br/>
            <Link to="/Contact">Contact</Link> <br/>
            {/*
              Contact
            */}
          </nav>
          <hr/>
          {/*<Route exact path="/" render={r => {*/}
              {/*return (<h1>Home</h1>)*/}
            {/*}*/}
          {/*}/>*/}
          
          <Route exact path="/" component={Home}/>
          <Route path="/ContentPage" component={ContentPage}/>
          <Route path="/AboutUs" component={AboutUs}/>
          <Route path="/Contact" component={Contact}/>
        </div>
      </Router>
    )
  }
}