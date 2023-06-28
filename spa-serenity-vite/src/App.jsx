import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import ControlPanel from "./components/ControlPanel";
import Servicios from "./components/Services";
import Tips from "./components/Tips";
import Contact from "./components/Contact";
import ServicesContext from "../src/context/services";
import TestimonialsContext from "./context/testimonial";
import PromosContext from "./context/promos";
import TipsContext from "./context/tips";
import AuthContext from "./context/auth";

function App() {

    return (
        <div>
            <BrowserRouter>
                <main>
                    <AuthContext>
                        <ServicesContext>
                            <PromosContext>
                                <TestimonialsContext>
                                    <TipsContext>
                                        <Routes>
                                            <Route index element={<Landing />} />
                                            <Route path="/aboutUs" element={<AboutUs />} />
                                            <Route path="/services" element={<Servicios />} />
                                            <Route path="/tips" element={<Tips />} />
                                            <Route path="/contact" element={<Contact />} />
                                            <Route path="/signUp" element={<SignUp />} />
                                            <Route path="/login" element={<Login />} />
                                            <Route path="/CPanel" element={<ControlPanel />} />
                                        </Routes>
                                    </TipsContext>
                                </TestimonialsContext>
                            </PromosContext>
                        </ServicesContext>
                    </AuthContext>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
