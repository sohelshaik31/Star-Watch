import React, { useState } from 'react';
import back from './images/background.jpg';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      window.alert('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/signin', {
        email,
        password,
      });

      if (response.data.status === 'success') {
        console.log(response.data.data);
        window.location.replace('/Home');
      } else {
        window.alert('Invalid credentials or you need to sign up first');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      window.alert('An error occurred during sign-in');
    }
  };

  return (
    <div className="body1">
      <img className="main1 w-100" src={back} alt="Background" />
      <div className="signin1 col-3 rounded-2">
        <h2>Sign in</h2>
        <form onSubmit={handleSignin}>
          <input
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter email"
            type="email"
            name="email"
            className="pad form-control p-2 mt-3"
            required
          />
          <input
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            type="password"
            name="password"
            className="pad form-control p-2 mt-4"
            required
          />
          <button type="submit" className="form-control btn btn-danger mt-3 p-2">
            Sign in
          </button>
        </form>
        <p className="code1">OR</p>
        <button type="button" className="s1 form-control btn btn-light mt-3">
          Use a sign-in code
        </button>
        <p className="code1">Forgot password?</p>
        <input type="checkbox" />
        <label> Remember me</label>
        <p>
          New to Netflix? <a href="/">Sign up now</a>
        </p>
        <span>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </span>
        <a href="#">Forgot password?</a>
      </div>
      <div className="trans w-100"></div>
    </div>
  );
};

export default Signin;
