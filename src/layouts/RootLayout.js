import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs';

function RootLayout() {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/help'>Help</NavLink>
                    <NavLink to='/career'>Career</NavLink>
                </nav>
                <BreadCrumbs/>
            </header>
        <main>
            <Outlet/>
        </main>
        </div>
    )
}

export default RootLayout
