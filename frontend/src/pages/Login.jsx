import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-blue-600 flex items-center justify-center text-white p-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">Task Manager</h1>
          <p>Organize, track, and manage your tasks efficiently.</p>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center bg-blue-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-xl shadow-lg w-96"
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Welcome Back</h2>
          {error && <p className="bg-red-100 text-red-600 p-2 mb-3">{error}</p>}

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
            Login
          </button>

          <p className="mt-3 text-center">
            No account?{" "}
            <Link to="/register" className="text-blue-600">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
