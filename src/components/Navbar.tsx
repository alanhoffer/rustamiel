import { NavLink } from 'react-router-dom'
import '../assets/css/navbar.css'

export default function Navbar() {
    return (
        <nav className='navbarContainer'>
            <NavLink to="/"> HOME </NavLink>
            <NavLink to="/servers"> SERVERS </NavLink>
            <NavLink to="/galery"> GALERY </NavLink>
            <NavLink to="/shop" className='navbarVip'> BUY VIP </NavLink>
        </nav>
    )
}