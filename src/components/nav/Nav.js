import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom'
export default class Nav extends Component {
  render() {
    return (
      <nav className='navbar bg-primary navbar-dark navbar-expand-sm p-2'>
        <Link to='/' className='navbar-brand'>
          My React App
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#collapsibleNavbar'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='collapsibleNavbar'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/users'>
                Users
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/posts'>
                Posts
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/todos'>
                Todos
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/todos/sub'>
                Sub Todos
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/products'>
                Products
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/comments'>
                Comments
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/albums'>
                Albums
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
