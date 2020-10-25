import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ProtectedRoute = ({ component: Component, auth, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			auth.isAuthenticated === true ? (
				<Component {...props} />
			) : (
				<Redirect to="/signin" />
			)
		}
	/>
);

ProtectedRoute.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(ProtectedRoute);
