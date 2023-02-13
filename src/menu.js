import React from 'react'
import './menu.css'

function Menu() {
  return (
    <div className='header'>
        <ul>
            <li><a className='aboutus'>About Us</a></li>
            <li><a className='awards'>Awards</a></li>
            <li><a className='business'>Our Businesses</a></li>
            <li><a className='news'>News&Activities</a></li>
        </ul>
    </div>
  )
}

export default Menu