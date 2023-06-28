import React, { createContext, useEffect, useState } from "react";
const TipsContext = createContext();

const TipsProvider = ({ children }) => {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        fetchTips();
    }, []);

    const fetchTips = async () => {
        try {
            const res = await fetch("http://localhost:3000/obtenerTips");
            const data = await res.json();
            setTips(data);
        } catch (error) {
            console.log(error);
        }
    };

    const createTip = async (tip) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:3000/crearTip", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(tip),
            });

            const data = await response.json();

            if (data.tip) {
                setTips([...tips, data.tip]);
            }
        } catch (error) {
            console.error("Error al crear el tip", error);
        }
    };

    const updateTip = async (id, updatedTip) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`http://localhost:3000/${id}/actualizarTip/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(updatedTip),
            });

            const data = await response.json();

            if (data.tip) {
                setTips(tips.map((tip) => (tip._id === id ? data.tip : tip)));
            }
        } catch (error) {
            console.error("Error al editar el tip", error);
        }
    };

    const deleteTip = async (id) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`http://localhost:3000/${id}/borrarTip`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();

            if (data.tip) {
                setTips(tips.filter((tip) => tip._id !== id));
            }
        } catch (error) {
            console.error("Error al eliminar el tip", error);
        }
    };

    const tipContextValue = {
        tips,
        createTip,
        updateTip,
        deleteTip,
    };

    return <TipsContext.Provider value={tipContextValue}>{children}</TipsContext.Provider>;
};

export { TipsContext };
export default TipsProvider;
