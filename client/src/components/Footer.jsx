import React from 'react';
import styled from "styled-components";
import theme from '../styles/themes';
import logo from "../static/logo.png";

const Section = styled.section`
	min-height: 15vh;
    margin-top:20vh;
	background:${theme.cardBackground};
    @media (max-width: 767px) {
		min-height:5vh;
	}
`

const Container = styled.div`
	display:flex;
	flex-wrap: wrap;
	flex-direction:row;
	align-items:stretch	;
	justify-content:space-between;
	@media (max-width: 767px) {
		justify-content:center;
		flex-direction:column;
	}
`


const ParentWrapper = styled.div`
	display:flex;
	flex-direction:column;
	justify-content:space-around;
`

const MetaWrapper = styled.div`
	display: flex;
	padding: 2rem;
	@media (max-width: 767px) {
		justify-content:center;
		padding:0;
	}
`

const LinksWrapper = styled.ul`
	display: flex;
	text-align:center;
	margin-top:5vh;
	li:first-child {
		list-style: none;
	}
	li:last-child {
		padding: 0;
	}
	@media (max-width: 767px) {
		margin-top:1rem;
		padding: 0 !important;
	}
`

const Links = styled.li`
	cursor: pointer;
	letter-spacing:0;
	color: lightgray !important;
	font-size: 1rem;
	// padding: 0 1rem 0 0;
	margin: 0 1rem 0 1rem;
	@media (max-width: 767px) {
		margin: 0 0.5rem;
		list-style:none;
		font-size: 1em;
	}
	&:hover{
		text-decoration:underline;
	}
`


const SocialWrapper = styled.div`
	padding-bottom: 3rem;
	width:100%;
	display:flex;
	justify-content:center;
	@media (max-width: 767px) {
		justify-content:center;
	}
`

const Icon = styled.i`
	margin: auto 1rem;
	cursor: pointer;
	color: #909090;
	transition: all 0.2s ease;
	&:hover{
		color: white;
	}
`

const IconContainer = styled.a`
	font-size:2rem;
`

const BrandHeader = styled.div`
	padding:2rem;
    width: 30%;
    display: flex;
    align-items: center;
	@media (max-width: 767px) {
		width: 100%;
		padding:2rem 2rem 0;
	}
`

const Image = styled.img`
	max-width:100%;
`

const Footer = () => {
	const linkList = [
        {
			name: "Home",
			href: "/",
		},
		{
			name: "About",
			href: "/#about",
		},
		{
			name: "Rules",
			href: "/#rules",
		},
		{
			name: "Team",
			href: "/team",
		}
	]
	return (
		<Section id="contact">
			<Container>
				<BrandHeader>
					<a href="/">
						<Image src={logo}/>
					</a>
				</BrandHeader>
				<ParentWrapper>

				<MetaWrapper>
					<LinksWrapper>
						{
							linkList.map((obj,i) => (
								<a  href={obj.href}>
									<Links key={i}>
										{obj.name}
									</Links>
								</a>
							))
						}
					</LinksWrapper>
				</MetaWrapper>
				{/* <FlexBreak /> */}
				<SocialWrapper>
					<IconContainer href="https://www.instagram.com/randomizemuj/">
						<Icon className="fab fa-instagram" />
					</IconContainer>
					<IconContainer href="https://github.com/Randomize-MUJ/">
						<Icon className="fab fa-github" />
					</IconContainer>
					<IconContainer href="https://www.linkedin.com/company/randomizemuj/">
						<Icon className="fab fa-linkedin-in" />
					</IconContainer>
				</SocialWrapper>
			</ParentWrapper>
		</Container>
	</Section>
	)
}

export default Footer