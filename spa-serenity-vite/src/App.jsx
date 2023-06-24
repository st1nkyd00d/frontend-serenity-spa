import { useState } from "react";
import Landing from "./components/Landing";
import AboutUs from "./components/AboutUs";
import Servicios from "./components/Servicios";
import Tips from "./components/Tips";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Landing />
            <Login />
            <SignUp />
            <AboutUs />
            <Servicios />
            <Tips />
            <Contact />
        </div>
    );
}

export default App;
