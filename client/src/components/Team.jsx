import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from "styled-components";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import theme from "../styles/themes";
import Navbar from "../layouts/Navbar";

const StyledCenter = styled.div`
    margin-top:10vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`

const StyledContainer = styled.section`
    overflow-x:hidden;
	min-height: 100vh;
	display:block;
	text-align: center;
	color:white;
	// padding: 40px;
	.center{
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

const TeamHeader = styled.h1`
	font-size: 2.5rem;
    margin-top:5vh;
	@media only screen and (max-width: 767px) {
		font-size: 2rem;
	}
`

const StyledCard = styled(Card)`
	width: 18rem;
    border-radius:0.5rem;
    background: ${theme.cardBackground};
	color: ${theme.cardFontColor};
	right:-5px;
	display: flex;
	align-items: center;
	margin: -3em 0 7em 0;
`

const StyledCardTitle = styled(Card.Title)`
	font-weight:bold;
`

const IconHolder = styled.div`
	display:flex;
	font-size:1.6em;
	justify-content:center;
`

const Icon = styled.i`
	margin: auto 1rem;
	cursor: pointer;
    z-index:100;
	color: ${theme.cardFontColor};
    &:hover{
		color:grey;
	}

`

const Team = () => {
	const teamsInfo = [
		{
			icon:"https://via.placeholder.com/256x256?text=Icon+1",
			text: "Developer",
			author: "Boidushya",
			github: "https://github.com/boidushya",
			linkedin: "https://www.linkedin.com/in/boidushya-bhattacharya-6b31a779/",
		},
		{
			icon: "https://via.placeholder.com/256x256?text=Icon+2",
			text: "Developer",
			author: "Kartik Goel",
            github: "https://github.com/kg-kartik",
			linkedin: "https://www.linkedin.com/in/kg-kartik/",
		},
		{
			icon: "https://via.placeholder.com/256x256?text=Icon+3",
			text: "amet, consectetur.",
			author: "Author 3"
		},
		{
			icon: "https://via.placeholder.com/256x256?text=Icon+4",
			text: "adipiscing elit,",
			author: "Author 4"
		},
		{
			icon: "https://via.placeholder.com/256x256?text=Icon+5",
			text: "sed do eiusmod.",
			author: "Author 5"
		},
		{
			icon: "https://via.placeholder.com/256x256?text=Icon+6",
			text: "tempor incididunt",
			author: "Author 6"
		}
	]
	return (
		<StyledContainer id="team">
            <Navbar />
			<StyledCenter>
				<TeamHeader>
					Our Team
				</TeamHeader>
			</StyledCenter>
			<StyledCenter>
				<Row md={5} className="pt-5 px-5">
					{teamsInfo.map((item) => {
						return (
							<Col md={4} className="center">
								<StyledCard>
									<Card.Img src={item.icon} />
									<Card.Body>
										<StyledCardTitle>{item.author}</StyledCardTitle>
										<Card.Text>
											{item.text}
										</Card.Text>
										<IconHolder>
											<a href={(item.hasOwnProperty("github"))?item.github:null}><Icon className="fab fa-github" ></Icon></a>
											<a href={(item.hasOwnProperty("linkedin")) ? item.linkedin : null}><Icon className="fab fa-linkedin-in"></Icon></a>
										</IconHolder>
									</Card.Body>
								</StyledCard>
							</Col>
						)
					})}
				</Row>
			</StyledCenter>
		</StyledContainer>
	)
}

export default Team