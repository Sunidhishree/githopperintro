import React from "react";
import { TopNav } from "../components/TopNav";
import ShinyText from "../components/ShinyText";
import LiquidChrome from "../components/LiquidChrome";
import TiltedCard from "../components/TiltedCard";
import ScrollFloat from "../components/ScrollFloat";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import RotatingText from "../components/RotatingText";
import { motion } from "motion/react";
import GhostCursor from "../components/GhostCursor";
import { StaggeredReveal } from "../components/StaggeredReveal";
import { InteractiveCard } from "../components/InteractiveCard";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { GradientText } from "../components/GradientText";
import { BlurReveal } from "../components/BlurReveal";
import { InteractiveLink } from "../components/InteractiveLink";
import { AnimatedButton } from "../components/AnimatedButton";
import { ParallaxSection } from "../components/ParallaxSection";

export function HomePage() {
    const sectionTransition = { type: "spring", damping: 22, stiffness: 120 };
    const sectionViewport = { once: true, amount: 0.24 };

    return (
        <div className="page-shell">
            <TopNav target="roadmap" />

            <main className="home-hero" aria-label="landing hero">
                <video className="hero-video-bg" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
                    <source src="/assets/githopper.mp4" type="video/mp4" />
                </video>
                <div className="hero-video-overlay" aria-hidden="true" />

                <div className="hero-content">
                    <h1 className="git-lockup">
                        <ShinyText
                            text="GIT"
                            className="git-bold"
                            speed={2.1}
                            delay={0}
                            color="#72ea1e"
                            shineColor="#d9ffb8"
                            spread={122}
                            direction="left"
                            yoyo={false}
                            pauseOnHover={false}
                            disabled={false}
                        />
                        <ShinyText
                            text="HOPPER"
                            className="hopper-thin"
                            speed={2.2}
                            delay={0.08}
                            color="#69d31d"
                            shineColor="#d9ffb8"
                            spread={118}
                            direction="left"
                            yoyo={false}
                            pauseOnHover={false}
                            disabled={false}
                        />
                    </h1>

                    <p className="hero-tagline">
                        <em>One URL . Every vulnerability. No jargon.</em>
                    </p>
                </div>
            </main>

            <section className="home-scroll-slot" aria-label="scroll background section">
                <div className="scroll-fx-wrap">
                    <LiquidChrome
                        baseColor={[0.03, 0.035, 0.03]}
                        speed={0.52}
                        amplitude={0.17}
                        interactive={true}
                    />
                    <div className="scroll-edge edge-green" aria-hidden="true" />
                    <div className="scroll-edge edge-orange" aria-hidden="true" />
                </div>

                <div className="ghost-layer" aria-hidden="true">
                    <GhostCursor
                        color="#7cff1f"
                        brightness={2.35}
                        edgeIntensity={0.02}
                        trailLength={56}
                        inertia={0.62}
                        grainIntensity={0.03}
                        bloomStrength={0.36}
                        bloomRadius={1}
                        bloomThreshold={0.018}
                        fadeDelayMs={1200}
                        fadeDurationMs={1700}
                        mixBlendMode="screen"
                        zIndex={8}
                    />
                    <GhostCursor
                        color="#d07a1b"
                        brightness={1.85}
                        edgeIntensity={0.02}
                        trailLength={40}
                        inertia={0.58}
                        grainIntensity={0.025}
                        bloomStrength={0.24}
                        bloomRadius={0.9}
                        bloomThreshold={0.022}
                        fadeDelayMs={1100}
                        fadeDurationMs={1600}
                        mixBlendMode="screen"
                        zIndex={7}
                    />
                </div>

                <div className="content-layer">
                    <motion.section
                        className="scan-intro flow-block interactive-layer"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={sectionViewport}
                        transition={{ ...sectionTransition, delay: 0.02 }}
                    >
                        <p className="scan-line-1">Scan any GitHub repo and instantly understand</p>
                        <p className="scan-line-2">security risks and technical debt in plain English.</p>
                    </motion.section>

                    <motion.section
                        className="problem-solution-section flow-block interactive-layer"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={sectionViewport}
                        transition={{ ...sectionTransition, delay: 0.08 }}
                    >
                        <div className="problem-quote">
                            <p className="section-kicker">Problem</p>
                            <ScrollFloat
                                animationDuration={1}
                                ease="back.inOut(2)"
                                scrollStart="center bottom+=50%"
                                scrollEnd="bottom bottom-=40%"
                                stagger={0.02}
                                containerClassName="problem-float"
                            >
                                Most tools tell you what is wrong.
                            </ScrollFloat>
                            <p className="problem-sub">They do not tell you what to fix first or how.</p>
                        </div>

                        <div className="solution-flow solution-green">
                            <p className="section-kicker">Solution</p>
                            <ScrollFloat
                                animationDuration={1}
                                ease="back.inOut(2)"
                                scrollStart="center bottom+=42%"
                                scrollEnd="bottom bottom-=38%"
                                stagger={0.018}
                                containerClassName="solution-float"
                            >
                                GitHopper gives you a complete repo health report
                            </ScrollFloat>
                            <ul className="flow-list">
                                <li>Security issues and technical debt in one scan</li>
                                <li>Simple explanations anyone can understand</li>
                                <li>Fix priority and estimated time</li>
                                <li>No expertise required</li>
                            </ul>
                        </div>
                    </motion.section>

                    <motion.section
                        className="features-flow flow-block interactive-layer"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={sectionViewport}
                        transition={{ ...sectionTransition, delay: 0.12 }}
                    >
                        <p className="section-kicker">Key Features</p>
                        <ScrollStack
                            useWindowScroll={true}
                            itemDistance={72}
                            itemScale={0.025}
                            itemStackDistance={18}
                            stackPosition="28%"
                            scaleEndPosition="10%"
                            baseScale={0.88}
                            blurAmount={0.12}
                        >
                            <ScrollStackItem>
                                <h3>Unified Scan</h3>
                                <p>Security and code quality in one pass.</p>
                            </ScrollStackItem>
                            <ScrollStackItem>
                                <h3>AI Explanations</h3>
                                <p>Beginner-friendly insights in plain language.</p>
                            </ScrollStackItem>
                            <ScrollStackItem>
                                <h3>Instant Health Score</h3>
                                <p>See repository quality at a glance.</p>
                            </ScrollStackItem>
                            <ScrollStackItem>
                                <h3>Fix Time Estimates</h3>
                                <p>Prioritize what to solve first in minutes.</p>
                            </ScrollStackItem>
                            <ScrollStackItem>
                                <h3>Repo Health Card</h3>
                                <p>Share one clear report with your team.</p>
                            </ScrollStackItem>
                        </ScrollStack>
                    </motion.section>

                    <motion.section
                        className="how-flow flow-block interactive-layer"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={sectionViewport}
                        transition={{ ...sectionTransition, delay: 0.16 }}
                    >
                        <p className="section-kicker">How It Works</p>
                        <div className="steps-track" aria-label="how it works steps">
                            <div className="step-chip">Paste GitHub repo link</div>
                            <div className="flow-arrow" aria-hidden="true">-&gt;</div>
                            <div className="step-chip">GitHopper scans code using AI</div>
                            <div className="flow-arrow" aria-hidden="true">-&gt;</div>
                            <div className="step-chip">Get a clear actionable report</div>
                        </div>
                    </motion.section>

                    <motion.section
                        className="target-wrap flow-block interactive-layer"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={sectionViewport}
                        transition={{ ...sectionTransition, delay: 0.2 }}
                    >
                        <p className="section-kicker">Target Users</p>
                        <div className="target-grid">
                            <TiltedCard
                                title="Students and interns"
                                subtitle="Learn what to fix first"
                                rotateAmplitude={10}
                                scaleOnHover={1.05}
                                containerHeight="190px"
                            />
                            <TiltedCard
                                title="Startup developers"
                                subtitle="Move faster with clear priorities"
                                rotateAmplitude={10}
                                scaleOnHover={1.05}
                                containerHeight="190px"
                            />
                            <TiltedCard
                                title="Small engineering teams"
                                subtitle="Share one health view and align"
                                rotateAmplitude={10}
                                scaleOnHover={1.05}
                                containerHeight="190px"
                            />
                        </div>
                    </motion.section>

                    <motion.section
                        className="rotating-feature flow-block interactive-layer"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={sectionViewport}
                        transition={{ ...sectionTransition, delay: 0.22 }}
                    >
                        <p className="rotating-label">GitHopper for</p>
                        <RotatingText
                            texts={['explorer', 'fixer', 'hopper']}
                            splitBy="words"
                            loop={true}
                            auto={true}
                            rotationInterval={2500}
                            mainClassName="rotating-text-main"
                            staggerFrom="first"
                            staggerDuration={0.04}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "-100%", opacity: 0 }}
                        />
                    </motion.section>

                    <motion.section
                        className="cta-section flow-block interactive-layer"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={sectionViewport}
                        transition={{ ...sectionTransition, delay: 0.23 }}
                    >
                        <BlurReveal>
                            <div className="cta-content">
                                <h2>
                                    Ready to secure your repos? <br />
                                    <GradientText
                                        text="Start with GitHopper"
                                        colors={['#39FF14', '#d07a1b']}
                                    />
                                </h2>
                                <div className="cta-buttons">
                                    <AnimatedButton color="#39FF14" size="lg">
                                        Scan Now
                                    </AnimatedButton>
                                    <InteractiveLink href="/roadmap" color="#d07a1b">
                                        View Roadmap →
                                    </InteractiveLink>
                                </div>
                            </div>
                        </BlurReveal>
                    </motion.section>

                    <motion.section
                        className="closing-note flow-block interactive-layer"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={sectionViewport}
                        transition={{ ...sectionTransition, delay: 0.24 }}
                    >
                        <p>Start scanning smarter, not harder. Try GitHopper now.</p>
                        <p className="interactive-footnote">
                            Built at HACK&apos;A&apos;WAR 2026, RIT Bengaluru
                            <br />
                            Ananya Mehrotra · Mukul Prasad · Aniket Aggarwal · Sunidhi Shree
                        </p>
                    </motion.section>
                </div>
            </section>
        </div>
    );
}
