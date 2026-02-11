'use client';

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function InteractiveBackground() {
    const [init, setInit] = useState(false);

    // one-time initialization
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container: any) => {
        return Promise.resolve();
    };

    if (!init) return <></>; // render nothing until initialized

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            className="absolute inset-0 -z-10" // positioned behind content
            options={{
                fullScreen: {
                    enable: false, // constrained to container
                    zIndex: -1
                },
                background: {
                    color: {
                        value: "#050A18", // deep-blue matches global theme
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab", // connects particles to mouse
                        },
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            links: {
                                opacity: 1,
                                color: "#00F3FF" // neon-cyan connections
                            },
                        },
                        push: {
                            quantity: 4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#B23AFF", // neon-purple particles
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1, // slow, smooth movement
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            // area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}
