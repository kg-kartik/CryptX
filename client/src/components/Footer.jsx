import React from 'react';
import styled from "styled-components";
import theme from '../styles/themes';

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
	}
`


const ContactContainer = styled.div`
	display:flex;
	flex-direction:row;
	justify-content:space-between;
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
	li:first-child {
		list-style: none;
	}
	li:last-child {
		padding: 0;
	}
	@media (max-width: 767px) {
		padding: 0 !important;
	}
	margin-top:5vh;
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

const ContactInfo = styled.div`
	display:flex;
	flex-direction:column;
	justify-content:center;
	font-size:1.2rem;
	color: #b7b7b7;
	letter-spacing:0;
	padding: 0 3rem;
	margin-bottom:0;
	@media (max-width: 767px) {
		justify-content:center;
		padding-top:8vh;
	}
`

const SocialWrapper = styled.div`
	padding-bottom: 4rem;
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

const ContactHeading = styled.h4`
	font-size: 1.25rem;
	letter-spacing: 0;
	padding: 1rem 0;
`

const ContactWrapper = styled.div`
	margin: 0 0 1rem;
`

const Footer = () => {
	const linkList = [
        {
			name: "Home",
			href: "/home",
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
				<ContactInfo>
					<ContactHeading>Contact Us:</ContactHeading>
					<ContactWrapper>
						<ContactContainer>
							<b className="pr-5">Arijit Roy</b>
							987654321
						</ContactContainer>
						<ContactContainer>
							<b className="pr-5">Nitigya Kargeti</b>
							987654321
						</ContactContainer>
					</ContactWrapper>
				</ContactInfo>
				<ParentWrapper>

				<MetaWrapper>
					<LinksWrapper>
						{
							linkList.map((obj,i) => (
								<a key={i} href={obj.href}>
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
					<IconContainer href="https://www.instagram.com/randomize.muj/">
						<Icon className="fab fa-instagram" />
					</IconContainer>
					<IconContainer href="https://www.facebook.com/randomize/">
						<Icon className="fab fa-facebook" />
					</IconContainer>
					<IconContainer href="https://www.linkedin.com/randomize/">
						<Icon className="fab fa-linkedin-in" />
					</IconContainer>
				</SocialWrapper>
			</ParentWrapper>
		</Container>
	</Section>
	)
}

export default Footer