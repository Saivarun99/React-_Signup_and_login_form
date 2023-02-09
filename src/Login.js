// import React, { useState } from "react";

// export const Login = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//     return (
//         <div className="auth-form-container">
//             <h2>Login</h2>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <label htmlFor="email">email</label>
//                 <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//                 <label htmlFor="password">password</label>
//                 <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//                 <button type="submit">Log In</button>
//             </form>
//             <button className="link-btn" onClick={() => props.onFormSwitch('signup')}>Don't have an account? Signup here.</button>
//         </div>
//     )
// }








// import React, { useState, useEffect } from 'react';

// export const Login = (props) => {
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [movies, setMovies] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     if (email === localStorage.getItem("email") && pass === localStorage.getItem("password")) {
//       const response = await fetch('https://hoblist.com/api/movieList');
//       const result = await response.json();
//       setMovies(result);
//       setIsLoading(false);
//       props.history.push('/movies');
//     } else {
//       setErrorMessage('Invalid Credentials');
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="auth-form-container">
//       <h2>Login</h2>
//       <form className="login-form" onSubmit={handleSubmit}>
//         <label htmlFor="email">email</label>
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           placeholder="youremail@gmail.com"
//           id="email"
//           name="email"
//         />
//         <label htmlFor="password">password</label>
//         <input
//           value={pass}
//           onChange={(e) => setPass(e.target.value)}
//           type="password"
//           placeholder="********"
//           id="password"
//           name="password"
//         />

//         {errorMessage && <div className="error-message">{errorMessage}</div>}
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? 'Loading...' : 'Login'}
//         </button>
//       </form>
//       <button className="link-btn" onClick={() => props.onFormSwitch('signup')}>
//         Don't have an account? Sign up here.
//       </button>
//     </div>
//   );
// };








// import React, { useState, useEffect } from "react";
// import axios from "axios";
// //import {useNavigate } from "react-router-dom";
// import Movies from "./Movies";


// export const Login = (props) => {

//   //const navigate = useNavigate()
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [movies, setMovies] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const storedEmail = localStorage.getItem("email");
//     const storedPassword = localStorage.getItem("password");
//     if (email === storedEmail && password === storedPassword) {
//       axios
//         .post("https://hoblist.com/api/movieList", {
//           category: "movies",
//           language: "kannada",
//           genre: "all",
//           sort: "voting",
//         })
//         .then((response) => {
//           setMovies(response.data);
//           props.history.push({
//             pathname: "/Movies",
//             state: { movies: response.data },
//           });
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     } else {
//       setError("Invalid credentials. Please try again.");
//     }

//    // navigate.push("/Movies");
//   };

//   return (
//     <div className="auth-form-container">
//       <h2>Login</h2>
//       <form className="login-form" onSubmit={handleSubmit}>
//         <label htmlFor="email">Email</label>
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           placeholder="youremail@gmail.com"
//           id="email"
//           name="email"
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           type="password"
//           placeholder="********"
//           id="password"
//           name="password"
//         />
//         <button type="submit">Login</button>
//       </form>
//       <p className="error-message">{error}</p>
//       <button
//         className="link-btn"
//         onClick={() => props.onFormSwitch("signup")}
//       >
//         Don't have an account? Sign up here.
//       </button>
//     </div>
//   );
// };

// export default Login;








// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// import Movies from "./Movies";

// export const Login = (props) => {
//   const Navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [movies, setMovies] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const storedEmail = localStorage.getItem("email");
//     const storedPassword = localStorage.getItem("password");
//     if (email === storedEmail && password === storedPassword) {
//       axios
//         .post("https://hoblist.com/api/movieList", {
//           category: "movies",
//           language: "kannada",
//           genre: "all",
//           sort: "voting",
//         })
//         .then((response) => {
//           setMovies(response.data);
//           Navigate.push({
//             pathname: "/Movies",
//             state: { movies: response.data },
//           });
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     } else {
//       setError("Invalid credentials. Please try again.");
//     }
//   };

//   return (
//     <div className="auth-form-container">
//       <h2>Login</h2>
//       <form className="login-form" onSubmit={handleSubmit}>
//         <label htmlFor="email">Email</label>
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           placeholder="youremail@gmail.com"
//           id="email"
//           name="email"
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           type="password"
//           placeholder="********"
//           id="password"
//           name="password"
//         />
//         <button type="submit">Login</button>
//       </form>
//       <p className="error-message">{error}</p>
//       <button
//         className="link-btn"
//         onClick={() => props.onFormSwitch("signup")}
//       >
//         Don't have an account? Sign up here.
//       </button>
//     </div>
//   );
// };

// export default Login;








import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (isLoggedIn) {
            fetch("https://hoblist.com/api/movieList", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    category: "movies",
                    language: "kannada",
                    genre: "all",
                    sort: "voting"
                })
            })
                .then(response => response.json())
                .then(data => setData(data));
        }
    }, [isLoggedIn]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if (email === storedEmail && password === storedPassword) {
            setIsLoggedIn(true);
        } else {
            alert("Incorrect email or password");
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />

                <button type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('signup')}>Don't have an account? Sign up here.</button>
            {isLoggedIn && <Navigate to="./Movies" />}
        </div>
    );
};

















