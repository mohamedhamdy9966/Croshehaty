import React from "react";
import "./Footer.css";
import whatsapp_icon from "../Assests/whatsapp_logo.webp";
import instagram_icon from "../Assests/instagram_logo.jpg";
import facebook_icon from "../Assests/facebook.png";
import youtube_icon from "../Assests/youtube.png";
import twitter_icon from "../Assests/twitter.png";
import footer_logo from "../Assests/footer_logo.jpg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={footer_logo} alt="footer_logo" />
        <p>CROCHEHATY</p>
      </div>
      <ul className="footer_links">
        <li>Company</li>
        <li>Products</li>
        <li>Branches</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer_social_icons">
        <div className="footer_icon_container">
          <img src={instagram_icon} alt="instagram_icon" />
        </div>
        <div className="footer_icon_container">
          <img src={whatsapp_icon} alt="whatsapp_icon" />
        </div>
        <div className="footer_icon_container">
          <img src={facebook_icon} alt="instagram_icon" />
        </div>
        <div className="footer_icon_container">
          <img src={twitter_icon} alt="instagram_icon" />
        </div>
        <div className="footer_icon_container">
          <img src={youtube_icon} alt="instagram_icon" />
        </div>
      </div>
      <div className="footer_copyrights">
        <hr />
        <p>copyright @ 2023 - All Rights Reserved</p>
      </div>
    </div>
  );
};
