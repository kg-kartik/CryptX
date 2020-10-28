import React, { useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import PropTypes from "prop-types";
import "../App.css";
import Navbar from "../layouts/Navbar";

const SignUp = ({ registerUser, auth }) => {
	const history = useHistory();

	const [name, setName] = useState("");
	const [university, setUniversity] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const saveDetails = e => {
		e.preventDefault();
		const newUser = {
			name,
			university,
			email,
			password
		};
		registerUser(newUser, history);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	return (
		<div className="main-bg">
			<Navbar />
			{/* <div className="dark-overlay"> */}
			<div className="container py-5">
				<div className="row">
					<div className="col-md-12">
						<div className="row">
							<div className="col-md-5 mx-auto">
								{/* Login Form */}
								<div className="card rounded-2">
									<div className="card-header">
										<h3 className="mb-0 text-white text-center">
											{" "}
											SignUp{" "}
										</h3>
									</div>
									<div className="card-body">
										<form
											className="form"
											autocompelete="off"
										>
											<div className="form-group">
												<label className="text-white">
													{" "}
													Name
												</label>
												<input
													type="text"
													className="form-control form-control rounded-1"
													name="name"
													id="name"
													value={name}
													onChange={e => {
														setName(e.target.value);
													}}
												/>
												<div className="invalid-feedback">
													{" "}
													Oops you missed this one
												</div>
											</div>

											<div className="form-group">
												<label className="text-white mt-3">
													{" "}
													University{" "}
												</label>
												<input
													type="text"
													className="form-control form-control rounded-1"
													name="university"
													id="university"
													value={university}
													onChange={e => {
														setUniversity(
															e.target.value
														);
													}}
												/>
												<div className="invalid-feedback">
													{" "}
													Enter correct password
												</div>
											</div>

											<div className="form-group">
												<label className="text-white mt-3">
													{" "}
													Email{" "}
												</label>
												<input
													type="text"
													className="form-control form-control rounded-1"
													name="email"
													value={email}
													onChange={e => {
														setEmail(
															e.target.value
														);
													}}
												/>
												<div className="invalid-feedback">
													{" "}
													Enter correct password
												</div>
											</div>

											<div className="form-group">
												<label className="text-white mt-3">
													{" "}
													Password
												</label>
												<input
													type="password"
													className="form-control form-control rounded-1"
													name="password"
													id="password"
													value={password}
													onChange={e => {
														setPassword(
															e.target.value
														);
													}}
												/>

												<div className="invalid-feedback">
													{" "}
													Enter correct password
												</div>
											</div>
											<button
												type="submit"
												onClick={e => saveDetails(e)}
												className="btn btn-primary btn-lg mt-4"
												id="btnLogin"
											>
												SignUp
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		// </div>
	);
};

SignUp.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object
};

const mapStateToProps = state => ({
	errors: state.errors,
	auth: state.auth
});

export default connect(mapStateToProps, { registerUser })(SignUp);
