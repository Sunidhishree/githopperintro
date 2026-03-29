import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import './AnimatedCounter.css';

export function AnimatedCounter({
    from = 0,
    to = 100,
    duration = 2,
    suffix = '',
    prefix = '',
    delay = 0
}) {
    const [count, setCount] = useState(from);

    useEffect(() => {
        let startTime = null;
        const target = to;
        const range = target - from;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / (duration * 1000);

            if (progress < 1) {
                setCount(Math.floor(from + range * progress));
                requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        const timeoutId = setTimeout(() => {
            requestAnimationFrame(animate);
        }, delay * 1000);

        return () => clearTimeout(timeoutId);
    }, [from, to, duration, delay]);

    return (
        <motion.div
            className="animated-counter"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay }}
        >
            <span className="counter-prefix">{prefix}</span>
            <span className="counter-value">{count}</span>
            <span className="counter-suffix">{suffix}</span>
        </motion.div>
    );
}
