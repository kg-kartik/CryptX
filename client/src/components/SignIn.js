import React, { useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from "../layouts/Navbar";

const SignIn = ({ loginUser, auth }) => {
	const history = useHistory();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = e => {
		e.preventDefault();
		const newLogin = {
			email,
			password
		};
		loginUser(newLogin, history);
	};

	if (auth.isAuthenticated) {
		history.push("/level");
		window.location.reload();
	}

	return (
		<div className="main-bg">
			<Navbar />
			<div className="dark-overlay">
				<div className="container py-5">
					<div className="row">
						<div className="col-md-5 mx-auto">
							<div className="card rounded-2">
								<div className="card-header">
									<h3 className="mb-0 heading text-white text-center">
										{" "}
										SignIn{" "}
									</h3>
								</div>
								<div className="card-body">
									<form className="form" autocompelete="off">
										<div className="form-group">
											<label className="text-white mt-3">
												{" "}
												Email{" "}
											</label>
											<input
												type="text"
												className="form-control form-control rounded-1"
												onChange={e => {
													setEmail(e.target.value);
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
												onChange={e => {
													setPassword(e.target.value);
												}}
											/>

											<div className="invalid-feedback">
												{" "}
												Enter correct password
											</div>
										</div>
										<button
											type="submit"
											onClick={e => login(e)}
											className="btn btn-primary btn-lg mt-4"
											id="btnLogin"
										>
											SignIn
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

SignIn.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(withRouter(SignIn));
