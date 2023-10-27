import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {FaBars} from "react-icons/fa"
import {ImCross} from "react-icons/im"


const HeaderNav = () => {

    const [bar, setBar] = useState(false)
    return (
        <>
            <header className="head">
               
                <nav className="navbar">
                    <ul className= {bar ? "nav-links-mobile" : "nav-links" } onClick={()=>setBar(false)}>
                        <li>
                        {/* <a className="logo" href="/">Logo</a> */}
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/aboutme'>AboutMe</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to='/register'>Register</NavLink>
                        </li>
                    </ul>
                    <button className="mobile-bar" onClick={()=>setBar(!bar)}>
                        {bar ? <ImCross/> : <FaBars />}
                        
                    </button>
                    
                </nav>
                
            </header>
           
        </>
        
    );
}
export default HeaderNav;