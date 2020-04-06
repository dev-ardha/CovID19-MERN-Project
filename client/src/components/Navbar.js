import React, { Component } from 'react'

import {NavLink} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <NavLink to="/" exact className="navlink text-white" activeClassName="active">
                    Beranda
                </NavLink>
                <NavLink to="/panduan" exact className="navlink text-white" activeClassName="active">
                    Panduan
                </NavLink>
                <NavLink to="/tanyakan" exact className="navlink text-white" activeClassName="active">
                    Tanyakan
                </NavLink>
                <NavLink to="/about" exact className="navlink text-white" activeClassName="active">
                    About
                </NavLink>
                {/* <a href="https://github.com/ardhayudhatama" className="navlink text-white"><GitHubIcon/></a> */}
            </div>
        )
    }
}

export default Navbar;