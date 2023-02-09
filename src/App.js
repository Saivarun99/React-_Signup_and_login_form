import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Signup } from "./Signup";
import './Movies';
import Movies from "./Movies";
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from "react-router-dom";




function App() {
  const [currentForm, setCurrentForm] = useState('signup');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "signup" ? <Signup onFormSwitch={toggleForm} /> : <Login onFormSwitch={toggleForm} /> 

      }     


    </div>
  );
}

export default App;









// import React, { useState } from "react";
// import { Login } from "./Login";
// import { Signup } from "./Signup";
// import { Movies }from "./Movies";
// import { BrowserRouter as Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

// function App() {
//   const [currentForm, setCurrentForm] = useState('signup');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     Navigate('/Movies');
//   }

//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route exact path="/" render={() => (
//         isLoggedIn ? 
//           <Navigate to="/Movies"/> : 
//           currentForm === "signup" ? 
//             <Signup onFormSwitch={toggleForm} /> : 
//             <Login onFormSwitch={toggleForm} onLogin={handleLogin} />
//       )} />
//       <Route path="/Movies" component={Movies} />
//     </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




















