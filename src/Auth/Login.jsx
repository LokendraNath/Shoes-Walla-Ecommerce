import { LogIn } from "lucide-react";
import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password); // Commented out as per no functionality requirement
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl border-2 border-gray-300 shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black mb-2 text-gray-900">LOGIN</h1>
          <p className="text-gray-600 font-medium">Access your account</p>
        </div>

        <form onSubmit={submitHandler} className="space-y-6">
          <div>
            <input
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
            />
          </div>

          <div>
            <input
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <span>Continue</span>
            <LogIn size={18} className="mt-0.5" />
          </button>
        </form>

        <div className="mt-6 text-center">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium underline"
          >
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
