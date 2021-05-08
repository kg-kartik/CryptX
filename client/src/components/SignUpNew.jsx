import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useSpring, animated } from 'react-spring';
import { registerUser } from "../actions/authActions";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ButtonContainer from "../elements/ButtonContainer";
import Waves from "../elements/Waves";
import Navbar from "../layouts/Navbar";
import theme from "../styles/themes";
import { useMediaQuery } from "react-responsive";

const InputContainer = styled.div`
	display: inline-block;
	position: relative;
	text-align: start;
	margin: 0.5rem 0 0;

	label{
		position: absolute;
		font-size: 1.2rem;
		left: 1rem;
		top: 0.6rem;
		width: 100%;
		color: #b5b5b5;
		transition: 0.3s;
		z-index: 0;
		letter-spacing: 0.5px;
		pointer-events:none;
		margin:0 !important;
	}
	.styled-input:focus~label,
	.has-content.styled-input~label {
		top: -1.5rem;
		left: 0;
		font-size: 0.8rem;
		color: white;
		transition: 0.3s ease;
	}
`

const Input = styled.input`
	padding: 0.5rem 1rem ;
	border-radius: 0.8rem;
	font-size: 1.2rem;
	border:2px solid #3a659e !important;
	border-radius: 0.5rem;
	color: white;
	background: transparent;
	min-width: 24rem;
	transition: box-shadow 0.2s ease;

	&:hover,
	&:focus{
		outline:none;
	}
	&:focus{
		box-shadow: rgb(47 128 237 / 31%) 0px 0px 10px;
	}
`

const Container = styled.div`
	display: grid;
	min-height:100vh;
	place-items:center;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	letter-spacing:-0.5px;
	background: ${theme.mainBackground};
	color: ${theme.cardFontColor};
	padding-top: 4rem;
`

const LoginContainer = styled(animated.div)`
	display: flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	z-index: 1;
	background: ${theme.cardBackground};
	// border: 2px solid ${theme.cardBorder};
	box-shadow: rgb(0 0 0 / 10%) 0px 0px 50px;
	border-radius: 0.5rem;
	padding: 2rem 2.5rem;
	max-width: 90%;
	opacity: 1;
	margin: 0 0 2rem;
	@media (max-width:1224px){
		zoom: 0.75;
	}
`

const Heading = styled.div`
	.icon{
		margin:0.5rem 0;
		font-size:6rem;
	}
`

const DataContainer = styled.div`
	padding: 0 0 1.5rem 0;
`

const SignInText = styled.div`
	font-size:1rem;
	letter-spacing:1px;
	color:rgb(47, 128, 237);
`

const SignUpNew = ({ registerUser, auth }) => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1300px)' })
	const history = useHistory();
	const saveDetails = e => {
		e.preventDefault();
		registerUser(inputData, history);
	};

	if (auth.isAuthenticated) {
		history.push("/level");
		window.location.reload();
	}
	const [inputData, setInputData] = useState({
		name: "",
		password: "",
		university: "",
		email: "",
	})
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
	return (
		<>
			<Navbar />
			<Container>
				<LoginContainer
					onMouseMove={({
						clientX: x,
						clientY: y
					}) => set({ xys: calc(x, y) })}
					onMouseLeave={() => set({ xys: [0, 0, 1] })}
					style={{ transform: props.xys.interpolate(trans) }}
				>
					<Heading>
						<AccountCircleIcon className="icon"/>
					</Heading>
					<DataContainer>
						<InputContainer>
							<Input
								className={`styled-input ${!(inputData.name.length === 0) && "has-content"}`}
								type="text"
								key={0}
								placeholder=""
								onChange={e => {
									setInputData({
										...inputData,
										name: e.target.value,
									})
								}}
							/>
							<label>Name</label>
						</InputContainer>
					</DataContainer>
					<DataContainer>
						<InputContainer>
							<Input
								className={`styled-input ${!(inputData.university.length === 0) && "has-content"}`}
								type="text"
								key={0}
								placeholder=""
								onChange={e => {
									setInputData({
										...inputData,
										university: e.target.value,
									})
								}}
							/>
							<label>University</label>
						</InputContainer>
					</DataContainer>
					<DataContainer>
						<InputContainer>
							<Input
								className={`styled-input ${!(inputData.email.length === 0) && "has-content"}`}
								type="text"
								key={0}
								placeholder=""
								onChange={e => {
									setInputData({
										...inputData,
										email: e.target.value,
									})
								}}
							/>
							<label>Email</label>
						</InputContainer>
					</DataContainer>
					<DataContainer>
						<InputContainer>
							<Input
								className={`styled-input ${!(inputData.password.length === 0) && "has-content"}`}
								type="password"
								autoComplete="password"
								key={0}
								placeholder=""
								onKeyUp={e => {
									(e.key === 'Enter' || e.keyCode === 13) && saveDetails(e)
								}}
								onChange={e => {
									setInputData({
										...inputData,
										password: e.target.value,
									})
								}}
							/>
							<label>Password</label>
						</InputContainer>
					</DataContainer>
					<ButtonContainer
						signup={true}
						title="Register"
						clickEvent={e => saveDetails(e)}
						type="submit"
					/>
					<SignInText>
							<a href="/signin">
								Already signed up? Login
							</a>
					</SignInText>
				</LoginContainer>
				{!isTabletOrMobile && (
					<Waves />
				)}
			</Container>
		</>
	)
}


SignUpNew.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object
};

const mapStateToProps = state => ({
	errors: state.errors,
	auth: state.auth
});

export default connect(mapStateToProps, { registerUser })(SignUpNew);

