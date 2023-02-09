// import React, { useState } from "react";

// export const Signup = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [name, setName] = useState('');
//     const [phonenumber, setPhone] = useState('');
//     const [profession, setProfession] = useState('');
    

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email, profession);
//         localStorage.setItem("email", email);
//         localStorage.setItem("password", pass);
//         localStorage.setItem("name", name);
//         localStorage.setItem("phonenumber", phonenumber);
//         localStorage.setItem("profession", profession);
//         console.log(localStorage.getItem("email"));
//     }

//     return (
//         <div className="auth-form-container">
//             <h2>Signup</h2>
//         <form className="Signup-form" onSubmit={handleSubmit}>
//             <label htmlFor="name">Full name</label>
//             <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />

//             <label htmlFor="phonenumber">phone number</label>
//             <input value={phonenumber} name="phonenumber" onChange={(e) => setPhone(e.target.value)} id="name" placeholder="phone number" />

//             <label htmlFor="email">email</label>
//             <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//             <label htmlFor="password">password</label>
//             <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

//             <label htmlFor="profession">Profession</label>

//             <select value={profession} onChange={(e) => setProfession(e.target.value)} id="profession" name="profession">
//                 <option value="" disabled>Select your profession</option>
//                 <option value="student">Student</option>
//                 <option value="teacher">Developer</option>
//                 <option value="engineer">Engineer</option>
//                 <option value="doctor">Doctor</option>
//             </select>


//             <button type="submit">Sign up</button>

            
//         </form>
//         <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
//     </div>
//     );
// };







// import React, { useState } from "react";

// export const Signup = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [name, setName] = useState('');
//     const [phonenumber, setPhone] = useState('');
//     const [profession, setProfession] = useState('');
    

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email, profession);
//         localStorage.setItem("email", email);
//         localStorage.setItem("password", pass);
//         localStorage.setItem("name", name);
//         localStorage.setItem("phonenumber", phonenumber);
//         localStorage.setItem("profession", profession);
//         console.log(localStorage.getItem("email"));
//         props.onFormSwitch('login');
//     }

//     return (
//         <div className="auth-form-container">
//             <h2>Signup</h2>
//         <form className="Signup-form" onSubmit={handleSubmit}>
//             <label htmlFor="name">Full name</label>
//             <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />

//             <label htmlFor="phonenumber">phone number</label>
//             <input value={phonenumber} name="phonenumber" onChange={(e) => setPhone(e.target.value)} id="name" placeholder="phone number" />

//             <label htmlFor="email">email</label>
//             <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//             <label htmlFor="password">password</label>
//             <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

//             <label htmlFor="profession">Profession</label>

//             <select className="profession" value={profession} onChange={(e) => setProfession(e.target.value)} id="profession" name="profession">
//                 <option value="" disabled>Select your profession</option>
//                 <option value="student">Student</option>
//                 <option value="teacher">Developer</option>
//                 <option value="engineer">Engineer</option>
//                 <option value="doctor">Doctor</option>
//             </select>


//             <button type="submit">Sign up</button>

            
//         </form>
//         <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
//     </div>
//     );
// };



import React, { useState } from "react";

export const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [phonenumber, setPhone] = useState('');
    const [profession, setProfession] = useState('');
    const [formValid, setFormValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !pass || !name || !phonenumber || !profession) {
            alert("All fields are required");
            return;
        }

        console.log(email, profession);
        localStorage.setItem("email", email);
        localStorage.setItem("password", pass);
        localStorage.setItem("name", name);
        localStorage.setItem("phonenumber", phonenumber);
        localStorage.setItem("profession", profession);
        console.log(localStorage.getItem("email"));
        setFormValid(true);
        props.onFormSwitch('login');
    }

    return (
        <div className="auth-form-container">
            <h2>Signup</h2>
            <form className="Signup-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />

                <label htmlFor="phonenumber">phone number</label>
                <input value={phonenumber} name="phonenumber" onChange={(e) => setPhone(e.target.value)} id="name" placeholder="phone number" />

                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />

                <label htmlFor="profession">Profession</label>

                <select className="profession" value={profession} onChange={(e) => setProfession(e.target.value)} id="profession" name="profession">
                    <option value="" disabled>Select your profession</option>
                    <option value="student">Student</option>
                    <option value="teacher">Developer</option>
                    <option value="engineer">Engineer</option>
                    <option value="doctor">Doctor</option>
                </select>

                <button type="submit">Sign up</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    );
};

