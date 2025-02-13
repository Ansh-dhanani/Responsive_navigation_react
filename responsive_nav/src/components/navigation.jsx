import React, { useState, useEffect } from 'react';
import './navigation.css';
import { Squash as Hamburger } from 'hamburger-react';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavClick = () => {
        if (isMobile) {
            setIsOpen(false);
        }
    };

    const menuItems = [
        { href: '#home', label: 'Home', delay: 1 },
        { href: '#about', label: 'About', delay: 2 },
        { href: '#services', label: 'Services', delay: 3 },
        { href: '#portfolio', label: 'Portfolio', delay: 4 },
        { href: '#contact', label: 'Contact', delay: 5 }
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <img src="/vite.svg" alt="Logo" />
            </div>
            
            {isMobile && (
                <div className="menu-toggle">
                    <Hamburger 
                        toggled={isOpen} 
                        toggle={setIsOpen}
                        color="#ffffff"
                        size={20}
                        duration={0.3}
                    />
                </div>
            )}
            
            <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    {menuItems.map((item, index) => (
                        <li 
                            key={item.href}
                            style={{ '--i': item.delay }}
                        >
                            <a 
                                href={item.href} 
                                onClick={handleNavClick}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
