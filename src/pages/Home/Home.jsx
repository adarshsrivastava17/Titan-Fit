import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './Home.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
    }),
};

const stagger = {
    visible: { transition: { staggerChildren: 0.12 } },
};

const programs = [
    {
        icon: '🏋️',
        title: 'Strength Training',
        desc: 'Build raw power with Olympic lifts, powerlifting, and progressive overload techniques.',
        color: '#ff4d00',
        animation: 'strength',
    },
    {
        icon: '🫀',
        title: 'Cardio Blast',
        desc: 'Boost endurance with treadmills, cycling, rowing, and heart-pumping circuits.',
        color: '#00f0ff',
        animation: 'cardio',
    },
    {
        icon: '🧘',
        title: 'Yoga & Flexibility',
        desc: 'Restore balance with guided yoga, stretching sessions, and mindful movement.',
        color: '#a855f7',
        animation: 'yoga',
    },
    {
        icon: '⚡',
        title: 'HIIT Workouts',
        desc: 'Maximize fat burn with high-intensity interval training and metabolic circuits.',
        color: '#f59e0b',
        animation: 'hiit',
    },
    {
        icon: '💃',
        title: 'Zumba Dance',
        desc: 'Dance your way to fitness with energetic Latin-inspired choreography.',
        color: '#ec4899',
        animation: 'zumba',
    },
    {
        icon: '🥊',
        title: 'Boxing & MMA',
        desc: 'Learn combat skills while building explosive speed, agility, and confidence.',
        color: '#10b981',
        animation: 'boxing',
    },
];

const stats = [
    { number: '15K+', label: 'Active Members' },
    { number: '50+', label: 'Expert Trainers' },
    { number: '200+', label: 'Equipment Units' },
    { number: '98%', label: 'Satisfaction Rate' },
];

const testimonials = [
    {
        name: 'Marcus Chen',
        role: 'Professional Athlete',
        text: "TitanFit completely transformed my training regimen. The equipment quality and trainer expertise are world-class. I've achieved PBs I never thought possible.",
        rating: 5,
    },
    {
        name: 'Sarah Williams',
        role: 'Fitness Enthusiast',
        text: "From the moment I walked in, I knew this was different. The atmosphere, the community, the results — everything about TitanFit is premium. Down 30lbs and feeling incredible!",
        rating: 5,
    },
    {
        name: 'David Park',
        role: 'Business Executive',
        text: "The 24/7 access and personalized programs fit perfectly into my busy schedule. The sauna and recovery facilities are the cherry on top. Best investment in myself.",
        rating: 5,
    },
];

