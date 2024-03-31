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
                        <a key={navLink.name}
                            className={`nav-link text-light mx-2 ${currentLink === navLink ? 'active' : ''}`}
                            href={navLink.url}
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentLink(navLink);
                                setCollapsed(true);
                            }}>
                            <span
                            >
                                {navLink.name}
                            </span>
                        </a>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
