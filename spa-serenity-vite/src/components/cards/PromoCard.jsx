import { useContext } from "react";
import {PromosContext} from "../../context/promos";

function PromoCard() {
    const {promos} = useContext(PromosContext);
    return (
        <div className="w-[70%] m-5">
            {promos.map((promos) => (
                <section key={promos._id} className="mb-12 bg-lavenderMist flex flex-col justify-around items-center border-4 border-midnightBlue rounded-xl h-44">
                    <h1 className="font-bold text-2xl">Promo 1</h1>
                    <h2 className="text-xl font-IBMPSans font-bold">{promos.promoCode}</h2>

                    <p className="bg-midnightBlue w-full text-center p-2 text-white text-xl font-Rowdies font-semibold ">{promos.discountAmount}% OFF</p>
                </section>
            ))}
        </div>
    );
}

export default PromoCard;
