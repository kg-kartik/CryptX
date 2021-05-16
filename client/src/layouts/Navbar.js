import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../actions/authActions";
import { NavLink } from "react-router-dom";
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
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    {!isAuthenticated ? (
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    activeClassName="selected"
                                    className="nav-link"
                                    to="/"
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="selected"
                                    className="nav-link"
                                    to="/signin"
                                >
                                    SIGNIN
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="selected"
                                    className="nav-link"
                                    to="/leaderboard"
                                >
                                    LEADERBOARD
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="selected"
                                    className="nav-link"
                                    to="/team"
                                >
                                    TEAM
                                </NavLink>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    activeClassName="selected"
                                    className="nav-link"
                                    to="/"
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="selected"
                                    className="nav-link"
                                    to="/level"
                                >
                                    PLAY
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="selected"
                                    className="nav-link"
                                    to="/leaderboard"
                                >
                                    LEADERBOARD
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="selected"
                                    className="nav-link"
                                    to="/team"
                                >
                                    TEAM
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/signin"
                                    activeClassName="selected"
                                    className="nav-link logout"
                                    onClick={() => logout()}
                                >
                                    LOGOUT
                                </NavLink>
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
