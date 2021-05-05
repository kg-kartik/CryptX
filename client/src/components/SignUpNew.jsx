import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useSpring, animated } from 'react-spring';
import { registerUser } from "../actions/authActions";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import InputContainer from "../elements/InputContainer";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ButtonContainer from "../elements/ButtonContainer";
import Waves from "../elements/Waves";
import Navbar from "../layouts/Navbar";
import theme from "../styles/themes";

const Container = styled.div`
	margin: 2rem 0;
	display: grid;
	height:100vh;
	place-items:center;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	letter-spacing:-0.5px;
	background: ${theme.mainBackground};
	color: ${theme.cardFontColor};
	padding-top: 4rem;
`

const LoginContainer = styled(animated.div)`
	display: flex;
	width:40vw;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	z-index: 1;
	background: ${theme.cardBackground};
	// border: 2px solid ${theme.cardBorder};
	box-shadow: rgb(0 0 0 / 10%) 0px 0px 50px;
	border-radius: 0.5rem;
	padding: 2rem;
	max-width: 90%;
	opacity: 1;
`

const Heading = styled.div`
	.icon{
		margin-top:1rem;
		font-size:5rem;
	}
`

const DataContainer = styled.div`
	padding: 0.5rem;
`
const PasswordContainer = styled.div`
	padding: 0.5rem;
`

const SignInText = styled.div`
	font-size:1rem;
	letter-spacing:1px;
	font-family: "IBM Plex Sans", sans-serif;
	color:rgb(47, 128, 237);
`

const SignUpNew = ({ registerUser, auth }) => {
	const history = useHistory();
	const saveDetails = e => {
		e.preventDefault();
		registerUser(inputData, history);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
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
							<input
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
							<label style={{ pointerEvents: "none" }}>Name</label>
							<span className="focus-border">
								<i></i>
							</span>
						</InputContainer>
					</DataContainer>
					<DataContainer>
						<InputContainer>
							<input
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
							<label style={{ pointerEvents: "none" }}>University</label>
							<span className="focus-border">
								<i></i>
							</span>
						</InputContainer>
					</DataContainer>
					<DataContainer>
						<InputContainer>
							<input
								className={`styled-input ${!(inputData.email.length === 0) && "has-content"}`}
								type="text"
								autoComplete="email"
								key={0}
								placeholder=""
								onChange={e => {
									setInputData({
										...inputData,
										email: e.target.value,
									})
								}}
							/>
							<label style={{ pointerEvents: "none" }}>Email</label>
							<span className="focus-border">
								<i></i>
							</span>
						</InputContainer>
					</DataContainer>
					<PasswordContainer>
						<InputContainer>
							<input
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
							<span className="focus-border">
								<i></i>
							</span>
						</InputContainer>
					</PasswordContainer>
					<ButtonContainer
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
				<Waves />
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

