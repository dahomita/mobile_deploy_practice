import { useAuth } from "../context/AuthContext.jsx";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h2 className="text-2xl font-bold">Welcome, {user?.email}!</h2>
      <button onClick={logout} className="p-2 bg-red-500 text-white rounded">
        Logout
      </button>
    </div>
  );
}
