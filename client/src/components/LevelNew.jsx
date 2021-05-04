import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputContainer from "../elements/InputContainer";
import theme from "../styles/themes";
import Navbar from "../layouts/Navbar";
import { connect } from "react-redux";
import { useSpring, animated } from 'react-spring';
import { getCurrentLevel, updateLevel } from "../actions/levelActions";
import PropTypes from "prop-types";

const Wrapper = styled.section`
	height: 100vh;
`

const Container = styled.div`
	height: 100vh;
	display: grid;
	place-items:center;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	letter-spacing:-1px;
	color: black;
	background: #111111;
	font-weight: 400;
	padding-bottom: 3rem;
`

const QuestionContainer = styled(animated.div)`
	z-index:1;
	display: grid;
	grid-template-rows: 0.5fr 1fr 0.25fr 0.25fr;
	grid-auto-columns: auto;
	grid-gap:1rem;
	background-color: #444444;
	// background-color: white;
	border-radius: 0.75rem;
	opacity: 0.85;
	@media (max-width:1224px){
		zoom: 0.8;
	}
`


const LevelHeading = styled.div`
	font-weight: 600;
	font-size: 2rem;
	color: #111111;
	text-transform: uppercase;
	color: white;
`

const LevelHint = styled.div`
	font-weight: 400;
	font-size: 1.5rem;
	color:#00C896;
`

const ButtonContainer = styled.div`
	padding: 20px 0;
	display:grid;
	place-items:center;
`

const Button = styled.a`
	position: relative;
	cursor: pointer;
	font-family: ${theme.buttonFont};
	user-select: none;
	top: 0px;
	font-weight: 500;
	text-decoration: none;
	font-size: 1.25rem;
	background: #f7f7f7;
	padding: 0.5em 1em;
	margin: 10px;
	background: ${theme.buttonColor};
	color: white !important;
	letter-spacing:0px;
	border: none;
	border-radius: 0.75rem;
	box-shadow: 0px 5px 0px ${theme.buttonShadow};
	transition: all 0.2s ease;
	&:active{
		position: relative;
		top: 5px;
		box-shadow: none !important;
		transition: all 0.2s ease;
	}
`

const LevelInfoContainer = styled.div`
	display:flex;
	align-items:center;
	justify-content:center;
	flex-direction:column;
`

const ImageContainer = styled.div`
	position: relative;
	display:flex;
	align-items:center;
	justify-content:center;
	min-width: 400px;
	min-height: 250px;
	overflow:hidden;
`

const Image = styled.img`
	max-height: 250px;
	max-width: 100%;
	padding: 0 2rem;
	object-fit:cover;
`

const WavesContainer = styled.div`
	z-index: 0;
	opacity: 0.2;

	.waves {
		position: absolute;
		top: 65%;
		left: 0;
		width: 100%;
		height: 40vh;
	}

	/* Animation */
	.wave-paths {
		use {
			animation: move-waves 10s ease-in-out infinite;
			fill: url(#wave-gradient);
		}
		use:nth-child(odd) {
			animation-direction: reverse;
			animation-duration: 13s;
		}
		use:nth-child(1) {
			animation-delay: -2s;
			opacity: .7;
		}
		use:nth-child(2) {
			animation-delay: -3s;
			opacity: .5;
		}
		use:nth-child(3) {
			animation-delay: -4s;
			opacity: .3;
		}
		use:nth-child(4) {
			animation-delay: -5s;
		}
	}

	@keyframes move-waves {
		0% {
			transform: translate3d(-30px, 0, 0);
		}
		50% {
			transform: translate3d(30px, 0, 0);
		}
		100% {
			transform: translate3d(-30px, 0, 0);
		}
	}
`

const LevelNew = ({ getCurrentLevel, level, updateLevel }) => {
	const [answer, setAnswer] = useState("");

	useEffect(() => {
		getCurrentLevel();
		// eslint-disable-next-line
		console.log(level);
	}, []);

	const submitAnswer = e => {
		e.preventDefault();
		const newAnswer = {
			answer
		};
		updateLevel(newAnswer);
		setAnswer("");
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	const calc = (x, y) => [-(y - window.innerHeight / 2) / 200, (x - window.innerWidth / 2) / 200, 1]
	const trans = (x, y, s) => `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
	const [props, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: {
			mass: 10,
			tension: 750,
			friction: 50
		}
	})
	);
	const [inputIsEmpty, setInputIsEmpty] = useState(true);
	const handleInput = (event) => {
		if (event.target.value.length !== 0) {
			console.log(event.target.value);
			setInputIsEmpty(false);
			setAnswer(event.target.value);
		}
		else{
			setInputIsEmpty(true);
		}
	}
	return (
		<Wrapper>
			<Navbar />
			<Container>
				<QuestionContainer
					onMouseMove={({
						clientX: x,
						clientY: y
					}) => set({ xys: calc(x, y) })}
					onMouseLeave={() => set({ xys: [0, 0, 1] })}
					style={{ transform: props.xys.interpolate(trans) }}
				>
					<LevelInfoContainer>
						<LevelHeading>
							Level {level.levelDetails.atLevel._id}
					</LevelHeading>
						<LevelHint>
							{level.levelDetails.atLevel.hint}
					</LevelHint>
					</LevelInfoContainer>
					<ImageContainer>
						<Image
							src={level.levelDetails.atLevel.question}
						/>
					</ImageContainer>
					<InputContainer>
						<input
							className={`styled-input ${!inputIsEmpty && "has-content"}`}
							type="text"
							key={0}
							placeholder=""
							onChange={handleInput}
						/>
						<label>Your Answer</label>
						<span className="focus-border">
							<i></i>
						</span>
					</InputContainer>
					<ButtonContainer>
						<Button
							onClick={e => submitAnswer(e)}
						>Level++? <span role="img" aria-label="eye emoji">👀</span></Button>
					</ButtonContainer>
				</QuestionContainer>
			</Container>
			<WavesContainer>
				<svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
					<defs>
						<linearGradient id="wave-gradient" gradientTransform="rotate(90)">
							<stop offset="5%" stop-color={theme.stopColorStart} />
							<stop offset="35%" stop-color={theme.stopColorEnd} />
						</linearGradient>
						<path id="a" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
					</defs>
					<g className="wave-paths">
						<use href="#a" x="0" />
						<use href="#a" x="50" y="3" />
						<use href="#a" x="100" y="5" />
						<use href="#a" x="150" y="7" />
					</g>
				</svg>
			</WavesContainer>
		</Wrapper>
	)
}

LevelNew.propTypes = {
	getCurrentLevel: PropTypes.func.isRequired,
	updateLevel: PropTypes.func.isRequired,
	level: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	level: state.level
});

const mapDispatchToProps = {
	getCurrentLevel,
	updateLevel
};

export default connect(mapStateToProps, mapDispatchToProps)(LevelNew);
