import React, { useState } from 'react';
import { motion } from 'motion/react';
import './AnimatedButton.css';

export function AnimatedButton({
    children,
    onClick,
    color = '#39FF14',
    size = 'md',
    variant = 'primary'
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            className={`animated-button ${variant} ${size}`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
                borderColor: color,
                color: color,
            }}
        >
            <motion.span
                className="button-background"
                style={{ backgroundColor: color }}
                animate={{
                    opacity: isHovered ? 0.1 : 0,
                    scale: isHovered ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
            />
            <span className="button-text">{children}</span>
        </motion.button>
    );
}
