import "./hero.css";
import hero_image from "../Assests/hero.jpg";
import arrow_icon from "../Assests/arrow icon.png";
import hand_icon from "../Assests/hand_icon.png";

export const Hero = () => {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero_left">
        <h2>Handcrafted With Love</h2>
        <div className="hero_text_container">
          <div className="hero_hand_icon" aria-label="Waving hand icon">
            <p>Discover</p>
            <img src={hand_icon} alt="Waving hand" />
          </div>
          <p className="hero_main_text">Artisanal</p>
          <p className="hero_sub_text">Crochet Collections</p>
          <p className="hero_tagline">for every story</p>
        </div>
        <button className="hero_latest_btn" aria-label="View latest collection">
          <span>Explore Collection</span>
          <img src={arrow_icon} alt="Right arrow" />
        </button>
      </div>

      <div className="hero_right">
        <img
          src={hero_image}
          alt="Beautiful crochet clothing collection"
          loading="eager"
        />
      </div>
    </section>
  );
};
