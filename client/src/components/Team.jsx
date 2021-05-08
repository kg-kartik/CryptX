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
			icon: "/photos/kartikgoel.jpg",
			text: "Developer",
			author: "Kartik Goel",
			github: "https://github.com/kg-kartik",
			linkedin: "https://www.linkedin.com/in/kg-kartik/",
		},
		{
			icon:"/photos/BoidushyaBhattacharyay.jpg",
			text: "Developer",
			author: "Boidushya",
			github: "https://github.com/boidushya",
			linkedin: "https://www.linkedin.com/in/boidushya/",
		},
		{
			icon: "/photos/ArijitRoy.jpeg",
			text: "Problem Setter",
			author: "Arijit Roy",
			github: "https://github.com/radioactive11",
			linkedin: "https://www.linkedin.com/in/arijit--roy/",
		},
		{
			icon: "/photos/samankgupta.jpg",
			text: "Problem Setter",
			author: "Samank Gupta",
			github: "https://github.com/kg-kartik",
			linkedin: "https://www.linkedin.com/in/kg-kartik/",
		},
		{
			icon: "/photos/vanshaj.jpg",
			text: "Designer",
			author: "Vanshaj Arora",
			github: "https://github.com/radioactive11",
			linkedin: "https://www.linkedin.com/in/kg-kartik/",
		},
		{
			icon: "/photos/EshaBaweja.jpeg",
			text: "Designer",
			author: "Esha Baweja",
			github: "https://github.com/eshabaweja",
			linkedin: "https://www.linkedin.com/in/esha-baweja-2436591b8/",
		},
		{
			icon: "/photos/SameedUlHaq.jpg",
			text: "Designer",
			author: "Sameed Ul Haq",
			github: "https://github.com/radioactive11",
			linkedin: "https://www.linkedin.com/in/kg-kartik/",
		},
		{
			icon: "/photos/AdityaAgrawal.jpg",
			text: "Designer",
			author: "Aditya Agarwal",
			github: "https://github.com/aditya33agrawal",
			linkedin: "https://www.linkedin.com/in/aditya-agrawal-ba6b64200",
		},
		{
			icon: "/photos/AniketVerma.jpg",
			text: "Designer",
			author: "Aniket Verma",
			github: "https://github.com/radioactive11",
			linkedin: "https://www.linkedin.com/in/kg-kartik/",
		},
		{
			icon: "/photos/Gaurav.jpg",
			text: "IT Coordinator",
			author: "Gaurav",
			github: "https://github.com/ctrl-gaurav",
			linkedin: "https://www.linkedin.com/in/gaurav-726239157",
		},
		{
			icon: "/photos/Pratham.jpg",
			text: "IT Coordinator",
			author: "Pratham Kumar",
			github: "https://github.com/praX03",
			linkedin: "https://www.linkedin.com/in/pratham-kumar-021371176/",
		},
		{
			icon: "/photos/NitigyaKargeti.jpg",
			text: "Event Coordinator",
			author: "Nitigya Kargeti",
			github: "https://github.com/radioactive11",
			linkedin: "https://www.linkedin.com/in/kg-kartik/",
		},
		{
			icon: "/photos/AninditaaChauhan.jpg",
			text: "Event Coordinator",
			author: "Aninditaa Chauhan",
			github: "https://github.com/radioactive11",
			linkedin: "https://www.linkedin.com/in/kg-kartik/",
		},
		{
			icon: "/photos/YashwinSaini.jpg",
			text: "Event Coordinator",
			author: "Yashwin Saini",
			github: "https://github.com/radioactive11",
			linkedin: "https://www.linkedin.com/in/kg-kartik/",
		},
		{
			icon: "/photos/AdityaYadav.jpeg",
			text: "Event Coordinator",
			author: "Aditya Yadav",
			github: "https://github.com/radioactive11",
			linkedin: "https://www.linkedin.com/in/kg-kartik/",
		},
		{
			icon: "/photos/muditshukla.jpeg",
			text: "Event Coordinator",
			author: "Mudit Shukla",
			github: "https://github.com/radioactive11",
			linkedin: "https://www.linkedin.com/in/kg-kartik/",
		},
		{
			icon: "/photos/SubhankarSen.png",
			text: "Outreach Coordinator",
			author: "Subhankar Sen",
			github: "https://github.com/subhankar01",
			linkedin: "https://www.linkedin.com/in/subhankar-sen-a62457190",
		},
		{
			icon: "/photos/Sneegdh.jpg",
			text: "Outreach Coordinator",
			author: "Sneegdh Krishna",
			github: "https://github.com/radioactive11",
			linkedin: "https://www.linkedin.com/in/kg-kartik/",
		},
		{
			icon: "/photos/RadhikaGupta.jpg",
			text: "Publicity Coordinator",
			author: "Radhika Gupta",
			github: "https://github.com/radhikagpt1208",
			linkedin: "https://www.linkedin.com/in/radhika-gupta1208/",
		},
		{
			icon: "/photos/AashritGarg.jpg",
			text: "Publicity Coordinator",
			author: "Aashrit Garg",
			github: "https://github.com/Aashrit-Garg",
			linkedin: "https://www.linkedin.com/in/aashrit-garg-b9846b146/",
		},
		{
			icon: "/photos/SikhaReddy.jpg",
			text: "Promotion Coordinator",
			author: "Sikha Reddy",
			github: "https://github.com/sikhareddy",
			linkedin: "https://www.linkedin.com/in/sikha-reddy-a04907191",
		},
		{
			icon: "/photos/IshaanBohra.jpeg",
			text: "Content Writer",
			author: "Ishaan Bohra",
			github: "https://github.com/radioactive11",
			linkedin: "https://www.linkedin.com/in/kg-kartik/",
		},
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