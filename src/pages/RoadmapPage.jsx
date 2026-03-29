import React from "react";
import { TopNav } from "../components/TopNav";
import DotGrid from "../components/DotGrid";
import { motion } from "motion/react";
import { StaggeredReveal } from "../components/StaggeredReveal";
import { BlurReveal } from "../components/BlurReveal";
import { InteractiveCard } from "../components/InteractiveCard";
import { ParallaxSection } from "../components/ParallaxSection";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { GradientText } from "../components/GradientText";

const milestones = [
    { phase: "M1", title: "Ingest", note: "Repository pull and parser baseline." },
    { phase: "M2", title: "Security", note: "Secrets, auth checks, CVE mapping." },
    { phase: "M3", title: "Debt", note: "Complexity and duplication tracking." },
    { phase: "M4", title: "Workflow", note: "Priority queue and issue export." },
];

export function RoadmapPage() {
    return (
        <>
            <DotGrid
                dotSize={8}
                gap={25}
                baseColor="#444444"
                activeColor="#39FF14"
                proximity={150}
                shockRadius={250}
                shockStrength={5}
                resistance={750}
                returnDuration={1.5}
            />
            <div className="page-shell">
                <TopNav target="landing" />

                <main className="roadmap-wrap">
                    <p className="eyebrow">Roadmap</p>
                    <h1 className="section-title">Build Path</h1>
                    <p className="roadmap-copy">Short milestones. Clear delivery.</p>

                    <section className="roadmap-list" aria-label="roadmap milestones">
                        {milestones.map((step) => (
                            <article key={step.phase} className="roadmap-item">
                                <span>{step.phase}</span>
                                <h2>{step.title}</h2>
                                <p>{step.note}</p>
                            </article>
                        ))}
                    </section>
                </main>
            </div>
        </>
    );
}
