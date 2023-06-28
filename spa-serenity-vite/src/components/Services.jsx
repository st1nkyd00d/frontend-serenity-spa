import Header from "./Header";
import Footer from "./Footer";
import ServiceCard from "./cards/ServiceCard";
import PromoCard from "./cards/PromoCard";
import TestimonialCard from "./cards/TestimonialCard";

function Servicios() {
    return (
        <div>
            <Header />
            <section className="flex flex-col justify-center items-center font-Sarabun">
                <h1 className="m-8 text-2xl font-bold">Servicios</h1>

                <p className="text-justify text-xl w-[80%] mb-8">
                    En Serenity Spa, nos enorgullece brindar servicios de la más alta calidad, en un ambiente tranquilo y acogedor.. Sumérgete en nuestros lujosos tratamientos faciales, diseñados para
                    rejuvenecer tu piel y restaurar su brillo natural. Nuestros productos de alta calidad, combinados con las manos expertas de nuestros esteticistas, combatirán los signos del
                    envejecimiento, hidratarán profundamente y te dejarán con una tez radiante y saludable.
                </p>

                <img src=".\src\assets\spa10.webp" />

                <ServiceCard />
            </section>

            <section className="flex flex-col justify-center items-center font-Sarabun">
                <h1 className="m-8 text-2xl font-bold text-center">¿Ninguno de nuestros planes se ajusta a ti?</h1>

                <p className="text-justify text-xl w-[80%] mb-8">
                    En Serenity Spa entendemos que cada persona tiene necesidades y preferencias únicas. Por eso, ofrecemos servicios personalizados para adaptarnos a ti. Ponte en contacto con
                    nosotros para crear un plan a medida que satisfaga tus deseos y objetivos de bienestar. Tu satisfacción es nuestra prioridad.
                </p>
            </section>

            <section className="flex flex-col justify-center items-center font-Sarabun">
                <h1 className="m-6 text-2xl font-bold">Promociones</h1>

                <p className="text-justify text-xl w-[80%] mb-8">
                    ¡Aprovecha nuestras promociones especiales y regálate un momento de bienestar a un precio increíble! Llama o envía un correo con el código de descuento para descubrir nuestras
                    ofertas exclusivas en servicios de masajes, tratamientos faciales y corporales. Renueva tu cuerpo y mente sin comprometer tu bolsillo. ¡No te pierdas estas ofertas limitadas y
                    reserva tu experiencia rejuvenecedora hoy mismo!
                </p>
            </section>

            <section className="bg-gradient-to-b from-lightSteelBlue  to-skyBlue  flex flex-col items-center pt-5 pb-5">
                <PromoCard />
            </section>

            <section className="flex flex-col justify-center items-center font-Sarabun">
                <h1 className="m-8 text-2xl font-bold text-center">¿Qué dicen nuestros clientes?</h1>

                <p className="text-justify text-xl w-[80%] mb-8">
                    En Serenity Spa, nuestros clientes comparten su satisfacción con nuestra experiencia única. Valoran la relajación profunda, la atención personalizada y la calidad de nuestros
                    servicios. Nos enorgullece crear momentos inolvidables para cada uno de nuestros clientes. Descubre por qué nos eligen y reserva tu experiencia de bienestar hoy mismo.
                </p>
            </section>

            <section className="bg-gradient-to-b from-lightSteelBlue  to-skyBlue flex flex-col items-center mb-10">
                <TestimonialCard />
            </section>

            <Footer />
        </div>
    );
}

export default Servicios;
