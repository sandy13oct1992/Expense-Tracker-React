import React, { useState, useContext,useRef } from 'react';
import './Login.css';
// import axios from 'axios';
import CartContext from '../store/CartContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const emailInputRef = useRef();
  const passInputRef = useRef();
  const confirmPassInputRef = useRef();

  // const [isLogin, setIsLogin] = useState(true);

  const CartCtx = useContext(CartContext);

  // const loginStateHandler = () => {
  //   setIsLogin(true);
  // }
  const isLogin=CartCtx.isLoggedIn;

  const emailHandler = (e) => {
    setEmail(e.target.value);

  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)

  }

  const cpasswordHandler = (e) => {
    setConfirmPassword(e.target.value)

  }
  const handleLogin = (e) => {
    e.preventDefault();
    // CartCtx.setIsLogin(true);
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    setMessage("Successful Sign Up");

    // const response = axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB11tSjRawQDNWk800xbZmpUqe2-t6Qm10')
    const emailRef = emailInputRef.current.value;
    const passRef = passInputRef.current.value;
    const confirmPassRef = confirmPassInputRef.current.value;
    let url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB11tSjRawQDNWk800xbZmpUqe2-t6Qm10'
    }
    else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB11tSjRawQDNWk800xbZmpUqe2-t6Qm10'

    } fetch(url, {
      Method: 'POST',
      body: JSON.stringify({
        email: emailRef,
        pass: passRef,
        confirmPass: confirmPassRef,
        returnSecureToken: true,
      }),
      headers: {
        'content-type': 'application/json'
      }


    }).then((res) => {
      if (res.ok) {
        res.json();
      }
      else {
        res.json().then((data) => {
          let errorMessage = 'Authentication failed';
          alert(errorMessage);
          throw new Error(errorMessage);

        })
      }
    }).then((data) => {
      CartCtx.logIn(data.idToken)
      console.log(data);
    })
      .catch((err) => {
        alert(err.message)
      })
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            ref={emailInputRef}
            onChange={emailHandler}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            ref={passInputRef}
            onChange={passwordHandler}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            ref={confirmPassInputRef}
            onChange={cpasswordHandler}
            required
          />
        </div>
        <button type="submit" className="login-button" >Login</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Login;
