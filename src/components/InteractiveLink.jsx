import React, { useState } from 'react';
import { motion } from 'motion/react';
import './InteractiveLink.css';

export function InteractiveLink({
    href,
    children,
    color = '#39FF14',
    external = false
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            href={href}
            target={external ? '_blank' : '_self'}
            rel={external ? 'noopener noreferrer' : ''}
            className="interactive-link"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ color }}
        >
            <span className="link-text">{children}</span>
            <motion.span
                className="link-underline"
                animate={{
                    scaleX: isHovered ? 1 : 0,
                    opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ backgroundColor: color }}
            />
        </motion.a>
    );
}
