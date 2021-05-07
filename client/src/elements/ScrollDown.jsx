import React from "react";
import styled from "styled-components";

const StyledSVG = styled.svg`
	zoom:0.75;
	width: 4rem;
	height: 6rem;
	position: absolute;
	left: 50%;
	margin-left: -30px;
	bottom: 1rem;
	path {
		stroke: #2994D1;
		fill: transparent;
		stroke-width: 1px;
		animation: arrow 2s infinite;
		-webkit-animation: arrow 2s infinite;
	}
	@keyframes arrow{
		0% {opacity:0}
		40% {opacity:1}
		80% {opacity:0}
		100% {opacity:0}
	}
	@-webkit-keyframes arrow{
		0% {opacity:0}
		40% {opacity:1}
		80% {opacity:0}
		100% {opacity:0}
	}
	path.a1 {
		animation-delay:-1s;
		-webkit-animation-delay:-1s;
	}

	path.a2 {
		animation-delay:-0.5s;
		-webkit-animation-delay:-0.5s;
	}

	path.a3 {
		animation-delay:0s;
		-webkit-animation-delay:0s;
	}
`

const ScrollDown = (props) => {
	return (
		<a href={props.target}>
			<StyledSVG>
				<path className="a1" d="M0 0 L30 32 L60 0"></path>
				<path className="a2" d="M0 20 L30 52 L60 20"></path>
				<path className="a3" d="M0 40 L30 72 L60 40"></path>
			</StyledSVG>
		</a>
	)
}

export default ScrollDown
