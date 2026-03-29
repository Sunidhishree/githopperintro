import React, { useRef, useEffect, useState } from 'react';
import './ParallaxSection.css';

export function ParallaxSection({ children, offset = 0.5, className = '' }) {
    const ref = useRef(null);
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const elementTop = ref.current.getBoundingClientRect().top;
                const elementHeight = ref.current.offsetHeight;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight && elementTop + elementHeight > 0) {
                    const scrolled = window.pageYOffset;
                    const elementOffset = ref.current.offsetTop;
                    setOffsetY((scrolled - elementOffset) * offset);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [offset]);

    return (
        <div
            ref={ref}
            className={`parallax-section ${className}`}
            style={{ transform: `translateY(${offsetY}px)` }}
        >
            {children}
        </div>
    );
}
