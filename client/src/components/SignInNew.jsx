import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useSpring, animated } from 'react-spring';
import { loginUser } from "../actions/authActions";
import {
	withRouter,
	useHistory
} from "react-router-dom";
import PropTypes from "prop-types";
// import InputContainer from "../elements/InputContainer";
import ButtonContainer from "../elements/ButtonContainer";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Waves from "../elements/Waves";
import Navbar from "../layouts/Navbar";
import theme from "../styles/themes";
import { useMediaQuery } from "react-responsive";

const InputContainer = styled.div`
	display: inline-block;
	position:relative;
	text-align: start;
	margin: 1.5rem 1rem 0;
	z-index:1;
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

const Wrapper = styled.section`
	position:absolute;
	width:100vw;
	height: 100vh;
	overflow:auto;
`

const Container = styled.div`
	display: grid;
	height:100vh;
	place-items:center;
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
	padding: 2rem ;
	margin: 0 0 2rem;
	max-width: 90%;
	opacity: 1;
`
const Heading = styled.div`
	.icon{
		font-size:6rem;
	}
`

const SignUpText = styled.a`
	font-size:1rem;
	letter-spacing:1px;
	color:rgb(47, 128, 237);
`

const EmailContainer = styled.div`
	padding: 0.5rem 0;
`
const PasswordContainer = styled.div`
	padding: 0.5rem 0;
`

const SignInNew = ({ loginUser, auth }) => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1300px)' })
	const history = useHistory();
	const login = e => {
		e.preventDefault();
		loginUser(inputData, history);
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
		email:"",
		password:""
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
		<Wrapper>

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
						<AccountCircleIcon className="icon" />
						{/* Log in to your account */}
					</Heading>
					<EmailContainer>
						<InputContainer>
							<Input
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
							<label>
								Email
							</label>
						</InputContainer>
						{/* <InputContainer>
							<input
								className={`styled-input ${!(inputData.email.length===0) && "has-content"}`}
								type="text"
								autoComplete="email"
								key={0}
								placeholder=""
								onChange={e=>{
									setInputData({
										...inputData,
										email:e.target.value,
									})
								}}
							/>
							<label style={{pointerEvents: "none"}}>Email</label>
							<span className="focus-border">
								<i></i>
							</span>
						</InputContainer> */}
					</EmailContainer>
					<PasswordContainer>
						{/* <InputContainer>
							<input
								className={`styled-input ${!(inputData.password.length === 0) && "has-content"}`}
								type="password"
								autoComplete="password"
								key={0}
								placeholder=""
								onKeyUp={ e=>{
									(e.key === 'Enter' || e.keyCode === 13) && login(e)
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
						</InputContainer> */}
						<InputContainer>
							<Input
								className={`styled-input ${!(inputData.password.length === 0) && "has-content"}`}
								type="password"
								autoComplete="password"
								key={0}
								placeholder=""
								onKeyUp={e => {
									(e.key === 'Enter' || e.keyCode === 13) && login(e)
								}}
								onChange={e => {
									setInputData({
										...inputData,
										password: e.target.value,
									})
								}}
							/>
							<label>
								Password
							</label>
						</InputContainer>
					</PasswordContainer>
					<ButtonContainer
						title="SignIn"
						clickEvent={e => login(e)}
						type="submit"
					/>
					<SignUpText href="/signup">
						Don't have an account? SignUp
					</SignUpText>
				</LoginContainer>
				{!isTabletOrMobile && (
					<Waves signin/>
				)}
			</Container>
		</Wrapper>
	)
}

SignInNew.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(withRouter(SignInNew));
