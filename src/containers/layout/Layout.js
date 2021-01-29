import React, { Component } from 'react'
import Nav from '../../components/nav/Nav'
import Users from '../users/Users'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Users />
      </div>
    )
  }
}
