import React from "react";
import styled from "styled-components";
import Countdown from 'react-countdown';

const TimeCard = styled.div`
	background: rgba(255, 255, 255, 0.025);
	border-radius: 1rem;
	color: #8973FD;
	display: flex;
	flex-direction: column;
	font-family: "IBM Plex Sans", -sans-serif;
	font-size: 1.5rem !important;
	padding: 1rem;
	font-weight: 200;
	line-height: 1;
	text-align: center;
	@media (max-width:1300px){
		font-size:1rem;
	}
`

const TimerContainer = styled.div`
	display:grid;
	grid-template-columns: repeat(4, minmax(0px, 1fr));
    gap: 0px 2rem;
	font-size: 2rem;
	margin: 1rem 0 3rem 0;
	@media (max-width:1300px){
		gap: 0px 1rem;
	}
`

const Tag = styled.p`
	color: #798EB0;
    font-family: "Noto Sans";
    font-size: 0.75rem !important;
    font-weight: 300;
    letter-spacing: 0.2rem;
    margin: 1.25rem 0px 0px;
    order: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
    width: 100%;
	text-align:center;
	@media (max-width:1300px){
		font-size:0.4rem;
		margin: 0.5rem 0px 0px;
	}
`

// const OnComplete = () => {
// 	return (
// 		<span>Hunt is live!</span>
// 	)
// }

const Timer = (props) => {
	return (
		<TimerContainer>
			<TimeCard>{props.days}<Tag>Days</Tag></TimeCard>
			<TimeCard>{props.hours}<Tag>Hours</Tag></TimeCard>
			<TimeCard>{props.minutes}<Tag>Minutes</Tag></TimeCard>
			<TimeCard>{props.seconds}<Tag>Seconds</Tag></TimeCard>
		</TimerContainer>
	)
}

const renderer = ({ days, hours, minutes, seconds }) => {
	return (
		<Timer
			days={days}
			hours={hours}
			minutes={minutes}
			seconds={seconds}
		/>
	)
};

const CountdownContainer = () => {
	return (
		<Countdown
			date={1652531400000}
			renderer={renderer}
		/>
	)
}

export default CountdownContainer
