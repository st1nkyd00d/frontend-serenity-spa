import Header from "../components/Header";
import Footer from "../components/Footer";
function AboutUs() {
    return (
        <div className="aboutUs">
            <Header />

            <section className="flex flex-col justify-center items-center font-Sarabun">
                <h1 className="m-8 text-2xl font-bold">Sobre Nosotros</h1>

                <p className="text-justify text-xl w-[80%] mb-8">
                    Nuestro equipo de profesionales altamente capacitados y apasionados está comprometido a brindarle un servicio excepcional y a satisfacer todas sus necesidades de cuidado personal.
                    Ya sea que desee escapar del estrés cotidiano, rejuvenecer su cuerpo y mente o simplemente mimarse, hemos creado un refugio perfecto para que usted se desconecte del mundo exterior
                    y se sumerja en una experiencia rejuvenecedora.
                </p>

                <img src=".\src\assets\spa6.webp" />
            </section>

            <section className="flex flex-col justify-center items-center font-Sarabun m-10">
                <h1 className="mb-8 text-2xl font-bold">Somos el mejor SPA de Valera</h1>
                <img src=".\src\assets\spa7.webp" className="w-[80%]" />

                <p className="text-justify text-xl w-[90%] mt-8">
                    Nuestro amable equipo estará encantado de ayudarlo a elegir el tratamiento perfecto para sus necesidades individuales y ofrecerle recomendaciones personalizadas.
                </p>
            </section>

            <section className="flex flex-col justify-center items-center font-Sarabun m-10">
                <img src=".\src\assets\spa8.webp" className="w-[80%]" />

                <p className="text-justify text-xl w-[90%] mt-8">
                    En Serenity Spa combinamos técnicas ancestrales con los avances más innovadores en cuidado de la piel, masajes terapéuticos y terapias holísticas.
                </p>
            </section>

            <section className="flex flex-col justify-center items-center font-Sarabun m-10">
                <img src=".\src\assets\spa9.webp" className="w-[80%]" />

                <p className="text-justify text-xl w-[90%] mt-8">Utilizamos productos de alta calidad, formulados con ingredientes naturales, para brindarle resultados visibles y duraderos.</p>
            </section>
            <Footer />
        </div>
    );
}

export default AboutUs;
