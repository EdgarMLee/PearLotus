import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../../store/session";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      }
    } else {
      return setErrors(["password: Passwords do not match!"]);
    }
  };

  useEffect(() => {
    const errors = [];
    if (username.length < 5) errors.push("username: *Username must be at least 5 characters!")
    if (username.length > 49) errors.push("username: *Username must be less than 50 characters!")
    if (!email.includes("@") || !email.includes(".com")) errors.push("email: *Email must be valid!")
    setErrors(errors)
  }, [username, email]);

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div className="signUpBox">
        <div className="signupTitle">Sign Up</div>
        <div className="signupErrors">
          {
            errors.map((error, ind) => (
              <div key={ind}>{error.split(": ")[1]}</div>
            ))}
        </div>
        <div className="input-container">
          <div className="inputItem">
            {/* <label>UserName</label> */}
            <input
              type="text"
              name="username"
              className="userInputs"
              onChange={updateUsername}
              value={username}
              placeholder="Username"
              required
            ></input>
          </div>
          <div className="inputItem">
            {/* <label>Email</label> */}
            <input
              type="text"
              name="email"
              className="emailInputs"
              onChange={updateEmail}
              value={email}
              placeholder="Email"
              required
            ></input>
          </div>
          <div className="inputItem">
            {/* <label>Password</label> */}
            <input
              type="password"
              name="password"
              className="passwordInputs"
              onChange={updatePassword}
              value={password}
              placeholder="Password"
              required
            ></input>
          </div>
          <div className="inputItem">
            {/* <label>Repeat Password</label> */}
            <input
              type="password"
              name="repeat_password"
              className="passwordInputs"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              placeholder="Repeat Password"
              required={true}
            ></input>
          </div>
          <div className="signUpButtondiv">
            <button
              type="submit"
              className="signUpButton"
              disabled={errors.length > 0}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
