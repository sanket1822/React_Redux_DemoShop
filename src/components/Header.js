import React from 'react'

const  Header =() => {
  return (
    <nav className='navbar'>
      <div className='logo'>      
              <h1> Demo shop</h1>     
      </div>
      <ul className='menu'>
        <li><a href='' className='active'>Home</a></li>
        <li><a href='#'>New Arrivals</a></li>
        <li><a href='#'>Fashion</a></li>
        <li><a href='#'>Account</a></li>
        <li><a href='#'><i className='fas fa-shopping-cart'></i></a></li>
      </ul>
      <div className='menu-btn'>
        <i className='fa fa-bars'></i>
      </div>

    </nav>
    
  )
}

export default Header;