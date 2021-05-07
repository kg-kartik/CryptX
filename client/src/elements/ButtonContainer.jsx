import React from "react";
import styled from "styled-components";

const Container = styled.div`
	padding: ${props=>props.signup?`0`:`1rem`};
	span{
		display: block;
	}
`

const Button = styled.button`
	display: inline-block;
	position: relative;
	background: none;
	border: none;
	color: #fff;
	// font-family: "IBM Plex Sans", sans-serif;
	letter-spacing:2px;
	font-size: 1rem;
	cursor: pointer;
	margin: 1.5rem 2rem;
	background: rgb(47, 128, 237);
	border-radius: 0.5rem;
	transition: box-shadow 0.3s ease,transform 0.3s ease;
	padding: 1rem 5.2rem;

	&:hover{
		box-shadow: rgb(47 128 237 / 31%) 0px 0px 10px;
	}
`

const ButtonContainer = (props) => {
	return (
		<Container
			signup={props.signup}
		>
			<Button
				onClick={props.clickEvent}
			><span>{props.title}</span></Button>
		</Container>
	)
}

export default ButtonContainer