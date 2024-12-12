import { useState } from "react";
import '../assets/styles/header.css'
import { Link } from "react-router-dom";
// "react-icons" package hamburger button
import {MdOutlineMenu} from 'react-icons/md'
import { CgProfile } from "react-icons/cg";


 //MobileNavigation.js
 const Hamburger = <MdOutlineMenu className="HamburgerMenu"
            size="28px" color="black"/>


const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) =>{
        setSearchQuery(e.target.value);
    };


    return (
        <header className="header">

            <div className="main">
            <div className="menu-button"  >
                {Hamburger}
                </div>
                <div className="logo">
                <Link to="/" className="link"> <h3>Artico</h3> </Link> 
             </div>
            </div>
          

            <div className="search-bar">
                <input 
                type="text"
                placeholder="Search arts.."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
                 />
                <button className="search-button">🔍</button>
            </div>

            <div className="header-links">
                <div className="cart">
                    <span className="cart-icon"><Link className="link" to={"/cart"}>🛒</Link></span>
                    <span className="cart-count"> 0 </span>
                </div>
                <div className="favorite">
                    <span className="favorite-icon">⭐</span>
                </div>
                <div className="profile">
                    <span className="profile-icon"><Link className="link" to={"/userprofile"}>😀</Link></span>
                </div>
                <div className="profile">
                    <span className="profile-icon"><Link className="link" to={"/profile"}><CgProfile /></Link></span>
                </div>
            </div>
            
        </header>
        
    );
}

export default Header;