import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/facilities', label: 'Facilities' },
    { path: '/membership', label: 'Membership' },
    { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="navbar__container container">
                <Link to="/" className="navbar__logo">
                    <div className="navbar__logo-icon">
                        <svg viewBox="0 0 40 40" fill="none">
                            <rect x="4" y="16" width="32" height="8" rx="4" fill="url(#grad1)" />
                            <rect x="8" y="10" width="6" height="20" rx="3" fill="url(#grad1)" />
                            <rect x="26" y="10" width="6" height="20" rx="3" fill="url(#grad1)" />
                            <circle cx="5" cy="20" r="5" fill="url(#grad2)" />
                            <circle cx="35" cy="20" r="5" fill="url(#grad2)" />
                            <defs>
                                <linearGradient id="grad1" x1="0" y1="0" x2="40" y2="40">
                                    <stop stopColor="#ff4d00" />
                                    <stop offset="1" stopColor="#ff6a2a" />
                                </linearGradient>
                                <linearGradient id="grad2" x1="0" y1="0" x2="40" y2="40">
                                    <stop stopColor="#00f0ff" />
                                    <stop offset="1" stopColor="#00c4d1" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <span className="navbar__logo-text">
                        TITAN<span className="navbar__logo-accent">FIT</span>
                    </span>
                </Link>

                <div className="navbar__links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                        >
                            {link.label}
                            {location.pathname === link.path && (
                                <motion.div
                                    className="navbar__link-indicator"
                                    layoutId="navIndicator"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </div>

                <Link to="/membership" className="navbar__cta btn btn-primary">
                    Join Now
                </Link>

                <button
                    className={`navbar__hamburger ${isOpen ? 'navbar__hamburger--active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="navbar__mobile"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="navbar__mobile-links">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`navbar__mobile-link ${location.pathname === link.path ? 'navbar__mobile-link--active' : ''}`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.08 }}
                            >
                                <Link to="/membership" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                                    Join Now
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
