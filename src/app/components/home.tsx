'use client';

import { Flex, Heading, Text } from '@chakra-ui/react';
import { useCallback, useState, useEffect, useRef } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

import '../anime.css';

export default function Home() {
    const [particlesVisible, setParticlesVisible] = useState(true);
    const particlesContainerRef = useRef(null);

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
     
                setParticlesVisible(entry.isIntersecting);
            },
            {
                threshold: 0.5,
            }
        );

        if (particlesContainerRef.current) {
            observer.observe(particlesContainerRef.current);
        }

        return () => {
            if (particlesContainerRef.current) {
                observer.unobserve(particlesContainerRef.current);
            }
        };
    }, []);

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            direction="column"
            height="100vh"
            gap={6}
            position="relative"
            ref={particlesContainerRef}
        >
            {particlesVisible && (
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "#FFF",
                            },
                        },
                        fpsLimit: 90,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: false,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#6199f9",
                            },
                            links: {
                                color: "#6199f9",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 6,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 30,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                        fullScreen: {
                            enable: true,
                            zIndex: -1,
                        },
                    }}
                />
            )}

            <img
                src={'./logo_animated.svg'}
                alt="aueno logo"
                width={400}
                height={100}
            />
            <Heading
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'}
                textAlign="center"
            >
                <Text as={'span'} color={'black.600'}>
                    Portfolio
                </Text>
            </Heading>

            <div className="scroll_down" id="sd">
                <a href="#works">
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                </a>
            </div>
        </Flex>
    );
}
