import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import Servicios from "./components/Services";
import Tips from "./components/Tips";
import Contact from "./components/Contact";
import ServicesContext from "../src/context/services";

function App() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await fetch("http://localhost:3000/obtenerServicios");
                const data = await res.json();
                setServices(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchServices();
    }, []);

    return (
        <div>
            <BrowserRouter>
                <main>
                    <ServicesContext.Provider value={services}>
                        <Routes>
                            <Route index element={<Landing />} />
                            <Route path="/aboutUs" element={<AboutUs />} />

                            <Route path="/services" element={<Servicios />} />

                            <Route path="/tips" element={<Tips />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/signUp" element={<SignUp />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </ServicesContext.Provider>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
