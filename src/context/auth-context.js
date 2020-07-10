import React, { createContext, useEffect, useState, useCallback } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  userData: null,
  login: () => {},
  logout: () => {},
  saveUser: () => {},
});

const AuthProvider = (props) => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState();

  const saveUser = useCallback((userData, token) => {
    localStorage.setItem(
      "userData",
      JSON.stringify({ ...userData, token: token })
    );
  }, []);

  const login = useCallback(
    (userData, token) => {
      setToken(token);
      setUserData(userData);
      saveUser(userData, token);
    },
    [saveUser]
  );

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
        saveUser: saveUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
