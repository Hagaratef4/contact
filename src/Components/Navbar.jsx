import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg p-4 fixed-top pb-3">
        <div className=" container text-uppercase">
            <h1 className="navbar-brand fs-2 fw-bold">Start Framework</h1>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0  d-flex justify-content-end gap-2">
                    <li className="nav-item">
                        <NavLink className="nav-link text-uppercase fw-bold " to="/about">about</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-uppercase fw-bold"  to="/portfolio">portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-uppercase fw-bold" to="/contact">contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    );
}

export default Navbar;