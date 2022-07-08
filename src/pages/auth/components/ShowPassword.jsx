import EyeIcon from "../../../assets/auth/Eye";
import EyeOffIcon from "../../../assets/auth/EyeOff";

export function PasswordShowAndHide({ showPassword, setShowPassword }) {
  // Show password eye function
  const eyeObj = {
    className: "eye",
    onClick: () => {
      setShowPassword((prev) => !prev);
    },
  };

  return showPassword ? <EyeOffIcon {...eyeObj} /> : <EyeIcon {...eyeObj} />;
}
