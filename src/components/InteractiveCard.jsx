import React, { useState } from 'react';
import { motion } from 'motion/react';
import './InteractiveCard.css';

export function InteractiveCard({
    title,
    description,
    icon,
    hoverColor = '#39FF14',
    onClick,
    children
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="interactive-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -8 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        >
            <motion.div
                className="card-border"
                style={{ borderColor: hoverColor }}
                animate={{
                    boxShadow: isHovered
                        ? `0 0 30px ${hoverColor}80`
                        : `0 0 10px ${hoverColor}20`,
                }}
                transition={{ duration: 0.3 }}
            />

            <div className="card-content">
                {icon && <div className="card-icon">{icon}</div>}
                {title && <h3 className="card-title">{title}</h3>}
                {description && <p className="card-description">{description}</p>}
                {children}
            </div>

            <motion.div
                className="card-accent"
                style={{ backgroundColor: hoverColor }}
                animate={{
                    opacity: isHovered ? 0.1 : 0,
                    scale: isHovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
}
