import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth";
import { Link } from "react-router-dom";

function Login() {
    const { loginAdmin, error } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        loginAdmin(username, password);
    };

    return (
        <div>
            <section className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="font-Rowdies text-2xl mt-10">Iniciar Sesión</h1>

                <form className="bg-gradient-to-b from-languidLavender to-lavenderMist p-5 w-[80%] m-8 rounded-xl flex flex-col items-center" onSubmit={handleLogin}>
                    <label className="mt-3 text-lg w-full font-bold">Usuario del admin</label>
                    <input type="text" className="mt-2 p-1 text-lg w-full" value={username} onChange={(e) => setUsername(e.target.value)} />

                    <label className="mt-3 text-lg w-full font-bold">Contraseña</label>
                    <input type="password" className="mt-2 p-1 text-lg w-full" value={password} onChange={(e) => setPassword(e.target.value)} />

                    {error && <p>{error}</p>}

                    <button className="bg-midnightBlue p-2 text-lg text-white m-6 w-[60%] rounded-lg font-Rowdies font-light" type="submit">
                        Iniciar sesión
                    </button>
                </form>

                {error && <p className="text-red-500">{error}</p>}
                <div className="flex font-bold mb-10">
                    <p>¿No posees una cuenta?</p>
                    <Link to="/signup" className="text-midnightBlue">
                        Regístrate
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Login;
