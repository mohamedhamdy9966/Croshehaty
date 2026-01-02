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
        <img src={footer_logo} alt="Crochehaty Logo" />
        <p>CROCHEHATY</p>
      </div>

      <ul className="footer_links" aria-label="Quick links">
        <li role="button" tabIndex="0">
          Home
        </li>
        <li role="button" tabIndex="0">
          Products
        </li>
        <li role="button" tabIndex="0">
          Collections
        </li>
        <li role="button" tabIndex="0">
          About Us
        </li>
        <li role="button" tabIndex="0">
          Contact
        </li>
      </ul>

      <div className="footer_social_icons" aria-label="Social media links">
        <div
          className="footer_icon_container"
          role="button"
          tabIndex="0"
          title="Follow us on Instagram"
        >
          <img src={instagram_icon} alt="Instagram" />
        </div>
        <div
          className="footer_icon_container"
          role="button"
          tabIndex="0"
          title="Message us on WhatsApp"
        >
          <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
        <div
          className="footer_icon_container"
          role="button"
          tabIndex="0"
          title="Like us on Facebook"
        >
          <img src={facebook_icon} alt="Facebook" />
        </div>
        <div
          className="footer_icon_container"
          role="button"
          tabIndex="0"
          title="Follow us on Twitter"
        >
          <img src={twitter_icon} alt="Twitter" />
        </div>
        <div
          className="footer_icon_container"
          role="button"
          tabIndex="0"
          title="Watch us on YouTube"
        >
          <img src={youtube_icon} alt="YouTube" />
        </div>
      </div>

      <div className="footer_newsletter">
        <input
          type="email"
          placeholder="📧 Enter your email for updates..."
          aria-label="Email newsletter subscription"
        />
        <button type="button" aria-label="Subscribe to newsletter">
          Subscribe
        </button>
      </div>

      <div className="footer_copyrights">
        <hr />
        <p>© {new Date().getFullYear()} Crochehaty - All Rights Reserved • Handmade with 🧶 and ❤️</p>
        <p style={{ fontSize: "0.9rem", color: "#888", fontStyle: "italic" }}>
          Every stitch tells a story of craftsmanship and love
        </p>
        <span>Made with ❤️ by Taxi</span>
      </div>
    </div>
  );
};
