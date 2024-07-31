// import React, { useState, useContext,useRef } from 'react';
// import './Login.css';
// // import axios from 'axios';
// import CartContext from '../store/CartContext';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const emailInputRef = useRef();
//   const passInputRef = useRef();
//   const confirmPassInputRef = useRef();

//   // const [isLogin, setIsLogin] = useState(true);

//   const {setIsLogin, isLogin} = useContext(CartContext);

//   // const loginStateHandler = () => {
//   //   setIsLogin(true);
//   // }
//   // const isLogin=CartCtx.isLoggedIn;

//   const emailHandler = (e) => {
//     setEmail(e.target.value);

//   }

//   const passwordHandler = (e) => {
//     setPassword(e.target.value)

//   }

//   const cpasswordHandler = (e) => {
//     setConfirmPassword(e.target.value)

//   }
//   const loginUser = async (data) => {
//     try {
//       const res = await fetch(
//           'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCZPb9CuxbOZtkvbz9_CyyAEORquAabsd8',
//         {
//           method: "POST",
//           body: JSON.stringify(data),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log("line no. 50", res);
//       if (res.ok) {
//         const resData = await res.json();
//         console.log("lione no. 53",resData)
//         // dispatch(login(resData.idToken));
//         // setIsLogin(true);
//         // navigate("/");
//       } else {
//         const resData = await res.json();
//         throw new Error(resData.error.message);
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };
//   const handleLogin = (e) => {
//     e.preventDefault();
//     setIsLogin(true);
//     const emailRef = emailInputRef.current.value;
//     const passRef = passInputRef.current.value;
//     const confirmPassRef = confirmPassInputRef.current.value;
    
//     loginUser({
//       email: emailRef,
//         password: passRef,
//         returnSecureToken: true,
//     });
//   }
//   // const handleLogin = (e) => {
//   //   e.preventDefault();
//   //   // CartCtx.setIsLogin(true);
//   //   if (password !== confirmPassword) {
//   //     setMessage("Passwords do not match");
//   //     return;
//   //   }
//   //   setMessage("Successful Sign Up");

//   //   // const response = axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB11tSjRawQDNWk800xbZmpUqe2-t6Qm10')
//   //   const emailRef = emailInputRef.current.value;
//   //   const passRef = passInputRef.current.value;
//   //   const confirmPassRef = confirmPassInputRef.current.value;
//   //   let url;
//   //   if (isLogin) {
//   //     url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCZPb9CuxbOZtkvbz9_CyyAEORquAabsd8'
//   //   }
//   //   else {
//   //     url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCZPb9CuxbOZtkvbz9_CyyAEORquAabsd8'

//   //   } fetch(url, {
//   //     method: 'POST',
//   //     body: JSON.stringify({
//   //       email: emailRef,
//   //       password: passRef,
//   //       returnSecureToken: true,
//   //     }),
//   //     headers: {
//   //       'Content-Type': 'application/json'
//   //     }


//   //   }).then((res) => {
//   //     console.log("line no. 71",res)
//   //     if (res.ok) {
//   //      return res.json();
//   //     //  console.log('line no. 73',r);
//   //     }
//   //     else {
//   //       res.json().then((data) => {
//   //         let errorMessage = 'Authentication failed';
//   //         alert(errorMessage);
//   //         throw new Error(errorMessage);

//   //       })
//   //     }
//   //   }).then((data) => {
//   //     setIsLogin(true);
//   //     console.log('from line no. 86',data);
//   //   })
//   //     .catch((err) => {
//   //       alert(err.message)
//   //     })
//   // };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleLogin}>
//         <h2>Login</h2>
//         <div className="input-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             ref={emailInputRef}
//             onChange={emailHandler}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             ref={passInputRef}
//             onChange={passwordHandler}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="confirm-password">Confirm Password</label>
//           <input
//             type="password"
//             id="confirm-password"
//             value={confirmPassword}
//             ref={confirmPassInputRef}
//             onChange={cpasswordHandler}
//             required
//           />
//         </div>
//         <p>Forgot Password?</p>
//         <button type="submit" className="login-button" >Login</button>
//       </form>
//       {message && <p className="message">{message}</p>}
//     </div>
//   );
// };

// export default Login;


// import { useState, useRef, useContext } from "react"; 
// import CartContext from "../store/CartContext";
// const LoginPage = () => {
//     const emailInputRef = useRef();
//     const passInputRef = useRef();

//  const [isLogin, setIsLogin]=useState(true);

//  const {logInHandler} = useContext(CartContext);

//  const switchAuthModeHandler = () => {
//    setIsLogin((prevState) => !prevState)
//  }

//  const submitHandler =(event) => {
//   event.preventDefault();

