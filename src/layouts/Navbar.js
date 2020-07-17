import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from "../actions/authActions";
import "../App.css"

const Navbar = ({ auth: { isAuthenticated, loading }}) => {

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <div id="nav-bar">
    <nav className="navbar navbar-expand-lg">
  
    <div className="collapse navbar-collapse" id="navbarNav">
        {
          !isAuthenticated ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">SIGNUP</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signin">SIGNIN</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/leaderboard">LEADERBOARD</a>
              </li>
            </ul>
          ) :
          (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/level">PLAY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/leaderboard">LEADERBOARD</a>
              </li>
              <li className="nav-item">
                <a className="nav-link logout" onClick={() => logout()}>LOGOUT</a>
              </li>
            </ul>
          )
        }
    </div>
  </nav>    
  </div>
  );
};

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);