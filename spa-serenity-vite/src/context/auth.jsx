import React, { createContext, useState } from "react";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const registerAdmin = async (username, password) => {
        try {
            const response = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                const { token, username } = data;
                localStorage.setItem("token", token);
                localStorage.setItem("username", username);
                console.log("Registro exitoso");
            } else {
                setError(data.error);
            }
        } catch (error) {
            setError("Ocurrió un error al intentar registrar el administrador.");
        }
    };

    const loginAdmin = async (username, password) => {
        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            console.log(data);

            if (response.ok) {
                const { token } = data;
                localStorage.setItem("token", token);
                localStorage.setItem("username", username);
                console.log("Inicio de sesión exitoso");
            } else {
                console.error(data.error);
            }
        } catch (error) {
            console.log(error);
            setError("Ocurrió un error al intentar iniciar sesión.");
        }
    };

    return <AuthContext.Provider value={{ user, error, registerAdmin, loginAdmin }}>{children}</AuthContext.Provider>;
};

export { AuthContext };
export default AuthProvider;
