import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputContainer from "../elements/InputContainer";
import theme from "../styles/themes";
import Navbar from "../layouts/Navbar";
import { connect } from "react-redux";
import { useSpring, animated } from "react-spring";
import { getCurrentLevel, updateLevel } from "../actions/levelActions";
import PropTypes from "prop-types";
import Waves from "../elements/Waves";
import Loading from "../elements/Loading";
import { useMediaQuery } from "react-responsive";
import Axios from "axios";
import DiscordLogo from "../styles/DiscordLogo";

const Wrapper = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

const Container = styled.div`
	height: 100vh;
	display: grid;
	place-items:center;
	font-fam
	letter-spacing:-1px;
	color: black;
	background: ${theme.mainBackground};
	font-weight: 400;
	// margin: 4vh 0;
	@media (min-width:1224px){
		padding-top:3rem;
	}
`;

const QuestionContainer = styled(animated.div)`
  z-index: 1;
  display: grid;
  grid-template-rows: 0.5fr 1fr 0.25fr 0.25fr;
  grid-auto-columns: auto;
  grid-gap: 1rem;
  background: ${theme.cardBackground};
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 50px;
  // background-color: white;
  border-radius: 0.5rem;
  @media (max-width: 1224px) {
    zoom: 0.8;
  }
`;

const LevelHeading = styled.div`
  font-weight: 600;
  font-size: 2rem;
  color: white;

  text-transform: uppercase;
  color: white;
`;

const LevelHint = styled.div`
  font-weight: 400;
  font-size: 1.5rem;
  margin: 1vh 0;
  padding: 0 20px;
  color: #00c896;
`;

const ButtonContainer = styled.div`
  padding: 20px 0;
  display: grid;
  place-items: center;
`;

const Button = styled.a`
  position: relative;
  cursor: pointer;
  font-family: ${theme.buttonFont};
  user-select: none;
  top: 0px;
  font-weight: 500;
  text-decoration: none;
  font-size: 1.25rem;
  background: #f7f7f7;
  padding: 0.5em 1em;
  margin: 10px;
  background: ${theme.buttonColor};
  color: white !important;
  letter-spacing: 0px;
  border: none;
  border-radius: 0.75rem;
  box-shadow: 0px 5px 0px ${theme.buttonShadow};
  transition: all 0.2s ease;
  &:active {
    position: relative;
    top: 5px;
    box-shadow: none !important;
    transition: all 0.2s ease;
  }
`;

const LevelInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: -1vh 0 1vh 0;
  align-items: center;
  justify-content: center;
  min-width: 400px;
  min-height: 250px;
  overflow: hidden;
`;

const Image = styled.img`
  max-height: 250px;
  max-width: 100%;
  padding: 0 2rem;
  object-fit: cover;
`;

const NameHeading = styled.h1`
  color: white;
  font-family: "Poppins";
  font-size: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  letter-spacing: 1px;
  padding: 0.7rem 1rem;
  z-index: 6;
  @media (max-width: 1224px) {
    position: relative;
    z-index: 0;
  }
  //
`;

const NLTContainer = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  position: relative;
  z-index: 2;
`;

const NotLiveText = styled(animated.div)`
  color: white;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.5px;
  font-size: 1.5rem;
  padding: 3rem 2rem;
  background: #1f242db3;
  border-radius: 0.8rem;
  text-align: center;
  box-shadow: 0 0 40px rgb(17 9 33);
  a {
    display: block;
    max-width: 6rem;
    margin: 0 auto;
    padding: 0.5rem;
    margin-top: 1rem;
    font-size: 1rem;
    background: #7289da;
  }
  @media (max-width: 1224px) {
    font-size: 1rem;
    margin: 2rem;
  }
`;

// var g1 = new Date(2021, 5, 14, 18, 0, 0);

const LevelNew = ({ getCurrentLevel, level, updateLevel }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1300px)" });
  const [answer, setAnswer] = useState("");

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getCurrentLevel();
    // eslint-disable-next-line
  }, []);

  const submitAnswer = (e) => {
    e.preventDefault();
    const newAnswer = {
      answer,
    };
    updateLevel(newAnswer);
    setAnswer("");
    setInputIsEmpty(true);
  };

  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 200,
    (x - window.innerWidth / 2) / 200,
    1,
  ];
  const trans = (x, y, s) =>
    `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {
      mass: 10,
      tension: 750,
      friction: 50,
    },
  }));
  const [inputIsEmpty, setInputIsEmpty] = useState(true);

  const handleInput = (event) => {
    setAnswer(event.target.value);
    if (event.target.value.length !== 0) {
      setInputIsEmpty(false);
    } else {
      setInputIsEmpty(true);
    }
  };
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <NameHeading>
          {level.isLoading ? " " : `Hey ${level.levelDetails.name}!`}
        </NameHeading>
        <QuestionContainer
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.to(trans) }}
        >
          {level.isLoading ? (
            <Loading />
          ) : (
            <>
              <LevelInfoContainer>
                <LevelHeading>
                  Level {level.levelDetails.atLevel._id}
                </LevelHeading>
                <LevelHint>{level.levelDetails.atLevel.hint}</LevelHint>
              </LevelInfoContainer>
              <ImageContainer>
                <Image src={level.levelDetails.atLevel.question} />
              </ImageContainer>
              <InputContainer>
                <input
                  className={`styled-input ${!inputIsEmpty && "has-content"}`}
                  type="text"
                  key={0}
                  placeholder=""
                  onChange={handleInput}
                  value={answer}
                  onKeyUp={(e) => {
                    (e.key === "Enter" || e.keyCode === 13) && submitAnswer(e);
                  }}
                />
                <label>Your Answer</label>
                <span className="focus-border">
                  <i></i>
                </span>
              </InputContainer>
              <ButtonContainer>
                <Button onClick={(e) => submitAnswer(e)}>
                  {level.isUpdateLevelLoading ? "Checking" : "Level++"}
                  <span role="img" aria-label="eye emoji">
                    👀
                  </span>
                </Button>
              </ButtonContainer>
            </>
          )}
        </QuestionContainer>
      </Container>

      {!isTabletOrMobile && <Waves />}
    </Wrapper>
  );
};

LevelNew.propTypes = {
  getCurrentLevel: PropTypes.func.isRequired,
  updateLevel: PropTypes.func.isRequired,
  level: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  level: state.level,
});

const mapDispatchToProps = {
  getCurrentLevel,
  updateLevel,
};

export default connect(mapStateToProps, mapDispatchToProps)(LevelNew);
