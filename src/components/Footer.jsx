import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p>&copy; {new Date().getFullYear()} TobbenTT. Todos los derechos reservados.</p>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/david-cabezas-a91554284" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:david.cabezas.armando@gmail.com">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
