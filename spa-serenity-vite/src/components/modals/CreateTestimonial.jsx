import React, { useState, useContext } from "react";
import { TestimonialsContext } from "../../context/testimonial";

function ModalCreateTestimonial({ visible, onClose }) {
    const { createTestimonial } = useContext(TestimonialsContext);

    const [formData, setFormData] = useState({
        description: "",
        reviewerName: "",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await createTestimonial(formData);
            limpiarCampos();
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    const limpiarCampos = () => {
        setFormData({
            description: "",
            reviewerName: "",
        });
    };

    const handleOnClose = (e) => {
        if (e.target.id === "modalContainer") {
            limpiarCampos();
            onClose();
        }
    };

    if (!visible) return null;

    return (
        <div id="modalContainer" onClick={handleOnClose} className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
            <div className="w-4/5 flex flex-col bg-[#3E5762] border-2 border-black p-2">
                <h2 className="font-ubuntu text-white text-center mb-4">Crear nueva reseña</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col font-yusei-magic">
                        <label className="text-white ml-2" htmlFor="reviewerName">
                            Nombre del que escribe la reseña
                        </label>
                        <input className="m-2 px-2 py-1" type="text" name="reviewerName" id="reviewerName" value={formData.reviewerName} onChange={handleChange} />
                        <label className="text-white ml-2" htmlFor="description">
                            Reseña
                        </label>
                        <input className="m-2 px-2 py-1" type="text" name="description" id="description" value={formData.description} onChange={handleChange} />
                    </div>
                    <button className="bg-[#657F8A] text-white font-ubuntu mt-2 py-1 px-7">Crear</button>
                </form>
            </div>
        </div>
    );
}

export default ModalCreateTestimonial;
