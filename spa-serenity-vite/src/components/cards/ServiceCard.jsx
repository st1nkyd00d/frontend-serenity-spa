import { useContext } from "react";
import ServicesContext from "../../context/services";

function ServiceCard() {
    const services = useContext(ServicesContext);

    return (
        <div className="w-[50%] m-5 ">
            {services.map((services) => (
                <div key={services._id} className="bg-lavenderMist p-4 mb-10 rounded-xl flex flex-col justify-between items-center border-r-2 border-b-2 border-black border-opacity-30 ">
                    <h1 className="font-Rowdies font-light text-2xl m-5">{services.serviceName}</h1>
                    <p className="text-justify w-[80%]">{services.description}</p>
                    <p className="font-Rowdies text-2xl mt-5">$ {services.price}</p>
                    <button className="bg-skyBlue p-3 rounded-xl  text-xl font-bold m-5 border-r-2 border-b-4 border-black border-opacity-30">¡Reserva!</button>
                </div>
            ))}
        </div>
    );
}

export default ServiceCard;
