import React from "react";
import { Link } from "react-router-dom";
import videobg from "../assets/videobg.mp4";
import style from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={style.landing}>
      <div className={style.overlay}></div>
      <video src={videobg} autoPlay loop muted ></video>
      <div className={style.content}>
      <h1>UP FOR A TRIP?</h1>
      <Link to={"/home"}style={{ textDecoration: 'none', color: 'white' }}>
      <h2>Let's go</h2>
      </Link>
      </div>
    </div>
  );
  
}

export default LandingPage;