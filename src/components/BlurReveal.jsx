import React from 'react';
import { motion } from 'motion/react';
import './BlurReveal.css';

export function BlurReveal({ children, delay = 0, duration = 0.8 }) {
    return (
        <motion.div
            className="blur-reveal"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay, duration, type: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
}
