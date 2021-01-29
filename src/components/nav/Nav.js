import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <nav className='navbar bg-primary navbar-dark navbar-expand-sm p-2'>
        <a href='/' className='navbar-brand'>
          My React App
        </a>

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
              <a className='nav-link' href='/'>
                Users
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Posts
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Todos
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
