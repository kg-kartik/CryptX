import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "../layouts/Navbar";
import styled from "styled-components";

const SectionHeadingContainer = styled.h2`
	display:block;
	font-size: 3.6rem;
	width: 90%;
    background-color: transparent;
	text-align: center;
	margin: 0 auto 3%;
	text-shadow: 0 0 15px rgb(92 171 195 / 88%);
	&::before{
		background: linear-gradient(90deg, rgba(118,223,255,.877), transparent);
		content: "";
		display: inline-block;
		border-radius: 1rem 0 0 1rem ;
		height: 5px;
		position: relative;
		vertical-align: middle;
		width: 50%;
		text-shadow: 0 0 4px #000000;
		right: .5em;
		margin-left: -50%;
	}
	&::after{
		background: linear-gradient(-90deg, rgba(118,223,255,.877), transparent);
		content: "";
		display: inline-block;
		border-radius: 0 1rem 1rem 0 ;
		height: 5px;
		position: relative;
		vertical-align: middle;
		width: 50%;
		text-shadow: 0 0 4px #000000;
		left: .5em;
		margin-right: -50%;
	}
`

const Heading = styled.span`
	letter-spacing:0;
	color: white;
	font-weight: 700;
`

const Section = styled.section`
	margin: 2% auto 0;
	padding: 0 0 2rem;
	display:grid;
	place-items:center;
	width:50%;
`

const Para = styled.p`
	font-family: "IBM Plex Sans";
	letter-spacing: -0.5px;
	color:#cccccc;
	margin: 2rem 0;
	font-size: 1.5rem;
	text-align:center;
`

const Home = () => {
	return (
		<>
		<section className="landing">
			<Navbar />
			<div className="dark-overlay">
				<div className="landing-inner">
					<h1 className="x-large">CryptX</h1>
					<p className="lead">
						Can you scratch your grey matter to crack these levels?
					</p>
					<div className="buttons">
						<Link to="/level" className="btn btn-primary btn-lg">
							CRACK IT
						</Link>
					</div>
				</div>
			</div>
		</section>
		<Section>
			<SectionHeadingContainer>
				<Heading className="landing">About</Heading>
			</SectionHeadingContainer>
			<Para>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda a vel recusandae laboriosam laborum veritatis, qui accusamus tempora sit provident necessitatibus iste veniam iusto explicabo deserunt eveniet aspernatur sed ipsam.</Para>
			<Para>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda a vel recusandae laboriosam laborum veritatis, qui accusamus tempora sit provident necessitatibus iste veniam iusto explicabo deserunt eveniet aspernatur sed ipsam.</Para>
		</Section>
		<Section>
			<SectionHeadingContainer>
				<Heading className="landing">Rules</Heading>
			</SectionHeadingContainer>
			<Para>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda a vel recusandae laboriosam laborum veritatis, qui accusamus tempora sit provident necessitatibus iste veniam iusto explicabo deserunt eveniet aspernatur sed ipsam.</Para>
			<Para>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda a vel recusandae laboriosam laborum veritatis, qui accusamus tempora sit provident necessitatibus iste veniam iusto explicabo deserunt eveniet aspernatur sed ipsam.</Para>
		</Section>
		</>
	);
};

export default Home;
