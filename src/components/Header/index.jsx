import React from "react";
import { a, useNavigate } from "react-router-dom";
import Images from "../../theme/Images";
import "./styles.scss";

const Header = () => {

  const navigate = useNavigate()

  return (
    <div className="main-header">
      <span className="logo-cont">
        <img src={Images.Logo} alt="" />
        <h3>YOUTUBE TRANSCRIPT SUMMARIZER</h3>
      </span>
      <span className="header-links-cont">
        <p className="header-links" onClick={()=>navigate("/")} >Home</p>
        <p className="header-links" onClick={()=>navigate("/summarize")}>Summarize Now</p>
        <p className="header-links">About Us</p>
      </span>
    </div>
  );
};

export default Header;
