import "./offers.css";
import exclusive_img from "../Assests/exclusive_img.jpg";

export const Offers = () => {
  const handleCheckNow = () => {
    // This would typically navigate to offers page or trigger a modal
    console.log("Check Now clicked");
    // For demonstration, we'll scroll to top and log
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="offers" aria-label="Exclusive Offers">
      <div className="offers_left">
        <h1>Exclusive</h1>
        <h2>Handcrafted Offers</h2>
        <p>Special deals on our most loved crochet pieces</p>
        <button
          onClick={handleCheckNow}
          aria-label="Check exclusive offers now"
        >
          Discover Offers
        </button>
      </div>

      <div className="offers-right">
        <img
          src={exclusive_img}
          alt="Exclusive handmade crochet collection"
          loading="lazy"
        />
      </div>
    </section>
  );
};
