import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/premPlatter.jpg";
import "../styles/Home.css";

function Home() {
return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className="headerContainer">
        <h1> Manila Bay Express </h1>
        <p> Authentic Filipino Cuisine</p>
        <Link to="/menu">
        <button> ORDER NOW </button>
        </Link>
    </div>
    </div>
);
}

export default Home;