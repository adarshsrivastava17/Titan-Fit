import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Membership.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] } }),
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const plans = [
    {
        name: 'Starter',
        price: 29,
        period: 'month',
        color: '#6366f1',
        popular: false,
        features: [
            { text: 'Full Gym Access', included: true },
            { text: 'Locker Room & Showers', included: true },
            { text: 'Free WiFi', included: true },
            { text: 'Fitness Assessment', included: true },
            { text: 'Group Classes', included: false },
            { text: 'Personal Training', included: false },
            { text: 'Sauna & Steam', included: false },
            { text: 'Nutrition Plan', included: false },
        ],
    },
    {
        name: 'Pro',
        price: 59,
        period: 'month',
        color: '#ff4d00',
        popular: true,
        features: [
            { text: 'Full Gym Access 24/7', included: true },
            { text: 'Locker Room & Showers', included: true },
            { text: 'All Group Classes', included: true },
            { text: 'Fitness Assessment', included: true },
            { text: '2x Personal Training/mo', included: true },
            { text: 'Sauna & Steam', included: true },
            { text: 'Progress Tracking App', included: true },
            { text: 'Nutrition Plan', included: false },
        ],
    },
    {
        name: 'Elite',
        price: 99,
        period: 'month',
        color: '#00f0ff',
        popular: false,
        features: [
            { text: 'Full Gym Access 24/7', included: true },
            { text: 'Premium Locker', included: true },
            { text: 'Unlimited Classes', included: true },
            { text: 'Weekly Personal Training', included: true },
            { text: 'Sauna, Steam & Cold Plunge', included: true },
            { text: 'Custom Nutrition Plan', included: true },
            { text: 'Priority Booking', included: true },
            { text: 'Guest Passes (2/mo)', included: true },
        ],
    },
];

const faqs = [
    { q: 'Can I freeze my membership?', a: 'Yes, you can freeze your membership for up to 3 months per year at no additional cost. Simply contact our front desk or use the app.' },
    { q: 'Is there a joining fee?', a: 'We occasionally run promotions with waived joining fees. The standard joining fee is $49, which includes your fitness assessment and onboarding session.' },
    { q: 'Can I upgrade or downgrade my plan?', a: 'Absolutely! You can change your plan at any time. Changes take effect at the start of your next billing cycle.' },
    { q: 'What\'s your cancellation policy?', a: 'You can cancel anytime with 30 days notice. No hidden fees or cancellation penalties — we believe in earning your membership.' },
    { q: 'Do you offer family or corporate plans?', a: 'Yes! We offer family bundles with up to 20% discount and corporate partnerships. Contact us for customized corporate wellness packages.' },
    { q: 'What\'s included in the free trial?', a: 'Your 7-day free trial includes full gym access, one group class, and a complimentary fitness assessment. No credit card required to start.' },
];

