import Header from "./Header";
import Footer from "./Footer";
function Login() {
    return (
        <div>
            <Header />
            <section className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="font-Rowdies  text-2xl mt-10">Iniciar Sesión</h1>

                <form className="bg-morado1 p-5 w-[80%] m-8 rounded-xl flex flex-col items-center ">
                    <label className="mt-3 text-lg w-full font-bold">Usuario del admin</label>
                    <input type="text" className="mt-2 p-1 text-lg w-full"></input>

                    <label className="mt-3 text-lg w-full font-bold">Contraseña</label>
                    <input type="text" className="mt-2 p-1 text-lg w-full"></input>

                    <button className="bg-azul4 p-2 text-lg text-white m-6 w-[60%] rounded-lg">Iniciar sesión</button>
                </form>

                <p className="font-bold mb-10">¿No posees una cuenta? ¡Regístrate!</p>
            </section>
            <Footer />
        </div>
    );
}

export default Login;
