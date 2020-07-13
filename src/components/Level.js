import React ,{useEffect,useState} from "react"
import {useHistory} from "react-router";
import {connect} from "react-redux"
import {getUserDetails} from "../actions/authActions"
import {getCurrentLevel,updateLevel} from "../actions/levelActions";
import {withRouter,Redirect} from "react-router-dom"
import PropTypes from "prop-types"
import Navbar from "../layouts/Navbar"

const Level = ({getCurrentLevel,level,updateLevel}) => {
    
    const [answer,setAnswer] = useState("");

    useEffect(() => {
        getCurrentLevel();
    })
    
    const submitAnswer = (e) => {
        e.preventDefault();
        const newAnswer = {
            answer
        }
        console.log(answer);
        updateLevel(newAnswer);
    }
    return (
       <div class= "main-bg">
           <Navbar />
         {
             level.isLoading ? 
              (<h1> Loading </h1>) :
              (
                  <div>
                      <h1> You are at level {level.levelDetails._id}</h1> 
                      <br /> <br />
                      <h1> {level.levelDetails.hint}</h1>
                      <h1> {level.levelDetails.question}</h1>
                  </div>
              )
         }
         <input 
            type ="text" 
            onChange = {(e) => setAnswer(e.target.value)}
            name = "answer"
            value = {answer}
            placeholder = "Enter your answer"
         />
        <button 
            type="submit"
            onClick = {(e) => submitAnswer(e)}
        >
            Level++?
        </button>
       </div>
       
    )
}

Level.propTypes = {
    getCurrentLevel : PropTypes.func.isRequired,
    updateLevel :  PropTypes.func.isRequired,
    level :  PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    level : state.level
})

const mapDispatchToProps = {
    getCurrentLevel,
    updateLevel
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Level);