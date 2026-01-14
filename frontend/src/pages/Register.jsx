import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ name, email, password });
      navigate("/login");
    } catch {
      setError("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-blue-600 flex items-center justify-center text-white p-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">Join Task Manager</h1>
          <p>Start organizing your work today.</p>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center bg-blue-100">
        <form
          onSubmit={handleRegister}
          className="bg-white p-8 rounded-xl shadow-lg w-96"
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Register</h2>
          {error && <p className="bg-red-100 text-red-600 p-2 mb-3">{error}</p>}

          <input
            type="text"
            placeholder="Name"
            className="w-full border p-2 mb-3 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-4 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-blue-600 text-white w-full py-2 rounded">
            Register
          </button>

          <p className="mt-3 text-center">
            Already have account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
