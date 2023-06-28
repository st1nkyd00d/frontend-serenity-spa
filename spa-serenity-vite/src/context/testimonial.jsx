import React, { createContext, useEffect, useState } from "react";
const TestimonialsContext = createContext();

const TestimonialsProvider = ({ children }) => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        try {
            const res = await fetch("http://localhost:3000/obtenerTestimonios");
            const data = await res.json();
            setTestimonials(data);
        } catch (error) {
            console.log(error);
        }
    };

    const createTestimonial = async (testimonial) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:3000/crearTestimonio", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(testimonial),
            });

            const data = await response.json();

            if (data.testimonial) {
                setTestimonials([...testimonials, data.testimonial]);
            }
        } catch (error) {
            console.error("Error al crear el servicio", error);
        }
    };

    const updateTestimonial = async (id, updatedTestimonial) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`http://localhost:3000/${id}/actualizarTestimonio/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(updatedTestimonial),
            });

            const data = await response.json();

            if (data.testimonial) {
                setTestimonials(testimonials.map((testimonial) => (testimonial._id === id ? data.testimonial : testimonial)));
            }
        } catch (error) {
            console.error("Error al editar el servicio", error);
        }
    };

    const deleteTestimonial = async (id) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`http://localhost:3000/${id}/borrarTestimonio`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();

            if (data.testimonial) {
                setTestimonials(testimonials.filter((testimonial) => testimonial._id !== id));
            }
        } catch (error) {
            console.error("Error al eliminar el servicio", error);
        }
    };

    const testimonialContextValue = {
        testimonials,
        createTestimonial,
        updateTestimonial,
        deleteTestimonial,
    };

    return <TestimonialsContext.Provider value={testimonialContextValue}>{children}</TestimonialsContext.Provider>;
};

export { TestimonialsContext };
export default TestimonialsProvider;
