import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addUser } from "../features/userSlice";
import { useDispatch } from "react-redux";

export default function Auth() {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");

  const [showPassword, setShowPassword] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [ageError, setAgeError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login) {
      axios
        .post("/login", { email, password })
        .then((res) => res.data)
        .then((data) => {
          dispatch(addUser(data.user));
          localStorage.setItem("token", data.token);
          navigate("/home");
        })
        .catch((err) => {
          err.response.data.includes("Email")
            ? setEmailError(err.response.data)
            : err.response.data.includes("Password")
            ? setPasswordError(err.response.data)
            : alert(err.response.data);
        });
    } else {
      axios
        .post("/register", {
          name,
          email,
          password,
          age,
          gender,
        })
        .then((res) => res.data)
        .then((data) => {
          sessionStorage.setItem("user", data.user);
          localStorage.setItem("token", data.token);
          navigate("/home");
        })
        .catch((err) => {
          err.response.data.includes("Username")
            ? setNameError(err.response.data)
            : err.response.data.includes("Email")
            ? setEmailError(err.response.data)
            : err.response.data.includes("Password")
            ? setPasswordError(err.response.data)
            : err.response.data.includes("Age")
            ? setAgeError(err.response.data)
            : alert(err.response.data);
        });
    }
  };
  return (
    <div>
      <section className="grid grid-cols-1 lg:grid-cols-2 mb-8">
        <section>
          <img src="/assets/login.svg" alt="login_image" className="h-full" />
        </section>
        <section className="flex flex-col justify-center items-center">
          <h1 className="text-center font-montserrat font-normal text-5xl">
            {login ? "Login" : "Register"}
          </h1>
          <form
            className="flex flex-col items-center"
            onSubmit={(e) => handleSubmit(e)}
          >
            {login ? (
              <Login
                setEmail={setEmail}
                setPassword={setPassword}
                emailError={emailError}
                passwordError={passwordError}
                setEmailError={setEmailError}
                setPasswordError={setPasswordError}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            ) : (
              <Register
                setEmail={setEmail}
                setGender={setGender}
                setName={setName}
                setPassword={setPassword}
                setAge={setAge}
                nameError={nameError}
                emailError={emailError}
                passwordError={passwordError}
                ageError={ageError}
                setAgeError={setAgeError}
                setEmailError={setEmailError}
                setPasswordError={setPasswordError}
                setNameError={setNameError}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            )}
            <div className="mb-6">
              <button
                className="bg-amber-500 w-48 py-2.5 border-none rounded-md cursor-pointer text-white tracking-wider text-sm font-semibold shadow-lg font-montserrat outline-none focus:ring-2 focus:ring-amber-500 focus:bg-amber-600 hover:bg-amber-600 focus:ring-offset-2"
                value={login ? "Login" : "Register"}
              >
                {login ? "Login" : "Register"}
              </button>
            </div>
            <div className="">
              <span className="text-gray-400 text-sm">
                {login ? "Don't have an account!" : "Already have an account!"}
                <span
                  className="text-blue-400 font-semibold ml-2 hover:underline hover:text-blue-500 cursor-pointer"
                  onClick={() => setLogin(!login)}
                >
                  {login ? "Register" : "Login"}
                </span>
              </span>
            </div>
          </form>
        </section>
      </section>
    </div>
  );
}
