import Header from "./Header";
import Footer from "./Footer";
function Contact() {
    return (
        <div className="flex flex-col items-center ">
            <Header />
            <section className="flex flex-col justify-center items-center font-Sarabun">
                <h1 className="m-8 text-2xl font-bold">¡Reserva!</h1>

                <p className="text-justify text-xl w-[80%] mb-8">
                    Descubre cómo mantener un equilibrio saludable en tu vida diaria. Desde técnicas de relajación hasta consejos de cuidado de la piel, te brindamos herramientas prácticas para
                    mejorar tu bienestar en casa y en el trabajo. ¡Haz de cada día una experiencia más saludable y feliz!
                </p>
            </section>

            <section className="bg-gradient-to-t from-lavenderMist to-languidLavender p-4 w-[80%] rounded-xl text-center text-xl flex flex-col justify-around font-Sarabun ">
                <h3 className="font-bold">Dirección</h3>
                <p className="">Av 9 entre calles 4 y 5. Valera</p>
                <h3 className="mt-3 font-bold">Número de contacto</h3>
                <a href="tel:+58 424-7214981">
                    <p className="font-bold text-midnightBlue underline">+58 424-7214981</p>
                </a>
                <h3 className="mt-3 font-bold">Correo</h3>
                <a href="mailto:asistencia@serenityspa.com">
                    <p className="font-bold text-midnightBlue underline">asistencia@serenityspa.com</p>
                </a>
                <p className="mt-3 font-bold">Horas de operación </p>
                <p className="mt-1 ">Lunes a Viernes</p>
                <p className="">10:00 AM - 7:00 PM</p>
                <p className="mt-3">Sábado</p>
                <p className="mb-8">10:00 AM - 3:00 PM</p>
            </section>

            <form className="bg-gradient-to-t from-lavenderMist to-languidLavender p-5 w-[80%] m-8 rounded-xl flex flex-col items-center font-Sarabun ">
                <h1 className="text-xl text-center">Solicitar cita</h1>

                <label className="mt-3 text-lg w-full font-Rowdies font-light">Correo electrónico</label>
                <input type="text" className="mt-2 p-2 text-lg w-full"></input>

                <label className="mt-3 text-lg w-full font-Rowdies font-light">Fecha</label>
                <input type="date" className="mt-2 p-2 text-lg w-full"></input>

                <label className="mt-3 text-lg w-full font-Rowdies font-light">Hora</label>
                <select className="mt-2 p-2 text-lg w-full">
                    <option>Selecciona la hora</option>
                    <option value="mañana">Mañana</option>
                    <option value="tarde">Tarde</option>
                    <option value="noche">Noche</option>
                </select>

                <label className="mt-3 text-lg w-full font-Rowdies font-light">Servicio</label>
                <select className="mt-2 p-2 text-lg w-full">
                    <option>Selecciona tu paquete</option>
                </select>

                <button className="bg-midnightBlue p-2 text-lg text-white m-6 w-[60%] rounded-lg font-Rowdies font-light">Reservar</button>
            </form>
            <Footer />
        </div>
    );
}

export default Contact;
