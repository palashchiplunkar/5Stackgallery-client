import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const useSignUp = () => {
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(null);
  const { dispatch } = useAuthContext();
  const signup = async (name, email, password) => {
    setloading(true);
    seterror(null);

    const response = await fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
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
  return { signup, loading, error };
};
