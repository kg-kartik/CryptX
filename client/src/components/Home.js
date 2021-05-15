import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "../layouts/Navbar";
import styled from "styled-components";
import ScrollDown from "../elements/ScrollDown";
import Countdown from "../elements/Countdown";
import DiscordLogo from "../styles/DiscordLogo";
import { useMediaQuery } from "react-responsive";
import Footer from "./Footer";

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
    letter-spacing: 2px;
    color: #cccccc;
    width: 50vw;
    margin: 2rem 0;
    font-size: 1.5rem;
    @media (max-width: 1300px) {
        margin: 1rem 0;
        font-size: 1rem;
        width: 100%;
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
                            <a
                                href="https://discord.gg/HaTtzqxJ"
                                className="btn btn-primary btn-lg discord-btn"
                            >
                                <DiscordLogo />
                                <span className="align-middle">
                                    JOIN DISCORD
                                </span>
                            </a>
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
                    CryptX is a one-day long online cryptic hunt organized by
                    Randomize(); MUJ. It will be held from 15 May 2021 18:00 IST
                    to 16 May 2021 18:00 IST. The hunt consists of 20 questions
                    in the form of pictures, and players are required to rack
                    their brains to solve them and reach an answer. <br />{" "}
                    <br />
                    The goal of the players should be to find the answer as fast
                    as possible to stay on top of the leaderboard. At the end of
                    the event, the player at the top of leaderboard will be
                    declared as the winner of CryptX 2021. This gripping
                    competition will up-skill the competitors and hone their
                    investigative skills, while testing their logical and
                    analytical skills as they search for clues all over the
                    Internet.
                </Para>
                <Para></Para>
            </Section>
            <Section id="rules">
                <SectionHeadingContainer>
                    <Heading className="landing">Rules</Heading>
                </SectionHeadingContainer>
                <Para>
                    At each level, the participants will encounter a number of
                    clues which shall all, together, point to one final answer.
                    Each level has only one correct answer.
                    <br />
                    <br />
                    It is compulsary for all participants to join our discord
                    server. All official hints will be released on the discord
                    server.
                    <br />
                    <br />
                    Answers will always be in lower-case, alphanumeric and will
                    contain no spaces. Special characters are not allowed.
                    Beware of the spelling you enter. For example, if the answer
                    is 221-B Baker Street, you would type it in as
                    “221bbakerstreet”.
                    <br />
                    <br />
                    Directly messaging any admin for clues, hints or lead
                    confirmations is not allowed. Participants could use the
                    general chat in the discord server for any queries.
                    <br />
                    <br />
                    Team play, answer sharing and collaborating with other
                    participants is not allowed and any such activity can lead
                    to disqualification of the people involved.
                </Para>
            </Section>
            <Footer />
        </>
    );
};

export default Home;
