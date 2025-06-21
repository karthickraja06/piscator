import './NavBar.css'
import assets from '../../assets'
import { Link } from 'react-router-dom'
import {useState} from 'react'

const NavBar = () => {
    const [navState, setNavState] = useState("home");
  return (
    <div className='header'>
        <div className='navbar'>
            <div className='nav-left'>
                <img src={assets.logo} alt="logo" className='logo' />
            </div>
            <div className='nav-mid'>
                <Link to="/" onClick={()=>{setNavState("home")}} className={navState === "home"?"active":""}>Home</Link>
                <Link to="/rental" onClick={()=>{setNavState("rental")}} className={navState === "rental"?"active":""}>Rental</Link>
                <Link to="/auction" onClick={()=>{setNavState("auction")}} className={navState === "auction"?"active":""}>Auction</Link>
                <Link to="/about" onClick={()=>{setNavState("about")}} className={navState === "about"?"active":""}>About</Link>
                <a href="#contact" onClick={()=>{setNavState("contact")}} className={navState === "contact"?"active":""}>Contact</a>
            </div>
            <div className='nav-right'>
                <img src={assets.user} className='user'/>
            </div>
        </div>
        <div className='divider-container'>
            <img src={assets.divider} alt='divider' className='divider'/>
        </div>
    </div>
  )
}

export default NavBar