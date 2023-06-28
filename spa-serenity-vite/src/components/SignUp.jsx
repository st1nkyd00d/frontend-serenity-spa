import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth";
import { Link } from "react-router-dom";

function SignUp() {
    const { registerAdmin } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        try {
            await registerAdmin(username, password);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="">
            <section className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="font-bold  text-2xl mt-10">Registro</h1>

                <form className="bg-gradient-to-b from-languidLavender to-lavenderMist p-5 w-[80%] m-8 rounded-xl flex flex-col items-center" onSubmit={handleSubmit}>
                    <label className="mt-3 text-lg w-full font-bold">Usuario del admin</label>
                    <input type="text" className="mt-2 p-1 text-lg w-full" value={username} onChange={handleUsernameChange} />

                    <label className="mt-3 text-lg w-full font-bold">Contraseña</label>
                    <input type="password" className="mt-2 p-1 text-lg w-full" value={password} onChange={handlePasswordChange} />

                    <button className="bg-midnightBlue p-2 text-lg text-white m-6 w-[60%] rounded-lg font-Rowdies font-light">Registrarse</button>
                </form>

                {error && <p className="text-red-500">{error}</p>}

                <div className="flex font-bold mb-10">
                    <p>¿Ya tienes una cuenta?</p>
                    <Link to="/login" className="text-midnightBlue">
                        Inicia sesión
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default SignUp;
