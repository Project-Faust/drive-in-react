import React, { useState } from 'react';

export default function NavBar({ navLinks = [], currentLink, setCurrentLink }) {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setCollapsed(!collapsed)}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarNav">
                <ul className={`navbar-nav ${collapsed ? 'mx-auto' : ''} text-center`}>
                    {navLinks.map((navLink) => (
                        <li key={navLink.name} className="nav-item">
                            <a
                                className={`nav-link text-light ${currentLink === navLink ? 'active' : ''}`}
                                href={navLink.url}
                                onClick={() => {
                                    setCurrentLink(navLink);
                                    setCollapsed(true);
                                }}
                            >
                                {navLink.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