export default function Membership() {
    const [openFaq, setOpenFaq] = useState(null);
    const [billing, setBilling] = useState('monthly');

    return (
        <main className="membership">
            {/* Hero */}
            <section className="membership-hero">
                <div className="membership-hero__bg">
                    <div className="bg-grid"></div>
                    <div className="membership-hero__orb membership-hero__orb--1"></div>
                    <div className="membership-hero__orb membership-hero__orb--2"></div>
                </div>
                <div className="container">
                    <motion.div className="membership-hero__content" initial="hidden" animate="visible" variants={stagger}>
                        <motion.div className="section-badge" variants={fadeInUp}>Membership Plans</motion.div>
                        <motion.h1 className="membership-hero__title" variants={fadeInUp}>
                            Invest In <span>Yourself</span>
                        </motion.h1>
                        <motion.p className="membership-hero__subtitle" variants={fadeInUp}>
                            Flexible plans designed to fit your lifestyle and goals. Start with a free 7-day trial — no commitment required.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Toggle */}
            <section className="membership-pricing section">
                <div className="container">
                    <div className="membership-toggle">
                        <button className={`membership-toggle__btn ${billing === 'monthly' ? 'membership-toggle__btn--active' : ''}`} onClick={() => setBilling('monthly')}>Monthly</button>
                        <button className={`membership-toggle__btn ${billing === 'yearly' ? 'membership-toggle__btn--active' : ''}`} onClick={() => setBilling('yearly')}>
                            Yearly <span className="membership-toggle__save">Save 20%</span>
                        </button>
                    </div>

                    <div className="membership-plans">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={plan.name}
                                className={`plan-card ${plan.popular ? 'plan-card--popular' : ''}`}
                                style={{ '--plan-color': plan.color }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.5 }}
                                whileHover={{ y: -12, scale: 1.02 }}
                            >
                                {plan.popular && <div className="plan-card__badge">Most Popular</div>}
                                <div className="plan-card__glow"></div>

                                <h3 className="plan-card__name">{plan.name}</h3>
                                <div className="plan-card__price">
                                    <span className="plan-card__currency">$</span>
                                    <span className="plan-card__amount">
                                        {billing === 'yearly' ? Math.round(plan.price * 0.8) : plan.price}
                                    </span>
                                    <span className="plan-card__period">/{billing === 'yearly' ? 'mo' : plan.period}</span>
                                </div>
                                {billing === 'yearly' && (
                                    <p className="plan-card__billed">Billed ${Math.round(plan.price * 0.8 * 12)}/year</p>
                                )}

                                <ul className="plan-card__features">
                                    {plan.features.map((f) => (
                                        <li key={f.text} className={f.included ? '' : 'plan-card__feature--disabled'}>
                                            {f.included ? (
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                            ) : (
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                                            )}
                                            {f.text}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`plan-card__btn ${plan.popular ? 'btn btn-primary' : 'btn btn-outline'}`}>
                                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p className="membership-trial" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        🎉 Start with a <strong>FREE 7-day trial</strong> — no credit card required.
                    </motion.p>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="membership-compare section">
                <div className="container">
                    <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div className="section-badge" variants={fadeInUp}>Compare Plans</motion.div>
                        <motion.h2 className="section-title" variants={fadeInUp}>Feature <span>Breakdown</span></motion.h2>
                    </motion.div>

                    <motion.div className="compare-table-wrap" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <table className="compare-table">
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Starter</th>
                                    <th className="compare-table__highlight">Pro</th>
                                    <th>Elite</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Gym Access', '6AM-10PM', '24/7', '24/7'],
                                    ['Group Classes', '—', 'Unlimited', 'Unlimited + Priority'],
                                    ['Personal Training', '—', '2x/month', '4x/month'],
                                    ['Fitness Assessment', '1x', 'Quarterly', 'Monthly'],
                                    ['Recovery Facilities', '—', 'Sauna & Steam', 'Full Recovery Suite'],
                                    ['Nutrition Plan', '—', '—', 'Custom Plan'],
                                    ['Guest Passes', '—', '—', '2/month'],
                                    ['App Access', 'Basic', 'Pro', 'Premium'],
                                ].map(([feature, s, p, e]) => (
                                    <tr key={feature}>
                                        <td>{feature}</td>
                                        <td>{s}</td>
                                        <td className="compare-table__highlight">{p}</td>
                                        <td>{e}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>

            {/* FAQ */}
            <section className="membership-faq section">
                <div className="container">
                    <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div className="section-badge" variants={fadeInUp}>FAQ</motion.div>
                        <motion.h2 className="section-title" variants={fadeInUp}>Got <span>Questions?</span></motion.h2>
                    </motion.div>

                    <div className="faq-list">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                            >
                                <button className="faq-item__question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                    <span>{faq.q}</span>
                                    <svg className="faq-item__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </button>
                                <div className="faq-item__answer">
                                    <p>{faq.a}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