export default function Home() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <main className="home">
            {/* ===== HERO ===== */}
            <section className="hero" ref={heroRef}>
                <div className="hero__bg">
                    <div className="hero__grid bg-grid"></div>
                    <div className="hero__orb hero__orb--1"></div>
                    <div className="hero__orb hero__orb--2"></div>
                    <div className="hero__orb hero__orb--3"></div>
                    <div className="hero__particles">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div
                                key={i}
                                className="hero__particle"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${3 + Math.random() * 4}s`,
                                }}
                            />
                        ))}
                    </div>
                </div>

                <motion.div
                    className="hero__content container"
                    style={{ y: heroY, opacity: heroOpacity }}
                >
                    <motion.div
                        className="hero__text"
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >
                        <motion.div className="hero__badge" variants={fadeInUp}>
                            <span className="hero__badge-dot"></span>
                            #1 Premium Fitness Center
                        </motion.div>

                        <motion.h1 className="hero__title" variants={fadeInUp}>
                            FORGE YOUR
                            <br />
                            <span className="hero__title-gradient">STRONGEST</span>
                            <br />
                            SELF
                        </motion.h1>

                        <motion.p className="hero__subtitle" variants={fadeInUp}>
                            State-of-the-art equipment. World-class trainers. Results-driven programs.
                            Your transformation journey starts here.
                        </motion.p>

                        <motion.div className="hero__actions" variants={fadeInUp}>
                            <Link to="/membership" className="btn btn-primary btn--lg">
                                Start Your Journey
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link to="/services" className="btn btn-outline btn--lg">
                                Explore Programs
                            </Link>
                        </motion.div>

                        <motion.div className="hero__stats" variants={fadeInUp}>
                            {stats.map((stat) => (
                                <div key={stat.label} className="hero__stat">
                                    <span className="hero__stat-number">{stat.number}</span>
                                    <span className="hero__stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="hero__visual"
                        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="hero__3d-card">
                            <div className="hero__3d-inner">
                                <div className="hero__3d-ring hero__3d-ring--1"></div>
                                <div className="hero__3d-ring hero__3d-ring--2"></div>
                                <div className="hero__3d-ring hero__3d-ring--3"></div>
                                <div className="hero__3d-icon">
                                    <svg viewBox="0 0 120 120" fill="none">
                                        <circle cx="60" cy="60" r="55" stroke="url(#heroGrad)" strokeWidth="3" strokeDasharray="8 4" />
                                        <rect x="20" y="50" width="80" height="20" rx="10" fill="url(#heroGrad)" opacity="0.8" />
                                        <rect x="30" y="35" width="15" height="50" rx="7" fill="url(#heroGrad)" />
                                        <rect x="75" y="35" width="15" height="50" rx="7" fill="url(#heroGrad)" />
                                        <circle cx="15" cy="60" r="12" fill="url(#heroGrad2)" opacity="0.9" />
                                        <circle cx="105" cy="60" r="12" fill="url(#heroGrad2)" opacity="0.9" />
                                        <defs>
                                            <linearGradient id="heroGrad" x1="0" y1="0" x2="120" y2="120">
                                                <stop stopColor="#ff4d00" /><stop offset="1" stopColor="#ff6a2a" />
                                            </linearGradient>
                                            <linearGradient id="heroGrad2" x1="0" y1="0" x2="120" y2="120">
                                                <stop stopColor="#00f0ff" /><stop offset="1" stopColor="#00c4d1" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <div className="hero__scroll-indicator">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                    </motion.div>
                </div>
            </section>

            {/* ===== PROGRAMS ===== */}
            <section className="programs section">
                <div className="programs__bg-glow"></div>
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={stagger}
                    >
                        <motion.div className="section-badge" variants={fadeInUp}>Our Programs</motion.div>
                        <motion.h2 className="section-title" variants={fadeInUp}>
                            Train Like A <span>Champion</span>
                        </motion.h2>
                        <motion.p className="section-subtitle" variants={fadeInUp}>
                            Choose from our diverse range of training programs designed by certified experts to help you reach your peak potential.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="programs__grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        variants={stagger}
                    >
                        {programs.map((prog, i) => (
                            <motion.div
                                key={prog.title}
                                className="program-card"
                                variants={fadeInUp}
                                custom={i}
                                whileHover={{ y: -12, rotateX: 5, rotateY: -5 }}
                                style={{ '--card-color': prog.color }}
                            >
                                <div className="program-card__glow"></div>
                                <div className="program-card__animation">
                                    <div className={`program-card__anim program-card__anim--${prog.animation}`}></div>
                                </div>
                                <div className="program-card__icon">{prog.icon}</div>
                                <h3 className="program-card__title">{prog.title}</h3>
                                <p className="program-card__desc">{prog.desc}</p>
                                <Link to="/services" className="program-card__link">
                                    Learn More
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== WHY CHOOSE US ===== */}
            <section className="why section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={stagger}
                    >
                        <motion.div className="section-badge" variants={fadeInUp}>Why TitanFit</motion.div>
                        <motion.h2 className="section-title" variants={fadeInUp}>
                            Built For <span>Results</span>
                        </motion.h2>
                        <motion.p className="section-subtitle" variants={fadeInUp}>
                            We don't just build gyms — we build transformative fitness ecosystems.
                        </motion.p>
                    </motion.div>

                    <div className="why__grid">
                        {[
                            {
                                icon: (
                                    <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" stroke="#ff4d00" strokeWidth="2" strokeDasharray="4 3" /><path d="M16 24l6 6 10-12" stroke="#ff4d00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                ),
                                title: 'Personalized Plans',
                                desc: 'Custom workout and nutrition plans tailored to your body type, goals, and lifestyle.',
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 48 48" fill="none"><rect x="4" y="8" width="40" height="32" rx="4" stroke="#00f0ff" strokeWidth="2" /><circle cx="24" cy="24" r="10" stroke="#00f0ff" strokeWidth="2" /><path d="M24 18v6l4 4" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" /></svg>
                                ),
                                title: '24/7 Access',
                                desc: 'Train on your schedule with round-the-clock facility access and smart key entry.',
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 48 48" fill="none"><path d="M24 4l6 12 13 2-9 9 2 13-12-6-12 6 2-13-9-9 13-2z" stroke="#a855f7" strokeWidth="2" strokeLinejoin="round" /></svg>
                                ),
                                title: 'Elite Equipment',
                                desc: 'Over 200+ pieces of top-tier equipment from Technogym, Life Fitness, and Hammer Strength.',
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="10" stroke="#f59e0b" strokeWidth="2" /><path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#f59e0b" strokeWidth="2" /></svg>
                                ),
                                title: 'Expert Trainers',
                                desc: '50+ certified trainers with specializations across strength, cardio, yoga, and combat sports.',
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 48 48" fill="none"><path d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4z" stroke="#ec4899" strokeWidth="2" /><path d="M24 14v10l7 7" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" /></svg>
                                ),
                                title: 'Progress Tracking',
                                desc: 'Advanced body composition analysis and digital tracking to monitor your transformation.',
                            },
                            {
                                icon: (
                                    <svg viewBox="0 0 48 48" fill="none"><path d="M24 8c-5.5 0-10 4-10 10 0 10 10 22 10 22s10-12 10-22c0-6-4.5-10-10-10z" stroke="#10b981" strokeWidth="2" /><circle cx="24" cy="18" r="4" stroke="#10b981" strokeWidth="2" /></svg>
                                ),
                                title: 'Recovery Zone',
                                desc: 'Steam rooms, saunas, cold plunge pools, and massage therapy for optimal recovery.',
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                className="why__card"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.04, rotateX: 3 }}
                            >
                                <div className="why__card-icon">{item.icon}</div>
                                <h3 className="why__card-title">{item.title}</h3>
                                <p className="why__card-desc">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="testimonials section">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={stagger}
                    >
                        <motion.div className="section-badge" variants={fadeInUp}>Testimonials</motion.div>
                        <motion.h2 className="section-title" variants={fadeInUp}>
                            Real Results, <span>Real People</span>
                        </motion.h2>
                        <motion.p className="section-subtitle" variants={fadeInUp}>
                            Hear from members who've transformed their lives with TitanFit.
                        </motion.p>
                    </motion.div>

                    <div className="testimonials__grid">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={t.name}
                                className="testimonial-card"
                                initial={{ opacity: 0, y: 40, rotateX: -10 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                whileHover={{ y: -8 }}
                            >
                                <div className="testimonial-card__stars">
                                    {Array.from({ length: t.rating }).map((_, j) => (
                                        <span key={j}>⭐</span>
                                    ))}
                                </div>
                                <p className="testimonial-card__text">"{t.text}"</p>
                                <div className="testimonial-card__author">
                                    <div className="testimonial-card__avatar">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="testimonial-card__name">{t.name}</h4>
                                        <p className="testimonial-card__role">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="cta section">
                <div className="cta__bg">
                    <div className="cta__orb cta__orb--1"></div>
                    <div className="cta__orb cta__orb--2"></div>
                </div>
                <div className="container">
                    <motion.div
                        className="cta__content"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="cta__title">
                            Ready to <span>Transform</span> Your Body?
                        </h2>
                        <p className="cta__subtitle">
                            Join 15,000+ members who chose TitanFit for their fitness journey. Start your free 7-day trial today.
                        </p>
                        <div className="cta__actions">
                            <Link to="/membership" className="btn btn-primary btn--lg">
                                Get Started Free
                            </Link>
                            <Link to="/contact" className="btn btn-outline btn--lg">
                                Talk to a Trainer
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
