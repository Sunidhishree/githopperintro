import React from 'react';
import { motion } from 'motion/react';
import './GradientText.css';

export function GradientText({ 
    text, 
    colors = ['#39FF14', '#d07a1b'],
    delay = 0,
    duration = 1
}) {
    const gradientStyle = {
        backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    };

    return (
        <motion.span
            className="gradient-text"
            style={gradientStyle}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration }}
        >
            {text}
        </motion.span>
    );
}
