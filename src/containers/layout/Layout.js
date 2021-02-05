import React, { Component } from 'react'
import Nav from '../../components/nav/Nav'
import Posts from '../../components/posts/Posts'
import Users from '../../components/users/Users'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Nav />
        {/* <Users /> */}
        <Posts/>
      </div>
    )
  }
}
