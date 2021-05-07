import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../actions/authActions";
import { Link } from "react-router-dom";
import "../App.css";
import theme from "../styles/themes";
import styled from "styled-components";

const Nav = styled.nav`
    background: ${theme.mainBackground} !important;
`;

const Navbar = ({ auth: { isAuthenticated, loading } }) => {
    const logout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    return (
        <div id="nav-bar">
            <Nav className="navbar navbar-expand-lg navbar-dark">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    {!isAuthenticated ? (
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">
                                    SIGNUP
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin">
                                    SIGNIN
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/leaderboard">
                                    LEADERBOARD
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/team">
                                    TEAM
                                </Link>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/level">
                                    PLAY
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/leaderboard">
                                    LEADERBOARD
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/team">
                                    TEAM
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link logout"
                                    onClick={() => logout()}
                                >
                                    LOGOUT
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </Nav>
        </div>
    );
};

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
