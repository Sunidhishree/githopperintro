import React from 'react';
import { motion } from 'motion/react';
import './StaggeredReveal.css';

export function StaggeredReveal({ children, delay = 0, duration = 0.5, direction = 'up' }) {
    const variants = {
        up: {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
        },
        down: {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
        },
        left: {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
        },
        right: {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
        },
        scale: {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
        },
    };

    const variant = variants[direction] || variants.up;

    return (
        <motion.div
            className="staggered-reveal"
            initial={variant.initial}
            whileInView={variant.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration, delay, type: 'spring', damping: 20, stiffness: 100 }}
        >
            {children}
        </motion.div>
    );
}

export function StaggeredList({ items, delay = 0, direction = 'up' }) {
    return (
        <div className="staggered-list">
            {items.map((item, index) => (
                <StaggeredReveal key={index} delay={delay + index * 0.1} direction={direction}>
                    {item}
                </StaggeredReveal>
            ))}
        </div>
    );
}
