import { BrowserRouter, Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./Auth/Login.jsx";
import Home from "./Home/Home.jsx";

const App = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("shoesWallaLogged");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("shoesWallaLogged", JSON.stringify("admin"));
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : <Home setUser={setUser} />}
    </>
  );
};

export default App;
