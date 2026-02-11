import { motion } from 'framer-motion';
import './Facilities.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] } }),
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const zones = [
    {
        title: 'Strength Arena',
        icon: '🏋️',
        color: '#ff4d00',
        items: ['Power Racks', 'Smith Machines', 'Cable Crossovers', 'Olympic Platforms', 'Dumbbells 5-150lbs', 'Plate-Loaded Machines'],
        area: '5,000 sq ft',
    },
    {
        title: 'Cardio Deck',
        icon: '🏃',
        color: '#00f0ff',
        items: ['Treadmills', 'Ellipticals', 'Rowing Machines', 'Stair Climbers', 'Assault Bikes', 'Spin Bikes'],
        area: '3,500 sq ft',
    },
    {
        title: 'Functional Zone',
        icon: '⚡',
        color: '#f59e0b',
        items: ['TRX Systems', 'Battle Ropes', 'Plyo Boxes', 'Kettlebells', 'Sand Bags', 'Resistance Bands'],
        area: '2,500 sq ft',
    },
    {
        title: 'Combat Arena',
        icon: '🥊',
        color: '#10b981',
        items: ['Boxing Ring', 'MMA Cage', 'Heavy Bags', 'Speed Bags', 'Grappling Mats', 'Focus Mitts'],
        area: '2,000 sq ft',
    },
    {
        title: 'Mind-Body Studio',
        icon: '🧘',
        color: '#a855f7',
        items: ['Heated Studio', 'Meditation Room', 'Barre Area', 'Yoga Props', 'Mirror Walls', 'Sound System'],
        area: '1,800 sq ft',
    },
    {
        title: 'Group Fitness Hall',
        icon: '💃',
        color: '#ec4899',
        items: ['Dance Floor', 'Stage Platform', 'LED Lighting', '360° Mirrors', 'Premium Audio', 'Ventilation System'],
        area: '2,200 sq ft',
    },
];

const amenities = [
    { icon: '🚿', title: 'Luxury Locker Rooms', desc: 'Spacious lockers, rain showers, grooming stations, and complimentary towels.' },
    { icon: '♨️', title: 'Steam & Sauna', desc: 'Finnish sauna and eucalyptus steam rooms for deep relaxation and recovery.' },
    { icon: '❄️', title: 'Cold Plunge Pool', desc: 'Ice-cold plunge pools for athletic recovery, inflammation reduction, and mental clarity.' },
    { icon: '💆', title: 'Massage Therapy', desc: 'On-site licensed massage therapists for sports massage and deep tissue recovery.' },
    { icon: '🥤', title: 'Juice & Smoothie Bar', desc: 'Freshly made protein shakes, smoothies, and healthy snacks post-workout.' },
    { icon: '📱', title: 'Smart App Access', desc: 'Book classes, track progress, manage membership, and connect with trainers via our app.' },
    { icon: '🅿️', title: 'Free Parking', desc: 'Complimentary indoor parking for all members with EV charging stations.' },
    { icon: '👶', title: 'Kids Zone', desc: 'Supervised play area so parents can work out with peace of mind.' },
];

const floorStats = [
    { value: '20,000+', label: 'Total Sq Ft' },
    { value: '200+', label: 'Equipment Units' },
    { value: '6', label: 'Training Zones' },
    { value: '24/7', label: 'Access Hours' },
];

