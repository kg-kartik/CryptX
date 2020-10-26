import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCurrentLevel, updateLevel } from "../actions/levelActions";
import PropTypes from "prop-types";
import Navbar from "../layouts/Navbar";

const Level = ({ getCurrentLevel, level, updateLevel }) => {
	const [answer, setAnswer] = useState("");

	useEffect(() => {
		getCurrentLevel();
	}, []);

	const submitAnswer = e => {
		e.preventDefault();
		const newAnswer = {
			answer
		};
		updateLevel(newAnswer);
	};
	return (
		<div className="main-bg">
			<Navbar />
			<div className="container py-5">
				<div className="row">
					<div className="col-md-12">
						<div className="row">
							<div className="col-md-5 mx-auto">
								{/* Login Form */}
								<div className="card level rounded-2">
									<div className="card-body">
										{level.isLoading ? (
											<h1> Loading.. </h1>
										) : (
											<div>
												<h1 className="text-center levelno">
													{" "}
													Level{" "}
													{
														level.levelDetails
															.atLevel._id
													}
												</h1>
												<h4 className="hint mt-3">
													{" "}
													{
														level.levelDetails
															.atLevel.hint
													}
												</h4>
												<div className="level-inner">
													<img
														className="text-center mt-3 level-image"
														alt="levels"
														src={
															level.levelDetails
																.atLevel
																.question
														}
													/>
												</div>
											</div>
										)}

										<input
											className="form-control mt-4"
											id="exampleFormControlInput1"
											placeholder="Try your luck :)"
											onChange={e =>
												setAnswer(e.target.value)
											}
										/>

										<div className="level-inner">
											<button
												type="submit"
												className="btn btn-primary btn-lg mt-4 answerbox"
												onClick={e => submitAnswer(e)}
											>
												Level++ ?
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Level.propTypes = {
	getCurrentLevel: PropTypes.func.isRequired,
	updateLevel: PropTypes.func.isRequired,
	level: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	level: state.level
});

const mapDispatchToProps = {
	getCurrentLevel,
	updateLevel
};

export default connect(mapStateToProps, mapDispatchToProps)(Level);
