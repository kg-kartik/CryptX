import React from "react";
import styled from "styled-components";

const Container = styled.div`
	padding: 1rem;
	span{
		display: block;
		padding: 1rem 5.2rem;
	}
`

const Button = styled.button`
	display: inline-block;
	position: relative;
	background: none;
	border: none;
	color: #fff;
	font-size: 1rem;
	cursor: pointer;
	margin: 1.5rem 2rem;
	background: rgb(47, 128, 237);
	transition: transform 0.3s ease;
	border-radius: 0.2rem;
	transition: box-shadow 0.3s ease;
	&:hover{
		box-shadow: rgb(47 128 237 / 31%) 0px 0px 10px;
	}
`

const ButtonContainer = (props) => {
	return (
		<Container>
			<Button
				onClick={props.clickEvent}
			><span>{props.title}</span></Button>
		</Container>
	)
}

export default ButtonContainer