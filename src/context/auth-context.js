import React, { createContext, useEffect, useState, useCallback } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  userData: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = (props) => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState();

  const login = useCallback((userData, token) => {
    setToken(token);
    setUserData(userData);

    localStorage.setItem(
      "userData",
      JSON.stringify({ ...userData, token: token })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserData(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.token) {
      const { token, ...userData } = storedData;
      login(userData, token);
      console.log(userData);
    }
  }, [login]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userData: userData,
        login: login,
        logout: logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
