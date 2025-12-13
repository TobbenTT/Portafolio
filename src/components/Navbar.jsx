import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Prevent scrolling when menu is open
        document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
    };

    const navLinks = [
        { name: 'Inicio', href: '#home' },
        { name: 'Filosofía', href: '#philosophy' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Habilidades', href: '#stack' },
        { name: 'Trayectoria', href: '#trajectory' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-logo">David Cabezas</div>

                {/* Desktop Links */}
                <ul className="navbar-links">
                    {navLinks.map(link => (
                        <li key={link.name}>
                            <a href={link.href} className="nav-link">{link.name}</a>
                        </li>
                    ))}
                </ul>

                <div className="navbar-controls">
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>

                    {/* Mobile Hamburger Button */}
                    <button
                        className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle Mobile Menu"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                {navLinks.map(link => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="mobile-nav-link"
                        onClick={closeMenu}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
