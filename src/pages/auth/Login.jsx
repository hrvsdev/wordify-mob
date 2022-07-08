import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { NotificationsProvider,
  showNotification,
} from "@mantine/notifications";

import WordifyIcon from "../../assets/auth/Wordify";
import GoogleIcon from "../../assets/auth/Google";
import FacebookIcon from "../../assets/auth/Facebook";
import TwitterIcon from "../../assets/auth/Twitter";
import EmailIcon from "../../assets/auth/Email";
import PasswordIcon from "../../assets/auth/Password";

import { Context } from "../../Context";
import { isEmailInvalid, isPassEmpty } from "../../utils/auth.utils";
import { InputError } from "./components/InputError";
import { PasswordShowAndHide } from "./components/ShowPassword";

import "./auth.scss";

import {
  auth,
  logInLocal,
  resetPasswordEmail,
  signInWithFB,
  signInWithGoogle,
  signInWithTwitter,
} from "../../firebase/auth";

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

  // Error states
  const [emailErr, setEmailErr] = useState({ state: false, text: "" });
  const [passwordErr, setPasswordErr] = useState({ state: false, text: "" });

  // Form submission function
  const formSubmit = (e) => {
    e.preventDefault();

    setEmailErr({ state: false });
    setPasswordErr({ state: false });

    const emailErrBool = isEmailInvalid(email);
    const passErrBool = isPassEmpty(password);

    if (emailErrBool || passErrBool) {
      setEmailErr({ state: emailErrBool, text: "Invalid email" });
      setPasswordErr({ state: passErrBool, text: "Invalid password" });
    } else handleLogin();
  };

  // Handle Login
  const handleLogin = async () => {
    const errType = await logInLocal(email, password);

    if (errType === "auth/user-not-found") {
      return setEmailErr({ state: true, text: "Email doesn't exist" });
    } else if (errType === "auth/wrong-password") {
      return setPasswordErr({ state: true, text: "Incorrect password" });
    }
  };

  // Forgot password navigation
  const navigateForgotPassword = async () => {
    const emailErrBool = isEmailInvalid(email);
    if (emailErrBool) {
      return setEmailErr({ state: emailErrBool, text: "Invalid email" });
    }
    for (let i = 0; i < 50; i++) { 
      handleForgotPassword();
      console.log("done")
    }
    showNotification({
      title: "Email sent to " + email,
      message: "Please check your email for further instructions",
      color: "teal",
    });
  };

  // Handle forgot password
  const handleForgotPassword = async () => {
    const errType = await resetPasswordEmail(email);
    if (errType === "auth/user-not-found") {
      return setEmailErr({ state: true, text: "Email doesn't exist" });
    }
  };

  const [user] = useAuthState(auth);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <NotificationsProvider>
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
                  className={emailErr.state ? "input-error" : null}
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <InputError state={emailErr} />
              <div className="password-wrapper">
                <PasswordIcon className="password" />
                <PasswordShowAndHide
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />
                <input
                  className={passwordErr.state ? "input-error" : null}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="forgot-wrapper">
              <InputError state={passwordErr} />
              <a onClick={navigateForgotPassword}>Forgot password?</a>
            </div>
            <div className="btn-wrapper">
              <button type="submit">Login</button>
            </div>
            <div className="continue-wrapper">
              <p>or continue with</p>
            </div>
            <div className="social-wrapper">
              <div onClick={signInWithGoogle}>
                <GoogleIcon />
              </div>
              <div onClick={signInWithFB}>
                <FacebookIcon />
              </div>
              <div onClick={signInWithTwitter}>
                <TwitterIcon />
              </div>
            </div>
            <div className="signup-wrapper">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </NotificationsProvider>
  );
}