import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderNav() {
  return (
    <header>
        <section className='logo-sec'>
          <h1 className="logo">My ToDos</h1>
        </section>
        
        <section className='nav-sec'>
          <ul>
            <li><Link to={`/`} className='btn'>My ToDo List</Link></li>
            <li><Link to={`contact`} className='btn'>Contact</Link></li>
          </ul>
        </section>
    </header>

  )
}
