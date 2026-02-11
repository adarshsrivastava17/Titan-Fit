import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Services.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] } }),
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const services = [
    {
        icon: '🏋️‍♂️', title: 'Strength Training', color: '#ff4d00',
        features: ['Free Weights & Machines', 'Olympic Lifting Platforms', 'Powerlifting Racks', 'Progressive Overload Programs'],
        desc: 'Build raw strength with our comprehensive strength training zone featuring 50+ stations, bumper plates, and dedicated spotting areas.',
    },
    {
        icon: '🫀', title: 'Cardio Zone', color: '#00f0ff',
        features: ['50+ Cardio Machines', 'Heart Rate Monitoring', 'Virtual Running Trails', 'Endurance Programs'],
        desc: 'Elevate your cardiovascular health with treadmills, ellipticals, rowing machines, stair climbers, and spin bikes.',
    },
    {
        icon: '🧘‍♀️', title: 'Yoga & Meditation', color: '#a855f7',
        features: ['Hot Yoga Studio', 'Meditation Room', 'Flexibility Classes', 'Chakra Balancing'],
        desc: 'Find your center in our serene yoga studios with heated floors, ambient lighting, and certified yoga instructors.',
    },
    {
        icon: '⚡', title: 'HIIT & CrossFit', color: '#f59e0b',
        features: ['Functional Training Zone', 'Battle Ropes & Sleds', 'Plyometric Equipment', 'Circuit Training'],
        desc: 'Push your limits with high-intensity interval training designed to maximize calorie burn and build explosive power.',
    },
    {
        icon: '💃', title: 'Group Classes', color: '#ec4899',
        features: ['Zumba & Dance', 'Spinning Classes', 'Body Pump', 'Aqua Aerobics'],
        desc: 'Join energizing group classes led by certified instructors. From Zumba to spinning, find your perfect class.',
    },
    {
        icon: '🥊', title: 'Combat Sports', color: '#10b981',
        features: ['Boxing Ring', 'MMA Cage', 'Heavy Bags Area', 'Sparring Sessions'],
        desc: 'Train like a fighter with boxing, kickboxing, and MMA programs in our dedicated combat sports arena.',
    },
    {
        icon: '🍎', title: 'Nutrition & Diet', color: '#ef4444',
        features: ['Personalized Meal Plans', 'Body Composition Analysis', 'Supplement Guidance', 'Dietary Consultations'],
        desc: 'Achieve your body composition goals with expert nutrition counseling and customized diet plans.',
    },
    {
        icon: '📊', title: 'Personal Training', color: '#6366f1',
        features: ['1-on-1 Sessions', 'Custom Workout Plans', 'Progress Tracking', 'Goal Setting'],
        desc: 'Work directly with certified personal trainers who design programs specifically for your body and goals.',
    },
];

const schedule = [
    { time: '05:00 AM', mon: 'Open Gym', tue: 'Open Gym', wed: 'Open Gym', thu: 'Open Gym', fri: 'Open Gym', sat: '—', sun: '—' },
    { time: '06:00 AM', mon: 'Yoga Flow', tue: 'HIIT Blast', wed: 'Yoga Flow', thu: 'HIIT Blast', fri: 'Yoga Flow', sat: 'Power Yoga', sun: 'Open Gym' },
    { time: '08:00 AM', mon: 'Strength', tue: 'Spin Class', wed: 'Strength', thu: 'Spin Class', fri: 'Strength', sat: 'CrossFit', sun: 'Zumba' },
    { time: '10:00 AM', mon: 'Zumba', tue: 'Boxing', wed: 'Zumba', thu: 'Boxing', fri: 'Zumba', sat: 'MMA', sun: 'Meditation' },
    { time: '05:00 PM', mon: 'CrossFit', tue: 'Body Pump', wed: 'CrossFit', thu: 'Body Pump', fri: 'CrossFit', sat: 'Open Gym', sun: '—' },
    { time: '07:00 PM', mon: 'Boxing', tue: 'Dance Fit', wed: 'MMA', thu: 'Dance Fit', fri: 'Open Gym', sat: '—', sun: '—' },
];

export default function Services() {
    return (
        <main className="services">
            {/* Hero */}
            <section className="services-hero">
                <div className="services-hero__bg">
                    <div className="bg-grid"></div>
                    <div className="services-hero__orb services-hero__orb--1"></div>
                    <div className="services-hero__orb services-hero__orb--2"></div>
                </div>
                <div className="container">
                    <motion.div className="services-hero__content" initial="hidden" animate="visible" variants={stagger}>
                        <motion.div className="section-badge" variants={fadeInUp}>Our Services</motion.div>
                        <motion.h1 className="services-hero__title" variants={fadeInUp}>
                            Programs That <span>Deliver</span>
                        </motion.h1>
                        <motion.p className="services-hero__subtitle" variants={fadeInUp}>
                            From strength to flexibility, cardio to combat — we offer a complete fitness ecosystem designed for every goal.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-grid section">
                <div className="container">
                    <div className="services-grid__list">
                        {services.map((s, i) => (
                            <motion.div
                                key={s.title}
                                className="service-card"
                                style={{ '--svc-color': s.color }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                whileHover={{ y: -10, rotateX: 3, rotateY: -2 }}
                            >
                                <div className="service-card__glow"></div>
                                <div className="service-card__header">
                                    <div className="service-card__icon-wrap">
                                        <span className="service-card__icon">{s.icon}</span>
                                        <div className="service-card__icon-ring"></div>
                                    </div>
                                    <h3 className="service-card__title">{s.title}</h3>
                                </div>
                                <p className="service-card__desc">{s.desc}</p>
                                <ul className="service-card__features">
                                    {s.features.map((f) => (
                                        <li key={f}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/membership" className="service-card__btn">
                                    Get Started
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Schedule */}
            <section className="services-schedule section">
                <div className="container">
                    <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div className="section-badge" variants={fadeInUp}>Weekly Schedule</motion.div>
                        <motion.h2 className="section-title" variants={fadeInUp}>Class <span>Timetable</span></motion.h2>
                        <motion.p className="section-subtitle" variants={fadeInUp}>Plan your week with our diverse range of classes and sessions.</motion.p>
                    </motion.div>

                    <motion.div className="schedule-table-wrap" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <table className="schedule-table">
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Mon</th>
                                    <th>Tue</th>
                                    <th>Wed</th>
                                    <th>Thu</th>
                                    <th>Fri</th>
                                    <th>Sat</th>
                                    <th>Sun</th>
                                </tr>
                            </thead>
                            <tbody>
                                {schedule.map((row) => (
                                    <tr key={row.time}>
                                        <td className="schedule-table__time">{row.time}</td>
                                        <td>{row.mon}</td>
                                        <td>{row.tue}</td>
                                        <td>{row.wed}</td>
                                        <td>{row.thu}</td>
                                        <td>{row.fri}</td>
                                        <td>{row.sat}</td>
                                        <td>{row.sun}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
