import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import Magnetic from './Magnetic';
import './Pricing.css';

const pricingData = [
  {
    title: 'landing page',
    desc: 'A professional page with contact form and automatic emails. Quickly online.',
    type: 'SINGLE PAYMENT',
    price: '₹999',
    features: ['1 page (landing page)', 'Contact form', 'Automatic emails', 'Mobile optimized'],
    isPopular: false,
    btnText: 'Get Started'
  },
  {
    title: 'standard',
    desc: 'The perfect start for professional demands. Ideal for established websites.',
    type: 'SINGLE PAYMENT',
    price: '₹2,999',
    features: ['3 pages', 'Contact form', 'Automatic emails', 'Mobile optimized'],
    isPopular: true,
    btnText: 'Get Started'
  },
  {
    title: 'big project',
    desc: 'For complex web applications, large platforms, and customized full trading sites.',
    type: 'CUSTOM ARCHITECTURE',
    price: 'Variable',
    features: ['Tailored Solutions', 'Advanced Features', 'Database Integration', 'Priority Support'],
    isPopular: false,
    btnText: 'Let\'s Talk'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-wrapper">
      <div className="container">
        <div className="card-container">
          <div className="portfolio-header">
            <h2 className="card-title">Pricing<span className="period">.</span></h2>
            <p className="portfolio-subtitle">Transparent costs. High quality approach.</p>
          </div>

          <div className="pricing-grid">
            {pricingData.map((tier, index) => (
              <motion.div 
                className={`pricing-card ${tier.isPopular ? 'popular' : ''}`}
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {tier.isPopular && <div className="popular-badge">MOST POPULAR</div>}
                <h3 className="pricing-title">{tier.title}</h3>
                <div className="pricing-price">{tier.price} {tier.price !== 'Variable' && <span>/ fix</span>}</div>
                <p className="pricing-desc">{tier.desc}</p>
                <ul className="pricing-features">
                  {tier.features.map((feature, i) => (
                    <li key={i}>
                      <FaCheck className="check-icon" /> {feature}
                    </li>
                  ))}
                </ul>
                <Magnetic strength={0.2}>
                  <button className={tier.isPopular ? 'btn-accent-blue' : 'btn-accent'}>
                    {tier.btnText}
                  </button>
                </Magnetic>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
