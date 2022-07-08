import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import app from "./config";

// Auth Instance
const auth = getAuth(app);

// Google Auth
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider.addScope("email"));
  } catch (err) {
    console.log(err);
  }
};

// Facebook Auth
const fbProvider = new FacebookAuthProvider();
const signInWithFB = async () => {
  try {
    await signInWithPopup(auth, fbProvider.addScope("email"));
  } catch (err) {
    console.log(err);
  }
};

// Twitter Auth
const twitterProvider = new TwitterAuthProvider();
const signInWithTwitter = async () => {
  try {
    await signInWithPopup(auth, twitterProvider.addScope("email"));
  } catch (err) {
    console.log(err);
  }
};

// Local Auth -  Signup
const signUpLocal = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(res.user, { displayName: name });
  } catch (err) {
    console.log(err);
    return err.code;
  }
};

// Local Auth -  Login
const logInLocal = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
    return err.code;
  }
};

// Local Auth - Reset Password
const resetPasswordEmail = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
  } catch (err) {
    console.log(err);
    return err.code;
  }
};

export {
  auth,
  signInWithGoogle,
  signInWithFB,
  signInWithTwitter,
  signUpLocal,
  logInLocal,
  resetPasswordEmail
};
