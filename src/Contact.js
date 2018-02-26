import React, { Component } from 'react'

export default class extends Component {
  render(){
    return (
      <form>
        <label for="Email">Email:</label>
        <input id="Email" type="email" placeholder="example@test.com"/>
      </form>
    );
  }
}