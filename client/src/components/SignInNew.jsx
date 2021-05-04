import React, { useState } from "react";
import styled from "styled-components";
import InputContainer from "../elements/InputContainer";

const Container = styled.div`
	height: 100vh;
	display: grid;
	place-items:center;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	letter-spacing:-1px;
	background: #111111;
	color: white;
`

const LoginContainer = styled.div`
	display: flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	z-index: 1;
`
const Heading = styled.div``
const EmailContainer = styled.div``
const PasswordContainer = styled.div``

const SignInNew = () => {
	const [inputData, setInputData] = useState({
		email:"",
		password:""
	})
	return (
		<Container>
			<LoginContainer>
				<Heading>
					SignIn
				</Heading>
				<EmailContainer>
					<InputContainer>
						<input
							className={`styled-input ${!(inputData.email.length===0) && "has-content"}`}
							type="text"
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
					</InputContainer>
				</EmailContainer>
				<PasswordContainer>
					<InputContainer>
						<input
							className={`styled-input ${!(inputData.password.length === 0) && "has-content"}`}
							type="text"
							key={0}
							placeholder=""
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
			</LoginContainer>
		</Container>
	)
}

export default SignInNew
