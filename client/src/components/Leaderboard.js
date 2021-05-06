import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/leaderboardActions";
import PropTypes from "prop-types";
import Navbar from "../layouts/Navbar";
import Loading from "../elements/Loading";
import "../App.css";
import styled from "styled-components";

const LoadingContainer = styled.div`
	display: flex;
	flex-direction:column;
	align-items:center;
`

const Leaderboard = ({ getUsers, leaderboard }) => {
	useEffect(() => {
		getUsers();
	// eslint-disable-next-line
	}, []);
	return (
		<div className="main-bg">
			<Navbar />
			<div className="table-container">
			{!leaderboard.users.length ? (
				<LoadingContainer>
					<Loading/>
				</LoadingContainer>
			) : (
					<table>
						<thead>
							<tr className="table100-head">
								<th className="column1">Rank</th>
								<th className="column2">Name</th>
								<th className="column3">Institution</th>
								<th className="column4">Level</th>
							</tr>
						</thead>
						<tbody>
							{" "}
							{leaderboard.users.map((detail, index) => (
								<tr key={index + 1}>
									<td className="column1">{index + 1}</td>
									<td className="column2">{detail.name}</td>
									<td className="column3">{detail.university}</td>
									<td className="column4">{detail.atLevel}</td>
								</tr>
							))}
						</tbody>
					</table>
			)}
			</div>
		</div>
	);
};

Leaderboard.propTypes = {
	getUsers: PropTypes.func.isRequired,
	leaderboard: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	leaderboard: state.leaderboard
});

export default connect(mapStateToProps, { getUsers })(Leaderboard);
