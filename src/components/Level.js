import React ,{useEffect} from "react"
import {useHistory} from "react-router";
import {connect} from "react-redux"
import {getUserDetails} from "../actions/authActions"
import {withRouter,Redirect} from "react-router-dom"
import PropTypes from "prop-types"

const Level = ({auth,getUserDetails}) => {
    
        getUserDetails();
    return (
        !auth.userDetails ? 
        (<h1> Loading Details </h1>) :
        (<h1> Hello {auth.userDetails.name} </h1>) 
    )
}


Level.propTypes = {
    getUserDetails : PropTypes.func.isRequired,
    auth : PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth : state.auth
})

const mapDispatchToProps = {
    getUserDetails
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Level);