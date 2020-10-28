import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alert }) => {
	return alert !== null && alert.length > 0 ? (
		<div key={alert[0].id} className={`alert alert-${alert[0].alertType}`}>
			{alert[0].msg}
		</div>
	) : (
		""
	);
};

Alert.propTypes = {
	alert: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	alert: state.alert
});

export default connect(mapStateToProps)(Alert);
