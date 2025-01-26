"use client";

import { useState } from "react";
import AuthContext from "./AuthContext";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<null | { id: string; name: string; email: string }>(
    null
  );

  const login = async (email: string, password: string) => {
    // API'ye login isteği gönder
    const mockUser = { id: "1", name: "John Doe", email , password };
    setUser(mockUser);
  };

	

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}