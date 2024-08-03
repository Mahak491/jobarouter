import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function BreadCrumbs() {
    const location = useLocation();
    let currLink = '';
    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
        currLink += `/${crumb}`

        return(
            <div className='crumb' key={crumb}>
                <Link to={currLink}>{crumb}</Link>
            </div>
        )
    })
  return (
    <div className='breadcrumbs'>
      {crumbs}
    </div>
  )
}

export default BreadCrumbs
