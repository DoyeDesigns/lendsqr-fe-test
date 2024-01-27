"use client";

import React, { useState } from "react";
import Link from "next/link";

interface AuthenticationProps {
  email: string;
  password: string;
}

const authenticateUser = (e: { preventDefault: () => void }) => {
  e.preventDefault();
  console.log("User authenticated");
};

export default function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userPassword, setUserPassword] = useState("");

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="form-section">
      <div className="form-container">
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>

        <form onSubmit={authenticateUser}>
          <input
            id="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <div className="password-input">
            <input
              id="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <span
              className="show-password-toggle"
              onClick={handleTogglePassword}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <Link href="#" id="forgot-password-link">
            FORGOT PASSWORD?
          </Link>
          <button type="submit">LOG IN</button>
        </form>
      </div>
    </div>
  );
}
