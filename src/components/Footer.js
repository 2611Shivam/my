import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/kshivam2611/" target="blank" ><InstagramIcon /></a>
        <a href="https://www.facebook.com/kumar.shivam.7927/" target="blank"> <FacebookIcon /></a>
        <a href="https://twitter.com/Shivam26_11" target="blank"><TwitterIcon /></a>
        <a href="https://www.linkedin.com/in/kumar-shivam-2336bb215/" target="blank"><LinkedInIcon /></a>
        <a href="https://github.com/2611Shivam" target="blank"><GitHubIcon /></a>
        
      </div>
      <p> &copy; 2023 shivamdev.com </p>
    </div>
  );
};

export default Footer;
