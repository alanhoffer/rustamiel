import { NavLink } from 'react-router-dom'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import '../assets/css/navbar.css'

export default function Navbar() {
    
  const navigate = useNavigate();
 
  const handleLogout = () => {               
      signOut(auth).then(() => {
      // Sign-out successful.
          navigate("/");
          console.log("Signed out successfully")
      }).catch((error) => {
      // An error happened.
      });
  }

    return (
        <nav className='navbarContainer'>
            <NavLink to="/admin/"> HOME </NavLink>
            <NavLink to="/admin/servers"> SERVERS </NavLink>
            <NavLink to="/admin/galery"> GALERY </NavLink>
            <NavLink to="/admin/shop"> SHOP </NavLink>
            <a onClick={handleLogout}  className='navbarVip'> LOGOUT </a>
        </nav>
    )
}