export default function Facilities() {
    return (
        <main className="facilities">
            {/* Hero */}
            <section className="facilities-hero">
                <div className="facilities-hero__bg">
                    <div className="bg-grid"></div>
                    <div className="facilities-hero__orb facilities-hero__orb--1"></div>
                    <div className="facilities-hero__orb facilities-hero__orb--2"></div>
                </div>
                <div className="container">
                    <motion.div className="facilities-hero__content" initial="hidden" animate="visible" variants={stagger}>
                        <motion.div className="section-badge" variants={fadeInUp}>World-Class Facilities</motion.div>
                        <motion.h1 className="facilities-hero__title" variants={fadeInUp}>
                            Built For <span>Greatness</span>
                        </motion.h1>
                        <motion.p className="facilities-hero__subtitle" variants={fadeInUp}>
                            20,000+ sq ft of state-of-the-art training space, premium equipment, and luxury amenities — all designed for peak performance.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Floor Stats */}
            <section className="facilities-stats">
                <div className="container">
                    <div className="facilities-stats__grid">
                        {floorStats.map((s, i) => (
                            <motion.div key={s.label} className="facilities-stats__item" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                <span className="facilities-stats__value">{s.value}</span>
                                <span className="facilities-stats__label">{s.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Training Zones */}
            <section className="facilities-zones section">
                <div className="container">
                    <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div className="section-badge" variants={fadeInUp}>Training Zones</motion.div>
                        <motion.h2 className="section-title" variants={fadeInUp}>Dedicated <span>Spaces</span></motion.h2>
                        <motion.p className="section-subtitle" variants={fadeInUp}>Six specialized zones, each engineered for a different dimension of fitness.</motion.p>
                    </motion.div>

                    <div className="facilities-zones__grid">
                        {zones.map((z, i) => (
                            <motion.div
                                key={z.title}
                                className="zone-card"
                                style={{ '--zone-color': z.color }}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10, rotateX: 4 }}
                            >
                                <div className="zone-card__header">
                                    <div className="zone-card__icon-wrap">
                                        <span className="zone-card__icon">{z.icon}</span>
                                        <div className="zone-card__pulse"></div>
                                    </div>
                                    <div>
                                        <h3 className="zone-card__title">{z.title}</h3>
                                        <span className="zone-card__area">{z.area}</span>
                                    </div>
                                </div>
                                <ul className="zone-card__items">
                                    {z.items.map((item) => (
                                        <li key={item}>
                                            <span className="zone-card__dot"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="zone-card__3d-bg">
                                    <div className="zone-card__3d-shape"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Amenities */}
            <section className="facilities-amenities section">
                <div className="container">
                    <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div className="section-badge" variants={fadeInUp}>Premium Amenities</motion.div>
                        <motion.h2 className="section-title" variants={fadeInUp}>Beyond <span>Training</span></motion.h2>
                        <motion.p className="section-subtitle" variants={fadeInUp}>Luxury amenities that elevate your fitness experience from ordinary to extraordinary.</motion.p>
                    </motion.div>

                    <div className="facilities-amenities__grid">
                        {amenities.map((a, i) => (
                            <motion.div
                                key={a.title}
                                className="amenity-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ y: -6, scale: 1.02 }}
                            >
                                <div className="amenity-card__icon">{a.icon}</div>
                                <h3 className="amenity-card__title">{a.title}</h3>
                                <p className="amenity-card__desc">{a.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Virtual Tour CTA */}
            <section className="facilities-tour section">
                <div className="container">
                    <motion.div className="facilities-tour__card" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div className="facilities-tour__3d">
                            <div className="facilities-tour__cube">
                                <div className="facilities-tour__face facilities-tour__face--front">🏋️</div>
                                <div className="facilities-tour__face facilities-tour__face--back">💪</div>
                                <div className="facilities-tour__face facilities-tour__face--left">🥊</div>
                                <div className="facilities-tour__face facilities-tour__face--right">🧘</div>
                                <div className="facilities-tour__face facilities-tour__face--top">⚡</div>
                                <div className="facilities-tour__face facilities-tour__face--bottom">🫀</div>
                            </div>
                        </div>
                        <div className="facilities-tour__text">
                            <h2>Experience Our Facility</h2>
                            <p>Can't visit in person? Take a virtual walkthrough of our 20,000+ sq ft facility and see what makes TitanFit the ultimate training destination.</p>
                            <a href="#" className="btn btn-primary">Take a Virtual Tour</a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
