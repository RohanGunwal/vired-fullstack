import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";

export default function Register(props) {
  const {
    setEmail,
    setPassword,
    setName,
    setGender,
    setAge,
    emailError,
    passwordError,
    nameError,
    ageError,
    setEmailError,
    setPasswordError,
    setNameError,
    setAgeError,
    showPassword,
    setShowPassword,
  } = props;
  return (
    <div>
      <div className="mb-6">
        <TextField
          required
          error={nameError ? true : false}
          type="text"
          label="Username"
          className="bg-white w-96"
          helperText={nameError}
          name="name"
          onChange={(e) => {
            setNameError(false);
            setName(e.target.value);
          }}
        />
      </div>
      <div className="mb-6">
        <TextField
          required
          error={emailError ? true : false}
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
      <div className="mb-6 relative">
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
      </div>
      <div className="mb-6">
        <TextField
          required
          error={ageError ? true : false}
          label="Age"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          className="bg-white w-96"
          helperText={ageError}
          onChange={(e) => {
            setAge(e.target.value);
            setAgeError(false);
          }}
        />
      </div>
      <div className="mb-6">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            required
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="male"
            name="radio-buttons-group"
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}
