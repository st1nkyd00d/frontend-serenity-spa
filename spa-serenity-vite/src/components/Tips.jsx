import Header from "./Header";
import Footer from "./Footer";
import TipsCard from "./cards/TipsCard";
function Tips() {
    return (
        <div>
            <Header />
            <section className="flex flex-col justify-center items-center font-Sarabun">
                <h1 className="m-8 text-2xl font-bold">Consejos y Trucos</h1>

                <p className="text-justify text-xl w-[80%] mb-8">
                    Descubre cómo mantener un equilibrio saludable en tu vida diaria. Desde técnicas de relajación hasta consejos de cuidado de la piel, te brindamos herramientas prácticas para
                    mejorar tu bienestar en casa y en el trabajo. ¡Haz de cada día una experiencia más saludable y feliz!
                </p>

                <TipsCard />
            </section>
            <Footer />
        </div>
    );
}

export default Tips;
