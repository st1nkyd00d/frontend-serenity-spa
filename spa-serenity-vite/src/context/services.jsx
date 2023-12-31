import React, { createContext, useEffect, useState } from "react";
const ServicesContext = createContext();

const ServicesProvider = ({ children }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const res = await fetch("http://localhost:3000/obtenerServicios");
            const data = await res.json();
            setServices(data);
        } catch (error) {
            console.log(error);
        }
    };

    const createService = async (service) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:3000/crearServicio", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(service),
            });

            const data = await response.json();

            if (data.service) {
                setServices([...services, data.service]);
            }
        } catch (error) {
            console.error("Error al crear el servicio", error);
        }
    };

    const updateService = async (id, updatedService) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`http://localhost:3000/${id}/actualizarServicio/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(updatedService),
            });

            const data = await response.json();

            if (data.service) {
                setServices(services.map((service) => (service._id === id ? data.service : service)));
            }
        } catch (error) {
            console.error("Error al editar el servicio", error);
        }
    };

    const deleteService = async (id) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`http://localhost:3000/${id}/borrarServicio`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            });

            const data = await response.json();

            if (data.service) {
                setServices(services.filter((service) => service._id !== id));
            }
        } catch (error) {
            console.error("Error al eliminar el servicio", error);
        }
    };

    const serviceContextValue = {
        services,
        createService,
        updateService,
        deleteService,
    };

    return <ServicesContext.Provider value={serviceContextValue}>{children}</ServicesContext.Provider>;
};

export { ServicesContext };
export default ServicesProvider;
