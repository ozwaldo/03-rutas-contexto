import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
        <nav>
            <ul>
                <li><NavLink  to = '/' 
                className={({ isActive }) => (isActive ? "link-active" : "link")}>Inicio</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to = '/blogs' 
                className={({ isActive }) => (isActive ? "link-active" : "link")}>Blog</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to = '/articulos' 
                className={({ isActive }) => (isActive ? "link-active" : "link")}>Articulos</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to = '/contacto' 
                className={({ isActive }) => (isActive ? "link-active" : "link")}>Contacto</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to = '/panel' 
                className={({ isActive }) => (isActive ? "link-active" : "link")}>Panel de Control</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to = '/usuario' 
                className={({ isActive }) => (isActive ? "link-active" : "link")}>Usuario</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to = '/login' 
                className={({ isActive }) => (isActive ? "link-active" : "link")}>Login</NavLink></li>
            </ul>
        </nav>
        <Outlet />
    </>
  )
}
