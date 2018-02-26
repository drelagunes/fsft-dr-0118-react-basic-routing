import React, { Component } from 'react'
import Awesome from './img/awesome.png'

export default class extends Component {
  render(){
    return (
      <div>
        <h1>ABOUT US</h1>
        <img src={Awesome} width="300px" height="300px"/>
      </div>
    );
  }
}