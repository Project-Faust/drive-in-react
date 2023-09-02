export default function NavBar({ navLinks = [], currentLink, setCurrentLink }) {
    return (
        <ul id="navBarContainer" className="nav nav-tabs sticky-top justify-content-center bg-light">
            {navLinks.map((navLink) => (
                <li key={navLink.name} className="nav-item">
                    <a
                        className={`nav-link text-dark ${currentLink === navLink ? 'active' : ''}`}
                        href={navLink.url}
                        onClick={() => {
                            setCurrentLink(navLink);
                        }}
                    >
                        {navLink.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};