import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container">
                <style jsx>
                    {`button[aria-expanded="false"] > .close { display: none; }
                        button[aria-expanded="true"] > .open { display: none; }`}
                </style>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="fas fa-bars open text-dark"></span>
                    <span class="fas fa-times close text-dark"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav fs-5 gap-5">
                        <NavLink to="/" className="nav-link"> Heroes </NavLink>
                        <NavLink activeClassName="active" className="nav-link" to="/location"> Location </NavLink>
                        <NavLink to="/episode" className="nav-link"> Episode </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
