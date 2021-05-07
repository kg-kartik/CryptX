import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "../layouts/Navbar";
import styled from "styled-components";
import ScrollDown from "../elements/ScrollDown";
import Countdown from "../elements/Countdown";
import { useMediaQuery } from "react-responsive";
import Axios from "axios";

const SectionHeadingContainer = styled.h2`
    display: block;
    font-size: 3.6rem;
    width: 90%;
    background-color: transparent;
    text-align: center;
    margin: 4rem auto 3%;
    text-shadow: 0 0 15px rgb(92 171 195 / 88%);
    &::before {
        background: linear-gradient(
            90deg,
            rgba(118, 223, 255, 0.877),
            transparent
        );
        content: "";
        display: inline-block;
        border-radius: 1rem;
        height: 5px;
        position: relative;
        vertical-align: middle;
        width: 50%;
        text-shadow: 0 0 4px #000000;
        right: 0.5em;
        margin-left: -50%;
        @media (max-width: 1300px) {
            background: linear-gradient(
                -90deg,
                rgba(118, 223, 255, 0.877),
                transparent
            );
        }
    }
    &::after {
        background: linear-gradient(
            -90deg,
            rgba(118, 223, 255, 0.877),
            transparent
        );
        content: "";
        display: inline-block;
        border-radius: 1rem;
        height: 5px;
        position: relative;
        vertical-align: middle;
        width: 50%;
        text-shadow: 0 0 4px #000000;
        left: 0.5em;
        margin-right: -50%;
        @media (max-width: 1300px) {
            background: linear-gradient(
                90deg,
                rgba(118, 223, 255, 0.877),
                transparent
            );
        }
    }
    @media (max-width: 1300px) {
        font-size: 2rem;
        width: 75%;
    }
`;

const Heading = styled.span`
    letter-spacing: 0;
    color: white;
    font-weight: 700;
`;

const Section = styled.section`
    margin: 2% auto 0;
    padding: 0 0 2rem;
    display: grid;
    place-items: center;
    width: 50%;
    @media (max-width: 1300px) {
        width: 75%;
        padding: 0;
        margin: 1rem auto 0;
    }
`;

const Para = styled.p`
    font-family: "IBM Plex Sans";
    letter-spacing: -0.5px;
    color: #cccccc;
    margin: 2rem 0;
    font-size: 1.5rem;
    text-align: center;
    @media (max-width: 1300px) {
        margin: 1rem 0;
        font-size: 1rem;
    }
`;

const CountdownContainer = styled.div``;

const Home = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

    return (
        <>
            <section className="landing">
                {/* <Particles
                    canvasClassName="example"
                    height="100vh"
                    width="100vw"
                    params={{
                        particles: {
                            number: {
                                value: 50,
                            },
                            size: {
                                value: 3,
                            },
                        },
                        interactivity: {
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                            },
                        },
                    }}
                /> */}
                <Navbar />
                <div className="dark-overlay">
                    <div className="landing-inner">
                        <h1 className="x-large">CryptX</h1>
                        <CountdownContainer>
                            <Countdown />
                        </CountdownContainer>
                        <p className="lead">
                            Can you scratch your grey matter to crack these
                            levels?
                        </p>
                        <div className="buttons">
                            <Link
                                to="/level"
                                className="btn btn-primary btn-lg crack"
                            >
                                CRACK IT
                            </Link>
                            <Link
                                to="/level"
                                className="btn btn-primary btn-lg"
                            >
                                JOIN DISCORD
                            </Link>
                        </div>
                    </div>
                </div>
                {!isMobile && <ScrollDown target="#about" />}
            </section>
            <Section id="about">
                <SectionHeadingContainer>
                    <Heading className="landing">About</Heading>
                </SectionHeadingContainer>
                <Para>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Assumenda a vel recusandae laboriosam laborum veritatis, qui
                    accusamus tempora sit provident necessitatibus iste veniam
                    iusto explicabo deserunt eveniet aspernatur sed ipsam.
                </Para>
                <Para>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Assumenda a vel recusandae laboriosam laborum veritatis, qui
                    accusamus tempora sit provident necessitatibus iste veniam
                    iusto explicabo deserunt eveniet aspernatur sed ipsam.
                </Para>
            </Section>
            <Section>
                <SectionHeadingContainer>
                    <Heading className="landing">Rules</Heading>
                </SectionHeadingContainer>
                <Para>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Assumenda a vel recusandae laboriosam laborum veritatis, qui
                    accusamus tempora sit provident necessitatibus iste veniam
                    iusto explicabo deserunt eveniet aspernatur sed ipsam.
                </Para>
                <Para>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Assumenda a vel recusandae laboriosam laborum veritatis, qui
                    accusamus tempora sit provident necessitatibus iste veniam
                    iusto explicabo deserunt eveniet aspernatur sed ipsam.
                </Para>
            </Section>
        </>
    );
};

export default Home;
