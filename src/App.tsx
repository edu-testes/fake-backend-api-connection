import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.tsx";

import HomePage from "./pages/HomePage.tsx";
import AuthPage from "./pages/AuthPage/AuthPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import UserPage from "./pages/UserPage.tsx";

const authRoutes = [
  { path: "/login", element: <AuthPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/user", element: <UserPage /> },
];

const mainRoutes = [
  // { path: '/user', element: <UserPage /> },
];

const api = "http://localhost:3000/";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const AuthContext = React.createContext(null);
  React.useContext(AuthContext);
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<AuthPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/user" element={<UserPage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
