import React from "react";

//include images into your bundle
import Navbar from "./navbar";
import Card from "./card"
import Jumbotron from "./jumbotron";
import Footer from "./footer";
import "../../styles/index.css";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="container" >
				<Jumbotron />
				<div className="card-group cards">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
