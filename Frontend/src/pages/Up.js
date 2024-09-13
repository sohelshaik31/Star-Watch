import React, { useState } from 'react';
import back from './images/background.jpg';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();

    if (!name || !phone || !email || !password) {
      window.alert('Please fill all fields');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/signup', {
        name,
        phone,
        email,
        password,
      });

      if (res.data.status === 'success') {
        window.location.replace('/Signin');
      } else {
        window.alert('Sign up failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      window.alert('An error occurred while signing up');
    }
  };

  return (
    <div className='body1'>
      <img className='main1 w-100' src={back} alt='Background' />
      <div className='signin1 col-3 rounded-2'>
        <h2>Sign up</h2>
        <form onSubmit={handleSignup}>
          <input
            onChange={(event) => setName(event.target.value)}
            placeholder='Enter name'
            type='text'
            name='name'
            className='pad form-control p-2 mt-3'
            required
          />
          <input
            onChange={(event) => setPhone(event.target.value)}
            placeholder='Enter phone number'
            type='text'
            name='phone'
            className='pad form-control p-2 mt-4'
            required
          />
          <input
            onChange={(event) => setEmail(event.target.value)}
            placeholder='Enter email'
            type='email'
            name='email'
            className='pad form-control p-2 mt-3'
            required
          />
          <input
            onChange={(event) => setPassword(event.target.value)}
            placeholder='Password'
            type='password'
            name='password'
            className='pad form-control p-2 mt-4'
            required
          />
          <button type='submit' className='form-control btn btn-danger mt-3 p-2'>
            Sign up
          </button>
        </form>
        <span>
          Already have an account? <a href='/Signin'>Sign in</a>
        </span>
      </div>
      <div className='trans w-100'></div>
    </div>
  );
};

export default Signup;
