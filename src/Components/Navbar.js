import React from 'react'
import { Link } from 'react-router-dom'
import aidryse from '../assets/aidlogo.png'
const Navbar = () => {
  return (
    <div className='nav-one'>
      <nav class='navbar navbar-expand-lg'>
        <img className='logo' src={aidryse} alt='logo' />
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <i class='fas fa-bars ham icon-one'></i>
        </button>
        <div
          class='
            collapse
            navbar-collapse
            text-center
            d-md-flex
            justify-content-end
          '
          id='navbarNav'
        >
          <ul class='navbar-nav grid'>
            <Link to='/' className='navlinks text-capitalize'>
              <p>home</p>
            </Link>
            <Link to='/About' className='navlinks text-capitalize'>
              <p>about us</p>
            </Link>
            <Link to='/Stories' className='navlinks text-capitalize'>
              <p>stories</p>
            </Link>
            <Link to='/Contact' className='navlinks text-capitalize'>
              <p>contact us</p>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
