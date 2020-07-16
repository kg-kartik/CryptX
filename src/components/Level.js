import React ,{useEffect,useState} from "react"
import {connect} from "react-redux"
import {getCurrentLevel,updateLevel} from "../actions/levelActions";
import PropTypes from "prop-types"
import Navbar from "../layouts/Navbar"
import image from "../assets/lvl1.jpg"

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
        updateLevel(newAnswer);
    }
    return (
       <div className = "main-bg">
           <Navbar />
           <div className = "container py-5">
      <div className = "row">
        <div className = "col-md-12">
          <div className = "row">
            <div className ="col-md-5 mx-auto">

              {/* Login Form */}
              <div className = "card level rounded-2">
                <div className="card-body">
                        {
                            level.isLoading ? 
                                (<h1> Loading </h1>) :
                                (
                                    <div>
                                        <h1 className="text-center levelno"> Level {level.levelDetails.atLevel._id}</h1> 
                                        <h3 className ="hint"> {level.levelDetails.atLevel.hint}</h3>
                                        {/* <h1> {level.levelDetails.atLevel.question}</h1> */}
                                        <div className='level-inner'>
                                            <img className= "text-center mt-3" src={image} />
                                        </div>
                                    </div>
                                )
                        }

                        <input 
                            type = "text"
                            className="form-control mt-4" 
                            id="exampleFormControlInput1" 
                            placeholder="Answer daal bc"
                            onChange={(e) =>setAnswer(e.target.value)}
                        />
                        
                        <div className='level-inner'>
                            <button 
                                type="submit"
                                className = "btn btn-primary btn-lg mt-4 answerbox"
                                onClick = {(e) => submitAnswer(e)}
                            >
                                Level++ ?
                            </button>
                        </div>
                        
                    </div>
              </div>
              </div>
            </div>
        </div>
      </div>
    </div>

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