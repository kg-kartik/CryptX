import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Alert from 'react-bootstrap/Alert'
import styled from "styled-components";

const Container = styled.div`
	position:fixed;
	z-index:10;
	top:0;
	left:0;
	width:100%;
	@keyframes slideInFromTop {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateX(0);
		}
	}
	animation: 0.2s ease 0s 1 slideInFromTop;
`
const AlertWrapper = ({ alert }) => {
	return alert !== null && alert.length > 0 && (
		<Container>
			<Alert key={alert[0].id} variant={alert[0].alertType}>
				{alert[0].msg}
			</Alert>
		</Container>
	)
}

AlertWrapper.propTypes = {
	alert: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	alert: state.alert
});

export default connect(mapStateToProps)(AlertWrapper);
