import { useAuth } from "../context/AuthContext.jsx";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase.config.js";

export default function LoginPage() {
  const { login, signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Google Sign-In
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h2 className="text-2xl font-bold">Login</h2>

      {error && <p className="text-red-500">{error}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded"
      />
      <button onClick={() => login(email, password)} className="p-2 bg-blue-500 text-white rounded">
        Login
      </button>
      <button onClick={() => signup(email, password)} className="p-2 bg-green-500 text-white rounded">
        Sign Up
      </button>
      <button onClick={signInWithGoogle} className="p-2 bg-red-500 text-white rounded">
        Sign in with Google
      </button>
    </div>
  );
}
