import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Landing() {
    return (
        <div className="landing">
            <Header />

            <section className="flex flex-col justify-center items-center font-Sarabun">
                <img src=".\src\assets\spa2.webp" />

                <h1 className="m-3 text-2xl font-Rowdies">Serenity Spa</h1>

                <h2 className="m-5 text-2xl">Tu refugio de paz y bienestar</h2>

                <p className="text-justify text-xl w-[80%] m-5">
                    Sumérgete en un oasis de tranquilidad y déjate consentir en Serenity Spa, donde encontrarás el equilibrio y el bienestar que mereces.
                </p>

                <img src=".\src\assets\spa3.webp" className="w-[80%]" />
            </section>

            <section className="flex flex-col items-center font-Sarabun mt-10 mb-10 p-3 bg-gradient-to-t from-lightSteelBlue to-languidLavender font-bold ">
                <h1 className="text-2xl mb-5 font-extrabold">¿Por qué elegirnos?</h1>

                <div className="flex text-sm">
                    <ul className="mr-2 list-disc list-inside">
                        <li className=""> Relajación suprema</li>
                        <li className="mt-2">Experiencia rejuvenecedora</li>
                        <li className="mt-2">Ambiente sereno</li>
                    </ul>

                    <ul className="mr-2 list-disc list-inside">
                        <li className="">Productos Premium</li>
                        <li className="mt-2">Espacio Acogedor</li>
                        <li className="mt-2">Servicio Personalizado</li>
                    </ul>
                </div>
            </section>

            <section className="flex flex-col justify-center items-center font-Sarabun">
                <img src=".\src\assets\spa4.webp" className="w-[80%]" />

                <h1 className="text-2xl m-8 font-extrabold">Sobre Nosotros</h1>

                <p className="text-justify text-center text-xl w-[80%] mb-10">
                    En Serenity Spa, nos apasiona brindar experiencias de relajación inigualables a través de tratamientos personalizados, un ambiente tranquilo y profesionales dedicados al bienestar
                    total de nuestros cliente
                </p>
            </section>

            <section className="flex flex-col justify-center items-center font-Sarabun">
                <img src=".\src\assets\spa5.webp" className="w-[80%]" />

                <h1 className="text-2xl m-8 font-extrabold">Servicios</h1>

                <p className="text-justify text-center text-xl w-[80%] mb-10">
                    Disfruta de una variedad de tratamientos relajantes y rejuvenecedores en Serenity Spa, diseñados para brindarte momentos de tranquilidad y renovación.
                </p>
            </section>

            <section className="flex flex-col justify-center items-center font-Sarabun">
                <img src=".\src\assets\spa12.webp" className="w-[80%]" />

                <h1 className="text-2xl m-8 font-extrabold">¡Contáctanos y reserva ya!</h1>

                <p className="text-justify text-center text-xl w-[80%] mb-10">
                    Conéctate con nosotros y asegura tu momento de relajación en Serenity Spa. Contáctanos hoy mismo y reserva tu experiencia personalizada.
                </p>
            </section>

            <Footer />
        </div>
    );
}

export default Landing;
