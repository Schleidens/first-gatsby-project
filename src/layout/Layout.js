import React from 'react'
import { Link } from 'gatsby'
import '../scss/style.scss'

export default function Layout({ children }) {
  return (
    <div>
        <div className='navbar'>
           <h1>
           I'm the navbar
           </h1>
           <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about">
                About
              </Link>
            </li>
           </ul>
        </div>

        <div>
        { children }
        </div>
        
        <div className='footer'>
            i'm the footer
        </div>
    </div>
  )
}
