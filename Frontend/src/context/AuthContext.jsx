import { createContext, useState, useEffect, useContext } from "react";

// 🔹 1. Cria o contexto
const AuthContext = createContext();

// 🔹 2. Hook customizado para acessar o contexto facilmente
export function useAuth() {
  return useContext(AuthContext);
}

// 🔹 3. Provider que envolve toda a aplicação
export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedToken) setToken(savedToken);
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (email, password) => {
    // Aqui normalmente chamaria a API com fetch/axios
    const fakeResponse = {
      token: "fake.jwt.token",
      user: { name: "Rony", email },
    };

    setToken(fakeResponse.token);
    setUser(fakeResponse.user);
    localStorage.setItem("token", fakeResponse.token);
    localStorage.setItem("user", JSON.stringify(fakeResponse.user));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ token, user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}