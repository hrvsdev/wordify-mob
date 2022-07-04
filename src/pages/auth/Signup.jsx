import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import WordifyIcon from "../../assets/auth/wordify";
import GoogleIcon from "../../assets/auth/google";
import FacebookIcon from "../../assets/auth/facebook";
import TwitterIcon from "../../assets/auth/twitter";
import EmailIcon from "../../assets/auth/email";
import PasswordIcon from "../../assets/auth/password";
import UserIcon from "../../assets/auth/user";
import EyeIcon from "../../assets/auth/eye";
import EyeOffIcon from "../../assets/auth/eyeOff";

import { Context } from "../../Context";
import {
  isEmailInvalid,
  isNameShort,
  isPassWeak,
} from "../../utils/auth.utils";

export default function Signup() {
  // Navigation hook
  const navigate = useNavigate();

  // Context
  const { user, setUser } = useContext(Context);

  // Input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Show password state
  const [showPassword, setShowPassword] = useState(false);

  // Signup response error state
  const [signupErr, setSignupErr] = useState({});

  // Show error states
  const [nameShort, setNameShort] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordInsecure, setPasswordInsecure] = useState(false);

  // User data for signup
  const userData = {
    name: name.trim(),
    email: email.trim(),
    password: password.trim(),
  };

  // Signup function
  const handleSignup = async () => {
    const url = "http://localhost:5000/local/signup";
    const nameErr = isNameShort(name, setNameShort);
    const emailErr = isEmailInvalid(email, setEmailError);
    const passErr = isPassWeak(password, setPasswordInsecure);
    if (nameErr || emailErr || passErr) return;

    try {
      const res = await axios.post(url, userData, { withCredentials: true });
      setUser(res.data.user);
      navigate("/");
    } catch (err) {
      if (err.response.data.type === "EmailExist") setEmailError(true);
      setSignupErr(err.response.data);
    }
  };

  // Form submission function
  const formSubmit = (e) => {
    e.preventDefault();
    setSignupErr({});
    handleSignup();
  };

  // Show password eye function
  const eyeObj = {
    className: "eye",
    onClick: () => {
      setShowPassword((prev) => !prev);
    },
  };

  return (
    <div className="login-container">
      <div className="left-side">
        <form onSubmit={formSubmit} className="login-wrapper">
          <div className="logo-wrapper">
            <WordifyIcon className="logo" />
          </div>
          <div className="tagline-wrapper">
            <p>Access all your notes from anywhere</p>
          </div>
          <div className="login-text-wrapper">
            <p>Create a new account</p>
          </div>
          <div className="input-wrapper">
            <div className="name-wrapper">
              <UserIcon className="name" />
              <input
                className={nameShort ? "input-error" : null}
                type="text"
                placeholder="Enter your name"
                id="name"
                autoCapitalize="words"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <p className={`error ${nameShort ? "show-error" : null}`}>
              Name is too short
            </p>
            <div className="email-wrapper">
              <EmailIcon className="email" />
              <input
                className={emailError ? "input-error" : null}
                type="email"
                placeholder="Enter your email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <p className={`error ${emailError ? "show-error" : null}`}>
              {signupErr.type === "EmailExist"
                ? "Email is already in use"
                : "Please enter a valid email"}
            </p>
            <div className="password-wrapper">
            <PasswordIcon className="password" />
              {showPassword ? (
                <EyeOffIcon {...eyeObj} />
              ) : (
                <EyeIcon {...eyeObj} />
              )}
              <input
                className={passwordInsecure ? "input-error" : null}
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                spellCheck={false}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <p
            className={`pw-error error ${
              passwordInsecure ? "show-error" : null
            }`}
          >
            Password should be atleast 6 character long
          </p>
          <div className="btn-wrapper">
            <button type="submit">Sign up</button>
          </div>
          <div className="continue-wrapper">
            <p>or continue with</p>
          </div>
          <div className="social-wrapper">
            <Link title="Google" to="/connect" className="google">
              <GoogleIcon />
            </Link>
            <Link title="Facebook" to="/connect" className="facebook">
              <FacebookIcon />
            </Link>
            <Link title="Twitter" to="/connect" className="twitter">
              <TwitterIcon />
            </Link>
          </div>
          <div className="signup-wrapper">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
