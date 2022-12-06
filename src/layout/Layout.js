import React from 'react'
import { Link } from 'gatsby'

export default function Layout({ children }) {
  return (
    <div>
        <div>
           <h1>
           I'm the navbar

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
           </h1>
        </div>

        <div>
        { children }
        </div>
        
        <div>
            i'm the footer
        </div>
    </div>
  )
}
