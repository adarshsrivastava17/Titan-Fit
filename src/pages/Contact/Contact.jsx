import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] } }),
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const contactInfo = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
        ),
        title: 'Our Location',
        lines: ['123 Fitness Boulevard', 'Downtown, NY 10001', 'United States'],
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
        ),
        title: 'Phone',
        lines: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        title: 'Email',
        lines: ['info@titanfit.com', 'support@titanfit.com'],
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        title: 'Working Hours',
        lines: ['Mon - Fri: 5:00 AM - 11:00 PM', 'Saturday: 6:00 AM - 10:00 PM', 'Sunday: 7:00 AM - 9:00 PM'],
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <main className="contact">
            {/* Hero */}
            <section className="contact-hero">
                <div className="contact-hero__bg">
                    <div className="bg-grid"></div>
                    <div className="contact-hero__orb contact-hero__orb--1"></div>
                    <div className="contact-hero__orb contact-hero__orb--2"></div>
                </div>
                <div className="container">
                    <motion.div className="contact-hero__content" initial="hidden" animate="visible" variants={stagger}>
                        <motion.div className="section-badge" variants={fadeInUp}>Get In Touch</motion.div>
                        <motion.h1 className="contact-hero__title" variants={fadeInUp}>
                            Let's <span>Connect</span>
                        </motion.h1>
                        <motion.p className="contact-hero__subtitle" variants={fadeInUp}>
                            Have questions? Ready to start your fitness journey? Reach out and our team will get back to you within 24 hours.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="contact-info section">
                <div className="container">
                    <div className="contact-info__grid">
                        {contactInfo.map((info, i) => (
                            <motion.div
                                key={info.title}
                                className="contact-info__card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                            >
                                <div className="contact-info__icon">{info.icon}</div>
                                <h3 className="contact-info__title">{info.title}</h3>
                                {info.lines.map((line, j) => (
                                    <p key={j} className="contact-info__line">{line}</p>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form + Map */}
            <section className="contact-main section">
                <div className="container">
                    <div className="contact-main__grid">
                        {/* Form */}
                        <motion.div className="contact-form" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <h2 className="contact-form__title">Send Us a Message</h2>
                            <p className="contact-form__subtitle">Fill out the form below and we'll respond within 24 hours.</p>

                            {submitted && (
                                <motion.div className="contact-form__success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                                    ✅ Thank you! Your message has been sent successfully. We'll be in touch soon!
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="contact-form__form">
                                <div className="contact-form__row">
                                    <div className="contact-form__group">
                                        <label>Full Name</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                                    </div>
                                    <div className="contact-form__group">
                                        <label>Email</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                                    </div>
                                </div>
                                <div className="contact-form__row">
                                    <div className="contact-form__group">
                                        <label>Phone</label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
                                    </div>
                                    <div className="contact-form__group">
                                        <label>Subject</label>
                                        <select name="subject" value={formData.subject} onChange={handleChange} required>
                                            <option value="">Select a topic</option>
                                            <option value="membership">Membership Inquiry</option>
                                            <option value="training">Personal Training</option>
                                            <option value="classes">Group Classes</option>
                                            <option value="corporate">Corporate Plans</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="contact-form__group">
                                    <label>Message</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your fitness goals..." rows="5" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary contact-form__submit">
                                    Send Message
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                                </button>
                            </form>
                        </motion.div>

                        {/* Map placeholder */}
                        <motion.div className="contact-map" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                            <div className="contact-map__card">
                                <div className="contact-map__visual">
                                    <div className="contact-map__pin">
                                        <div className="contact-map__pin-pulse"></div>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--primary)" stroke="none">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                    </div>
                                    <div className="contact-map__grid-visual">
                                        {Array.from({ length: 25 }).map((_, i) => (
                                            <div key={i} className="contact-map__grid-dot" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="contact-map__info">
                                    <h3>Visit TitanFit</h3>
                                    <p>123 Fitness Boulevard, Downtown, NY 10001</p>
                                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: '16px' }}>
                                        Get Directions
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
