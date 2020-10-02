import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from "../actions/authActions";
import {Link} from 'react-router-dom'
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
                <Link className="nav-link" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">SIGNUP</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">SIGNIN</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">LEADERBOARD</Link>
              </li>
            </ul>
          ) :
          (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/level">PLAY</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">LEADERBOARD</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link logout" onClick={() => logout()}>LOGOUT</Link>
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