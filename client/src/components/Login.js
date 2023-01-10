import { TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login(props) {
  const {
    setEmail,
    setPassword,
    emailError,
    passwordError,
    setEmailError,
    setPasswordError,
    showPassword,
    setShowPassword,
  } = props;
  return (
    <div className="text-center">
      <div className="mb-6">
        <TextField
          error={emailError ? true : false}
          required
          type="email"
          label="Email"
          className="bg-white w-96"
          name="email"
          helperText={emailError}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false);
          }}
        />
      </div>
      <div className="flex flex-col mb-6 relative">
        <TextField
          error={passwordError ? true : false}
          required
          label="Password"
          type={showPassword ? "text" : "password"}
          className="bg-white w-96"
          helperText={passwordError}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(false);
          }}
        />
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </div>
        <span className="text-right text-blue-400 cursor-pointer mt-2 hover:text-blue-500 hover:underline">
          Forgot Password?
        </span>
      </div>
    </div>
  );
}
