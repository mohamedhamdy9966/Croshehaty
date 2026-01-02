import "./CSS/loginsignup.css";

export const SignUpLogin = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup_container">
        <div className="loginsignup_header">
          <div className="loginsignup_icon">🧶</div>
          <h2>Join Our Crochet Community</h2>
          <p className="loginsignup_subtitle">
            Create an account to explore handmade treasures and enjoy exclusive
            benefits
          </p>
        </div>

        <div className="login-switch">
          <button className="login-switch-btn active">Sign Up</button>
          <button className="login-switch-btn">Log In</button>
        </div>

        <div className="loginsignup_feilds">
          <div className="input-group">
            <span className="input-icon">👤</span>
            <input type="text" placeholder="Your Full Name" />
          </div>

          <div className="input-group">
            <span className="input-icon">✉️</span>
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input type="password" placeholder="Create Password" />
            <span className="password-toggle">👁️</span>
          </div>
        </div>

        <button>
          Create Account
          <span className="button-arrow">→</span>
        </button>

        <p className="loginsignup_login">
          Already part of our crafting community?
          <span>Log In Here</span>
        </p>

        <div className="loginsignup_agree">
          <input type="checkbox" name="" id="agree-checkbox" />
          <p>
            By continuing, I agree to the
            <a href="/terms" className="terms-link">
              {" "}
              terms & conditions
            </a>
            and
            <a href="/privacy" className="terms-link">
              {" "}
              privacy policy
            </a>
          </p>
        </div>

        <div
          style={{
            marginTop: "30px",
            textAlign: "center",
            paddingTop: "20px",
            borderTop: "1px solid #f0e6d9",
          }}
        >
          <p style={{ color: "#8d6e63", fontSize: "14px", margin: 0 }}>
            Need help?{" "}
            <a
              href="/contact"
              style={{
                color: "#5d4037",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpLogin;