//   const emailref= emailInputRef.current.value;
//   const passRef= passInputRef.current.value;
//   let url;
//   if(isLogin){
//     // authCtx.setEmail(emailref);
//   url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCZPb9CuxbOZtkvbz9_CyyAEORquAabsd8';
//   }else{
//     url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCZPb9CuxbOZtkvbz9_CyyAEORquAabsd8';
//    }fetch(url, {
//     method:'POST',
//     body:JSON.stringify({
//         email:emailref,
//         password:passRef,
//         returnSecureToken:true
//     }),
//     headers:{
//         'content-type':'application/json'
//     }
//  }).then((res) =>{
//     if(res.ok){
//      return res.json();
//     }else{
//         return res.json().then((data)=> {
//             let errorMessage='Authentication Failed';
//             alert(errorMessage);
//             throw new Error(errorMessage);
//         });
//     }
//  }).then((data) => {
//     logInHandler(data.idToken);
//  })
//  .catch((err) => {
//     alert(err.message);
//  })
//   }
 
//     return (
//     <div>
//         <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
//          <form onSubmit={submitHandler}>
//             <div>
//             <label htmlfor ='email' >Email ID</label>
//             <input type='email' id='email' required ref={emailInputRef} />
//             </div>
//             <div>
//             <label htmlfor ='password' >password</label>
//             <input type='password' id='password' required ref={passInputRef}/>
//             </div>

//             <div>
//                 <button>{isLogin ? 'Login' : 'Create Account'}</button>
//                 <button type='button' onClick={switchAuthModeHandler}>
//                     {isLogin ? 'Create new account' : 'Login with existing account'}
//                 </button>
//             </div>
//          </form>
//     </div>
//     )
// }

// export default LoginPage;

// import { useState, useRef, useContext } from "react";
// import CartContext from "../store/CartContext";
// import './AuthForm.css'; // Import the CSS file

// const AuthForm = () => {
//   const emailInputRef = useRef();
//   const passInputRef = useRef();
//   const [isLogin, setIsLogin] = useState(true);
//   const [error, setError] = useState('');

//   const authCtx = useContext(CartContext);

//   const switchAuthModeHandler = () => {
//     setIsLogin((prevState) => !prevState);
//     setError(''); // Clear error on mode switch    
//   };

//   const submitHandler = async (event) => {
//     event.preventDefault();

//     const email = emailInputRef.current.value;
//     const password = passInputRef.current.value;

//     let url;
//     if (isLogin) {
//       url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBal4zHxt0IZzffcTY5anxJAUimCBRkkrk';
//     } else {
//       url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBal4zHxt0IZzffcTY5anxJAUimCBRkkrk';
//     }

//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         body: JSON.stringify({
//           email: email,
//           password: password,
//           returnSecureToken: true
//         }),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         let errorMessage = 'Authentication failed!';
//         if (data && data.error && data.error.message) {
//           errorMessage = data.error.message;
//         }
//         throw new Error(errorMessage);
//       }

//       authCtx.logInHandler(data.idToken);
//       authCtx.setEmail(email);

//       // authCtx.updateCurrentUserEmail(email);
//       setError(''); // Clear error on successful login/signup
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
//       <form onSubmit={submitHandler}>
//         <div>
//           <label htmlFor='email'>Email ID</label>
//           <input type='email' id='email' required ref={emailInputRef} />
//         </div>
//         <div>
//           <label htmlFor='password'>Password</label>
//           <input type='password' id='password' required ref={passInputRef} />
//         </div>
//         {error && <p className="error-message">{error}</p>}
//         <div className="button-group">
//           <button type='submit'>{isLogin ? 'Login' : 'Create Account'}</button>
//           <button type='button' className="switch-button" onClick={switchAuthModeHandler}>
//             {isLogin ? 'Create new account' : 'Login with existing account'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AuthForm;

import { useState, useRef, useContext } from "react";
import CartContext from "../store/CartContext";
import './AuthForm.css'; // Import the CSS file

const AuthForm = () => {
  const emailInputRef = useRef();
  const passInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const authCtx = useContext(CartContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    setError(''); // Clear error on mode switch    
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passInputRef.current.value;

    let url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBSTGHxOKpMjS8GFduLvn5nao7bxX5I_o4';
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBSTGHxOKpMjS8GFduLvn5nao7bxX5I_o4';
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      if (!response.ok) {
        let errorMessage = 'Authentication failed!';
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        throw new Error(errorMessage);
      }

      authCtx.logInHandler(data.idToken);
      authCtx.setEmail(email);

      setError(''); // Clear error on successful login/signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='email'>Email ID</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' required ref={passInputRef} />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="button-group">
          <button type='submit'>{isLogin ? 'Login' : 'Create Account'}</button>
          <button type='button' className="switch-button" onClick={switchAuthModeHandler}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
