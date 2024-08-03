import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function HelpLayout() {
  return (
    <div className='help-layout'>
      <h2>Website help</h2>
      <nav>
        <NavLink to='faq'>FAQ</NavLink>
        <NavLink to='contact'>Contact</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default HelpLayout
