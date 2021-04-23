import React, {Component} from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return(
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark fixed-top px-sm-5'>
        <Link to='/risk'>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
              Risk Communication
          </li>
        </ul>
        </Link>
        <Link to='/quiz' className='ml-auto'>
          <button className='btn btn-outline-light text-capitalize'>
            Take The Quiz!
          </button>
        </Link>
      </nav>
    )
  }
}