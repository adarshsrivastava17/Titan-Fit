import { motion } from 'framer-motion';
import './About.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
    }),
};

const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const team = [
    { name: 'James Rodriguez', role: 'Head Trainer & Founder', specialty: 'Strength & Conditioning', exp: '15+ Years', color: '#ff4d00' },
    { name: 'Emily Carter', role: 'Yoga & Wellness Director', specialty: 'Yoga, Pilates, Meditation', exp: '12+ Years', color: '#a855f7' },
    { name: 'Michael Torres', role: 'Nutrition Specialist', specialty: 'Sports Nutrition & Diet', exp: '10+ Years', color: '#00f0ff' },
    { name: 'Sophie Anderson', role: 'HIIT & Cardio Lead', specialty: 'HIIT, CrossFit, Cycling', exp: '8+ Years', color: '#f59e0b' },
    { name: 'David Kim', role: 'Combat Sports Coach', specialty: 'Boxing, MMA, Kickboxing', exp: '14+ Years', color: '#10b981' },
    { name: 'Lisa Chen', role: 'Group Fitness Manager', specialty: 'Zumba, Dance, Aerobics', exp: '9+ Years', color: '#ec4899' },
];

const values = [
    { icon: '🎯', title: 'Results-Driven', desc: 'Every program is designed with measurable outcomes. We track, analyze, and optimize your progress continuously.' },
    { icon: '🤝', title: 'Community First', desc: 'More than a gym — a family. Our supportive community motivates you to show up and give your best every day.' },
    { icon: '🔬', title: 'Science-Based', desc: 'Our methods are grounded in exercise science, biomechanics, and nutrition research for maximum effectiveness.' },
    { icon: '💎', title: 'Premium Quality', desc: 'From equipment to trainers to facilities — we invest in the best so you get nothing less than excellence.' },
];

const milestones = [
    { year: '2015', event: 'TitanFit Founded', desc: 'Started with a 3,000 sq ft space and a dream to revolutionize fitness.' },
    { year: '2017', event: 'Expanded Facilities', desc: 'Grew to 15,000 sq ft with dedicated zones for every training style.' },
    { year: '2019', event: '5,000 Members', desc: 'Crossed 5K active members and launched our digital tracking platform.' },
    { year: '2021', event: 'Recovery Center', desc: 'Added premium recovery facilities — sauna, steam, cryotherapy.' },
    { year: '2023', event: 'Award Winning', desc: 'Named "Best Fitness Center" by National Health & Wellness Awards.' },
    { year: '2025', event: '15K+ Members', desc: 'Growing strong with 15,000+ members and 50+ expert trainers.' },
];

export default function About() {
    return (
        <main className="about">
            {/* Hero */}
            <section className="about-hero">
                <div className="about-hero__bg">
                    <div className="bg-grid"></div>
                    <div className="about-hero__orb about-hero__orb--1"></div>
                    <div className="about-hero__orb about-hero__orb--2"></div>
                </div>
                <div className="container">
                    <motion.div className="about-hero__content" initial="hidden" animate="visible" variants={stagger}>
                        <motion.div className="section-badge" variants={fadeInUp}>Our Story</motion.div>
                        <motion.h1 className="about-hero__title" variants={fadeInUp}>
                            Where <span>Passion</span> Meets <span>Performance</span>
                        </motion.h1>
                        <motion.p className="about-hero__subtitle" variants={fadeInUp}>
                            Founded in 2015, TitanFit was born from a simple belief: everyone deserves access to
                            world-class fitness. Today, we're the premier destination for those who demand excellence
                            in their health and wellness journey.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Mission / Vision */}
            <section className="about-mission section">
                <div className="container">
                    <div className="about-mission__grid">
                        <motion.div className="about-mission__card" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <div className="about-mission__card-icon">
                                <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" stroke="#ff4d00" strokeWidth="2" /><circle cx="24" cy="24" r="12" stroke="#ff4d00" strokeWidth="2" /><circle cx="24" cy="24" r="4" fill="#ff4d00" /></svg>
                            </div>
                            <h3>Our Mission</h3>
                            <p>To empower individuals to transform their bodies and minds through innovative fitness programs, expert guidance, and a world-class training environment that inspires excellence.</p>
                        </motion.div>
                        <motion.div className="about-mission__card" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                            <div className="about-mission__card-icon">
                                <svg viewBox="0 0 48 48" fill="none"><path d="M24 4l4 8 8 2-6 6 1 9-7-4-7 4 1-9-6-6 8-2z" stroke="#00f0ff" strokeWidth="2" strokeLinejoin="round" /><circle cx="24" cy="36" r="8" stroke="#00f0ff" strokeWidth="2" /></svg>
                            </div>
                            <h3>Our Vision</h3>
                            <p>To become the global benchmark for premium fitness, creating a movement where health and strength are accessible to all — building a healthier, stronger, more confident society.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="about-values section">
                <div className="container">
                    <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div className="section-badge" variants={fadeInUp}>Our Values</motion.div>
                        <motion.h2 className="section-title" variants={fadeInUp}>What <span>Drives</span> Us</motion.h2>
                    </motion.div>
                    <div className="about-values__grid">
                        {values.map((v, i) => (
                            <motion.div key={v.title} className="about-values__card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10, rotateX: 5 }}>
                                <div className="about-values__icon">{v.icon}</div>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="about-timeline section">
                <div className="container">
                    <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div className="section-badge" variants={fadeInUp}>Our Journey</motion.div>
                        <motion.h2 className="section-title" variants={fadeInUp}>The <span>TitanFit</span> Story</motion.h2>
                    </motion.div>
                    <div className="about-timeline__list">
                        {milestones.map((m, i) => (
                            <motion.div key={m.year} className={`about-timeline__item ${i % 2 === 0 ? 'about-timeline__item--left' : 'about-timeline__item--right'}`} initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}>
                                <div className="about-timeline__dot"></div>
                                <div className="about-timeline__card">
                                    <span className="about-timeline__year">{m.year}</span>
                                    <h4>{m.event}</h4>
                                    <p>{m.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="about-team section">
                <div className="container">
                    <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div className="section-badge" variants={fadeInUp}>Expert Trainers</motion.div>
                        <motion.h2 className="section-title" variants={fadeInUp}>Meet The <span>Champions</span></motion.h2>
                        <motion.p className="section-subtitle" variants={fadeInUp}>
                            Our certified trainers bring diverse expertise and unwavering passion to every session.
                        </motion.p>
                    </motion.div>
                    <div className="about-team__grid">
                        {team.map((t, i) => (
                            <motion.div key={t.name} className="about-team__card" style={{ '--team-color': t.color }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -12, rotateY: 5 }}>
                                <div className="about-team__avatar">
                                    <div className="about-team__avatar-ring"></div>
                                    <span>{t.name.split(' ').map(n => n[0]).join('')}</span>
                                </div>
                                <h3 className="about-team__name">{t.name}</h3>
                                <p className="about-team__role">{t.role}</p>
                                <div className="about-team__details">
                                    <div className="about-team__detail">
                                        <span className="about-team__detail-label">Specialty</span>
                                        <span className="about-team__detail-value">{t.specialty}</span>
                                    </div>
                                    <div className="about-team__detail">
                                        <span className="about-team__detail-label">Experience</span>
                                        <span className="about-team__detail-value">{t.exp}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
