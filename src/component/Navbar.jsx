import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ contactRef }) => {
    const [menu, setMenu] = useState("home");
    const [showSocials, setShowSocials] = useState(false);

    // Function to scroll to the contact section
    const scrollContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const socialList = [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/ina-youn-b7553a274/" },
        { name: "Github", url: "https://github.com/Inaaaaaaaaaa" },
    ];

    return (
        <div className="Background">
            <ul className="navbar-menu">
                <li onClick={() => setMenu("home")}>Home</li>
                <li onClick={() => setMenu("aboutme")}>About me</li>
                <li onClick={() => setMenu("projects")}>Projects</li>
                <li onClick={() => { setMenu("contact"); scrollContact(); }}>Contact me</li>

                <li onClick={() => {
                    setShowSocials(!showSocials);
                    setMenu("socials");
                }} 
                className={showSocials ? "no-underline" : ""}>
                    Socials
                    {showSocials && (
                        <ul className="socials-dropdown">
                            {socialList.map((social) => (
                                <li key={social.name}>
                                    <a href={social.url} target="_blank" rel="noopener noreferrer">{social.name}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
