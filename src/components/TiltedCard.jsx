import { useRef, useState } from "react";
import "./TiltedCard.css";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function TiltedCard({
    title,
    subtitle,
    containerHeight = "220px",
    containerWidth = "100%",
    rotateAmplitude = 10,
    scaleOnHover = 1.04,
}) {
    const cardRef = useRef(null);
    const [transform, setTransform] = useState("perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)");

    const updateTilt = (clientX, clientY) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = (clientX - rect.left) / rect.width;
        const y = (clientY - rect.top) / rect.height;
        const rotateY = clamp((x - 0.5) * rotateAmplitude * 2, -rotateAmplitude, rotateAmplitude);
        const rotateX = clamp((0.5 - y) * rotateAmplitude * 2, -rotateAmplitude, rotateAmplitude);
        setTransform(
            `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${scaleOnHover})`
        );
    };

    const resetTilt = () => {
        setTransform("perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)");
    };

    const handleMouseMove = (event) => updateTilt(event.clientX, event.clientY);

    const handleTouchMove = (event) => {
        if (event.touches.length > 0) {
            const touch = event.touches[0];
            updateTilt(touch.clientX, touch.clientY);
        }
    };

    return (
        <div className="tilted-card-wrap" style={{ height: containerHeight, width: containerWidth }}>
            <article
                ref={cardRef}
                className="tilted-card"
                style={{ transform }}
                onMouseMove={handleMouseMove}
                onMouseLeave={resetTilt}
                onTouchMove={handleTouchMove}
                onTouchEnd={resetTilt}
            >
                <p className="tilted-card-title">{title}</p>
                <p className="tilted-card-subtitle">{subtitle}</p>
            </article>
        </div>
    );
}
