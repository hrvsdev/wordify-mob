import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import WordifyIcon from "../../assets/auth/wordify";
import PasswordIcon from "../../assets/auth/password";
import EyeIcon from "../../assets/auth/eye";
import EyeOffIcon from "../../assets/auth/eyeOff";

import { Context } from "../../Context";
import { isPassWeak } from "../../utils/auth.utils";

export default function Forgot() {
  // Navigation hook
  const navigate = useNavigate();

  // Context
  const { forgotEmail } = useContext(Context);

  // Input states
  const [password, setPassword] = useState("");
  const [OTP, setOTP] = useState("");

  // Show password state
  const [showPassword, setShowPassword] = useState(false);

  // Error states
  const [passwordInsecure, setPasswordInsecure] = useState(false);
  const [OTPIncorrect, setOTPIncorrect] = useState(false);

  // Checking if user entered the URL manually or redirected
  useEffect(() => {
    !forgotEmail && navigate("/login");
  }, []);

  // OTP and password data
  const OTPData = {
    email: forgotEmail.trim(),
    otp: OTP.trim(),
    newPass: password.trim(),
  };

  // OTP verification and restore password function
  const handleForgotPassword = async () => {
    const passErr = isPassWeak(password, setPasswordInsecure);
    if (passErr) return;
    try {
      const url = "http://localhost:5000/verify-otp";
      await axios.post(url, OTPData);
      navigate("/login");
    } catch (err) {
      console.log(err);
      if (err.response.data.type === "IncOTP") return setOTPIncorrect(true);
    }
  };

  // Form submission function
  const formSubmit = async (e) => {
    e.preventDefault();
    setPasswordInsecure(false);
    handleForgotPassword();
  };

  // Show password eye function
  const eyeObj = {
    className: "eye",
    onClick: (e) => {
      setShowPassword((prev) => !prev);
    },
  };

  return (
    <div className="forgot-container login-container">
      <div className="left-side">
        <form onSubmit={formSubmit} className="login-wrapper">
          <div className="logo-wrapper">
            <WordifyIcon className="logo" />
          </div>
          <div className="tagline-wrapper">
            <p>Access all your notes from anywhere</p>
          </div>
          <div className="login-text-wrapper">
            <p>Reset your password</p>
          </div>
          <div className="forgot-send-to">
            A code is sent to&nbsp;
            <span>{forgotEmail}</span>
          </div>
          <div className="input-wrapper">
            <div className="otp-wrapper">
              <PasswordIcon className="otp" />
              <input
                className={OTPIncorrect ? "input-error" : null}
                type="text"
                placeholder="Enter code"
                id="otp"
                onChange={(e) => setOTP(e.target.value)}
              />
            </div>
            <p className={`error ${OTPIncorrect ? "show-error" : null}`}>
              Please enter correct OTP
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
            <button type="submit">Continue</button>
          </div>
          <div className="signup-wrapper">
            Want a new account? <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
