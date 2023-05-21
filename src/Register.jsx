import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    placeholder="Full Name"
                />
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                />
                <label htmlFor="password">Password</label>
                <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    placeholder="********"
                    id="password"
                    name="password"
                />
                <button type="submit">Register</button>
            </form>
            <button
                className="link-btn"
                onClick={() => props.onFormSwitch("login")}
            >
                Already have an account? Login here.
            </button>

            {/* Styles */}
            <style>{`
        .auth-form-container {
          max-width: 400px;
          margin: 0 auto;
        }
        .register-form label {
          display: block;
          margin-top: 10px;
        }
        .register-form input {
          width: 100%;
          padding: 8px;
          margin-top: 5px;
        }
        .register-form button {
          background-color: #007bff;
          color: #fff;
          padding: 10px 15px;
          border: none;
          cursor: pointer;
        }
        .link-btn {
          background: none;
          border: none;
          color: #007bff;
          cursor: pointer;
          margin-top: 10px;
        }
      `}</style>
        </div>
    );
};
