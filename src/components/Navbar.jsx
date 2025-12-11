import React from 'react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-logo">David Cabezas</div>
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle Dark Mode"
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
