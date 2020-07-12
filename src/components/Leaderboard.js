import React, { useEffect } from "react"
import {connect} from "react-redux"
import {getUsers} from "../actions/leaderboardActions";
import PropTypes from "prop-types";

const Leaderboard = ({getUsers,leaderboard}) => {
  useEffect(() => {
    getUsers();
  })
    return (
      <div>
          <h1 class="text-center"> Leaderboard</h1>
          {!leaderboard.users ?
          (
            <h1> Loading ...</h1>
          ) : (
            <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th scope="col">Rank</th>
          <th scope="col">Name</th>
          <th scope="col">Instituition</th>
          <th scope="col">Level</th>
        </tr>
      </thead>
      <tbody> {leaderboard.users.map((detail,index) => (
          <tr>
          <th scope="row">{index+1}</th>
          <td>{detail.name}</td>
          <td>{detail.university}</td>
          <td>{detail.atLevel}</td>
        </tr>  
      ))}
        
      </tbody>
    </table>
          )}
      
      </div>
      
    )
}

Leaderboard.propTypes = {
  getUsers : PropTypes.func.isRequired,
  leaderboard : PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  leaderboard : state.leaderboard
});

export default connect(
  mapStateToProps,
  {getUsers},
)(Leaderboard);