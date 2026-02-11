import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__glow"></div>
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo">
                            <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
                                <rect x="4" y="16" width="32" height="8" rx="4" fill="url(#fGrad1)" />
                                <rect x="8" y="10" width="6" height="20" rx="3" fill="url(#fGrad1)" />
                                <rect x="26" y="10" width="6" height="20" rx="3" fill="url(#fGrad1)" />
                                <circle cx="5" cy="20" r="5" fill="url(#fGrad2)" />
                                <circle cx="35" cy="20" r="5" fill="url(#fGrad2)" />
                                <defs>
                                    <linearGradient id="fGrad1" x1="0" y1="0" x2="40" y2="40">
                                        <stop stopColor="#ff4d00" /><stop offset="1" stopColor="#ff6a2a" />
                                    </linearGradient>
                                    <linearGradient id="fGrad2" x1="0" y1="0" x2="40" y2="40">
                                        <stop stopColor="#00f0ff" /><stop offset="1" stopColor="#00c4d1" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="footer__logo-text">TITAN<span>FIT</span></span>
                        </Link>
                        <p className="footer__desc">
                            Transform your body, transform your life. Premium fitness experience with world-class equipment and expert trainers.
                        </p>
                        <div className="footer__socials">
                            {['facebook', 'instagram', 'twitter', 'youtube'].map((s) => (
                                <a key={s} href="#" className="footer__social" aria-label={s}>
                                    {s === 'facebook' && (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                                    )}
                                    {s === 'instagram' && (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" /></svg>
                                    )}
                                    {s === 'twitter' && (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                    )}
                                    {s === 'youtube' && (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" /></svg>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__col-title">Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/facilities">Facilities</Link></li>
                            <li><Link to="/membership">Membership</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__col-title">Programs</h4>
                        <ul>
                            <li><a href="#">Strength Training</a></li>
                            <li><a href="#">Cardio Fitness</a></li>
                            <li><a href="#">Yoga & Meditation</a></li>
                            <li><a href="#">HIIT Workouts</a></li>
                            <li><a href="#">Zumba Classes</a></li>
                            <li><a href="#">Personal Training</a></li>
                        </ul>
                    </div>

                    <div className="footer__col">
                        <h4 className="footer__col-title">Contact</h4>
                        <ul className="footer__contact">
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                123 Fitness Boulevard, Downtown, NY 10001
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                                +1 (555) 123-4567
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                info@titanfit.com
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                Mon-Sat: 5AM - 11PM | Sun: 7AM - 9PM
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>&copy; {currentYear} TitanFit. All rights reserved.</p>
                    <div className="footer__bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
