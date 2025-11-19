import { createContext, useState, useEffect, useContext } from "react";

import api from "../services/api.js";

// 🔹 1. Cria o contexto
const AuthContext = createContext();

// 🔹 2. Hook customizado para acessar o contexto facilmente
export function useAuth() {
  return useContext(AuthContext);
}

// 🔹 3. Provider que envolve toda a aplicação
export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");

    if (savedToken) setToken(savedToken);
  }, []);

  const login = async(email, password) => {
    const res = await api.post("/users/login",{
      email:email,
      senha:password
    });

    setToken(res.data.object);
    localStorage.setItem("token", res.data.object);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}