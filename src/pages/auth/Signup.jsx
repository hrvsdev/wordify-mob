import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import WordifyIcon from "../../assets/auth/Wordify";
import GoogleIcon from "../../assets/auth/Google";
import FacebookIcon from "../../assets/auth/Facebook";
import TwitterIcon from "../../assets/auth/Twitter";
import EmailIcon from "../../assets/auth/Email";
import PasswordIcon from "../../assets/auth/Password";
import UserIcon from "../../assets/auth/User";

import { Context } from "../../Context";
import { InputError } from "./components/InputError";
import { PasswordShowAndHide } from "./components/ShowPassword";
import {
  isEmailInvalid,
  isNameShort,
  isPassWeak,
} from "../../utils/auth.utils";

import {
  signInWithFB,
  signInWithGoogle,
  signInWithTwitter,
  signUpLocal,
} from "../../firebase/auth";

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

  // Error states
  const [nameErr, setNameErr] = useState({ state: false, text: "" });
  const [emailErr, setEmailErr] = useState({ state: false, text: "" });
  const [passwordErr, setPasswordErr] = useState({ state: false, text: "" });

  // Form submission function
  const formSubmit = (e) => {
    e.preventDefault();

    setNameErr({ state: false });
    setEmailErr({ state: false });
    setPasswordErr({ state: false });

    const nameErrBool = isNameShort(name);
    const emailErrBool = isEmailInvalid(email);
    const passErrBool = isPassWeak(password);

    if (emailErrBool || passErrBool || passErrBool) {
      const nameErrText = "Name must be at least 3 character long";
      const emailErrText = "Invalid email";
      const passErrText = "Password should be at least 6 character long";

      setNameErr({ state: nameErrBool, text: nameErrText });
      setEmailErr({ state: emailErrBool, text: emailErrText });
      setPasswordErr({ state: passErrBool, text: passErrText });
    } else handleSignup();
  };

  // Handle Login
  const handleSignup = async () => {
    const errType = await signUpLocal(name, email, password);

    if (errType === "auth/email-already-in-use") {
      return setEmailErr({ state: true, text: "Email already in use" });
    }
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
                className={nameErr.state ? "input-error" : null}
                type="text"
                placeholder="Enter your name"
                id="name"
                autoCapitalize="words"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <InputError state={nameErr} />
            <div className="email-wrapper">
              <EmailIcon className="email" />
              <input
                className={emailErr.state ? "input-error" : null}
                type="email"
                placeholder="Enter your email"
                id="email"
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
                placeholder="Create a strong password"
                spellCheck={false}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <InputError state={passwordErr} />
          <div className="btn-wrapper">
            <button type="submit">Sign up</button>
          </div>
          <div className="continue-wrapper">
            <p>or continue with</p>
          </div>
          <div className="social-wrapper">
            <div title="Google" onClick={signInWithGoogle} className="google">
              <GoogleIcon />
            </div>
            <div title="Facebook" onClick={signInWithFB} className="facebook">
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
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
