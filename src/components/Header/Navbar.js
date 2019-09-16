import React from 'react';
import {NavLink} from "react-router-dom"; 
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
            <nav>
                <ul>
                    <li><NavLink to="/">Transaction</NavLink></li>
                    <li><NavLink to="/category">Category</NavLink></li>
                </ul>
            </nav>
            )
}

export default Navbar;
