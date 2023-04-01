import React from "react";
import { Images } from "../../../theme";
import "./styles.scss";
const Home = () => {
  return (
    <section className="home-wrapper" style={{backgroundImage: `url(${Images.HomeBG})`}}>
      <span className="home-content">
      <img src={Images.Logo} alt="" />
      <h3>YOUTUBE TRANSCRIPT <br/>SUMMARIZER</h3>

      </span>
    </section>
  );
};

export default Home;
