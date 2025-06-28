import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Fill both fields!");
      return;
    }

    // Save user info locally (you can replace with real DB/API later)
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Signup successful!");
    navigate("/");
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <p onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
        Already have an account? Login
      </p>
    </div>
  );
};

export default Signup;
