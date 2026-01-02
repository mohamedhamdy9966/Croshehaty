import { useState } from "react";
import "./newsletter.css";

export const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email address");
      setMessageType("error");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address");
      setMessageType("error");
      return;
    }

    // Simulate successful subscription
    setMessage(
      "🎉 Thank you for subscribing! Check your email for exclusive offers."
    );
    setMessageType("success");
    setEmail("");

    // Clear message after 5 seconds
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 5000);
  };

  return (
    <section className="newsletter" aria-label="Newsletter Subscription">
      <h2>Join Our Crochet Community</h2>
      <p>
        Subscribe to our newsletter for exclusive patterns, tips, and special
        offers
      </p>

      <form className="emails" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
          required
        />
        <button type="submit" aria-label="Subscribe to newsletter">
          <span>Subscribe</span>
        </button>
      </form>

      {message && (
        <div className={`newsletter_message ${messageType}`} role="alert">
          {message}
        </div>
      )}

      <p className="newsletter_privacy">
        By subscribing, you agree to our{" "}
        <a href="/privacy" aria-label="Privacy policy">
          Privacy Policy
        </a>
        . We respect your privacy and never share your information.
      </p>
    </section>
  );
};
