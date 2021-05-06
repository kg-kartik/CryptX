import React from "react";
import theme from "../styles/themes";
import styled from "styled-components";

const WavesContainer = styled.div`
	z-index: 0;
	opacity: 0.2;
	position:absolute;
	top:0;
	left:0;
	width:100vw;
	height:100vh;
	overflow:hidden;

	.waves {
		position: absolute;
		bottom:${props => props.signin ? `-25` : `-10`}vh;
		// bottom:-30vh;
		left: 0;
		width: 100%;
		height: 50vh;
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

const Waves = (props) => {
	return (
		<WavesContainer signin={props.signin&&true}>
			<svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
				<defs>
					<linearGradient id="wave-gradient" gradientTransform="rotate(90)">
						<stop offset="5%" stopColor={theme.stopColorStart} />
						<stop offset="35%" stopColor={theme.stopColorEnd} />
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
	)
}

export default Waves