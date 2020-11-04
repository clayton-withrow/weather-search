import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <ul className="main-nav">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink exact to="/Current">Current</NavLink></li>
            <li><NavLink path to ="/Search">Search City</NavLink></li>
            <li><NavLink path to="/Zip">Search Zip</NavLink></li>
            <li><NavLink path to="/Contact">Contact</NavLink></li>
        </ul> 
    </header>
);

export default Header;