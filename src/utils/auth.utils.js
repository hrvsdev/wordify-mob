import { validate } from "email-validator";

export const isNameShort = (name) => {
  if (name.trim().length < 3) {
    return true;
  }
  return false;
};

export const isEmailInvalid = (email) => {
  if (!validate(email)) {
    return true;
  }
  return false;
};

export const isPassWeak = (password) => {
  if (password.trim().length < 6) {
    return true;
  }
  return false;
};

export const isPassEmpty = (password)=>{
  if(password.trim().length===0){
    return true
  }
  return false
}