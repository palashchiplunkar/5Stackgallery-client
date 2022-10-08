import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const useLogin = () => {
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(null);
  const { dispatch } = useAuthContext();
  const login = async (email, password) => {
    setloading(true);
    seterror(null);

    const response = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();

    if (!response.ok) {
      setloading(false);
      seterror(data.error);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: "LOGIN", payload: data });
      setloading(false);
    }
  };
  return { login, loading, error };
};
