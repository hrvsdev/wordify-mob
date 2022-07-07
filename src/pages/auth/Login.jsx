import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth"
import axios from "axios";

import WordifyIcon from "../../assets/auth/Wordify";
import GoogleIcon from "../../assets/auth/Google";
import FacebookIcon from "../../assets/auth/Facebook";
import TwitterIcon from "../../assets/auth/Twitter";
import EmailIcon from "../../assets/auth/Email";
import PasswordIcon from "../../assets/auth/Password";
import EyeIcon from "../../assets/auth/Eye";
import EyeOffIcon from "../../assets/auth/EyeOff";

import { Context } from "../../Context";
import { isEmailInvalid } from "../../utils/auth.utils";

import "./auth.scss";
import { auth, signInWithFB, signInWithGoogle, signInWithTwitter } from "../../firebase/auth";

export default function Login() {
  // Navigation hook
  const navigate = useNavigate();

  // Context
  const { setUser, setForgotEmail } = useContext(Context);

  // Input states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Show password state
  const [showPassword, setShowPassword] = useState(false);

  // Login response error state
  const [loginErr, setLoginErr] = useState({});

  // Error states
  const [emailError, setEmailError] = useState(false);
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);

  // User data for login
  const userData = { email: email.trim(), password: password.trim() };

  // Login function
  const handleLogin = async () => {
    const url = "http://localhost:5000/local/login";
    const emailErr = isEmailInvalid(email, setEmailError);
    if (emailErr) return;
    try {
      const res = await axios.post(url, userData, { withCredentials: true });
      console.log(res.data)
      setUser(res.data);
      navigate("/");
    } catch (err) {
      if (err.response.data.type === "EmailNotFound") {
        setEmailError(true);
        return setLoginErr(err.response.data);
      } else if (err.response.data.type === "IncPass") {
        setPasswordIncorrect(true);
      }
    }
  };

  // Form submission function
  const formSubmit = (e) => {
    e.preventDefault();
    setLoginErr({});
    setPasswordIncorrect(false);
    handleLogin();
  };

  // Forgot password function
  const navigateForgotPasswprd = async () => {
    const url = "http://localhost:5000/forgot-password";
    const emailErr = isEmailInvalid(email, setEmailError);
    if (emailErr) return;

    try {
      await axios.post(url, { email: email.trim() });
      setForgotEmail(email);
      navigate("/forgot-password");
    } catch (err) {
      if (err.response.data.type === "EmailNotFound") {
        setEmailError(true);
        return setLoginErr(err.response.data);
      }
    }
  };

  // Show password eye function
  const eyeObj = {
    className: "eye",
    onClick: () => {
      setShowPassword((prev) => !prev);
    },
  };

  // const [user] = useAuthState(auth)

  // useEffect(() => {
  //   user && console.log(user.email, user.uid, user.displayName)
  // }, [user])
  

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
            <p>Login to your account</p>
          </div>
          <div className="input-wrapper">
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
              {loginErr.type === "EmailNotFound"
                ? "The email you entered doesn't have an account"
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
                className={passwordIncorrect ? "input-error" : null}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="forgot-wrapper">
            <p className={`error ${passwordIncorrect ? "show-error" : null}`}>
              Incorrect Password
            </p>
            <a onClick={navigateForgotPasswprd}>Forgot password?</a>
          </div>
          <div className="btn-wrapper">
            <button type="submit">Login</button>
          </div>
          <div className="continue-wrapper">
            <p>or continue with</p>
          </div>
          <div className="social-wrapper">
            <div
              title="Google"
              onClick={signInWithGoogle}
              className="google"
            >
              <GoogleIcon />
            </div>
            <div
              title="Facebook"
              onClick={signInWithFB}
              className="facebook"
            >
              <FacebookIcon />
            </div>
            <div
              title="Twitter"
              onClick={signInWithTwitter}
              className="twitter"
            >
              <TwitterIcon />
            </div>
          </div>
          <div className="signup-wrapper">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
