import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "../layouts/Navbar";

const Home = () => {
	return (
		<section className="landing">
			<Navbar />
			<div className="dark-overlay">
				<div className="landing-inner">
					<h1 className="x-large">CryptX</h1>
					<p className="lead">
						Can you scratch your grey matter to crack these levels?
					</p>
					<div className="buttons">
						<Link to="/level" className="btn btn-primary btn-lg">
							CRACK IT
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
