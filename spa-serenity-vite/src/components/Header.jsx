import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTiktok, FaInstagram, FaFacebook, FaMapPin } from "react-icons/fa";
function Header() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <div className="flex justify-between p-3 bg-lightSteelBlue border-t-2 border-b-2 border-solid border-black w-full">
                <p className="hidden">asistencia@serenityspa.com</p>
                <div className="flex">
                    <FaMapPin className="text-xl mr-2" />
                    <h3 className="font-Sarabun font-semibold">Valera Centro</h3>
                </div>
                <div>
                    <button>
                        <a href="https://www.facebook.com/Garcia.A14">
                            <FaFacebook className="text-xl " />
                        </a>
                    </button>

                    <button>
                        <a href="https://www.instagram.com/atilioog/">
                            <FaInstagram className="text-xl mx-2" />
                        </a>
                    </button>
                    <button>
                        <a href="https://www.tiktok.com/@atiliogarcia0">
                            <FaTiktok className="text-xl" />
                        </a>
                    </button>
                </div>
            </div>
            <div></div>
            <nav className="relative flex flex-wrap items-center justify-between  bg-languidLavender border-b-2 border-solid border-black font-Sarabun w-full">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <NavLink to="/" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white w-[15%] ml-3">
                            <img alt="logo" src="./src/assets/Serenity Spa.png" />
                        </NavLink>
                        <button
                            className="text-black cursor-pointer text-3xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none  mr-3"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FaBars />
                        </button>
                    </div>

                    <div className={"lg:flex flex-grow items-center font-Rowdies" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
                        <ul className="flex flex-col lg:flex-row border-t-2 border-b-2 border-solid border-black w-full list-none lg:ml-auto">
                            <li className="nav-item">
                                <NavLink to="/" className="px-3 py-2 flex items-center text-sm uppercase leading-snug text-black hover:opacity-75">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/aboutUs" className="px-3 py-2 flex items-center text-sm uppercase leading-snug text-black hover:opacity-75">
                                    Sobre Nosotros
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className="px-3 py-2 flex items-center text-sm uppercase  leading-snug text-black hover:opacity-75">
                                    Servicios
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/tips" className="px-3 py-2 flex items-center text-sm uppercase leading-snug text-black hover:opacity-75">
                                    Consejos
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/contact" className="px-3 py-2 flex items-center text-sm uppercase leading-snug text-black hover:opacity-75">
                                    ¡Reserva!
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
