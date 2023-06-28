import React, { createContext, useEffect, useState } from "react";
const PromosContext = createContext();

const PromosProvider = ({ children }) => {
    const [promos, setPromos] = useState([]);

    useEffect(() => {
        fetchPromos();
    }, []);

    const fetchPromos = async () => {
        try {
            const res = await fetch("http://localhost:3000/obtenerPromos");
            const data = await res.json();
            setPromos(data);
        } catch (error) {
            console.log(error);
        }
    };

    const createPromo = async (promo) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:3000/crearPromo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(promo),
            });

            const data = await response.json();

            if (data.promo) {
                setPromos([...promo, data.promo]);
            }
        } catch (error) {
            console.error("Error al crear el servicio", error);
        }
    };

    const updatePromo = async (id, updatedPromo) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`http://localhost:3000/${id}/actualizarPromo/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(updatedPromo),
            });

            const data = await response.json();

            if (data.service) {
                setPromos(services.map((promo) => (promo._id === id ? data.promo : promo)));
            }
        } catch (error) {
            console.error("Error al editar el servicio", error);
        }
    };

    const deletePromo = async (id) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`http://localhost:3000/${id}/borrarPromo`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            });

            const data = await response.json();

            if (data.promo) {
                setPromos(promo.filter((promo) => promo._id !== id));
            }
        } catch (error) {
            console.error("Error al eliminar el servicio", error);
        }
    };

    const promoContextValue = {
        promos,
        createPromo,
        updatePromo,
        deletePromo,
    };

    return <PromosContext.Provider value={promoContextValue}>{children}</PromosContext.Provider>;
};

export { PromosContext };
export default PromosProvider;
