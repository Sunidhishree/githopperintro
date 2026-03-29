import React from "react";

export function TopNav({ target = "roadmap" }) {
    const href = target === "roadmap" ? "./roadmap.html" : "./index.html";
    const label = target === "roadmap" ? "Road Map" : "Landing";

    return (
        <header className="top-nav">
            <a href="./index.html" className="brand-mark">
                GitHopper
            </a>
            <a href={href} className="nav-button">
                {label}
            </a>
        </header>
    );
}
