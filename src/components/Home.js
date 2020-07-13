import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "../App.css"
import Navbar from "../layouts/Navbar";

const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/level' />;
  }

  return (
    <section className='landing'>
      <Navbar />
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>CryptX</h1>
          <p className='lead'>
            Can you scratch your grey matter to crack these levels?
          </p>
          <div className='buttons'>
            <Link to='/level' className='btn btn-primary btn-lg'>
              CRACK IT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Home.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Home);