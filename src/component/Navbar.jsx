import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [showSocials, setShowSocials] = useState(false); // Visibility of the socials dropdown

    // Socials list
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
                <li onClick={() => setMenu("contact")}>Contact form</li>
             </ul>
        </div>
    );
};

export default Navbar;
