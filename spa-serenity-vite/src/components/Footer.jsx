import React from "react";

function Footer() {
    return (
        <div className="">
            <footer className="flex flex-col p-5 bg-gradient-to-t from-lightSteelBlue to-languidLavender font-Sarabun font-bold">
                <div className="flex flex-col items-center justify-between ">
                    <img src="./src/assets/Serenity Spa.png" alt="logo" className="w-[30%]" />

                    <ul className="w-[60%] text-center mt-5">
                        <h2 className="text-2xl mb-5">Contacto</h2>
                        <li className="mt-2"> +58 424-7214981</li>
                        <li className="break-words mt-2">asistencia@serenityspa.com</li>
                        <li className="mt-2">Valera Centro </li>
                    </ul>
                </div>
                <div className="flex items-center justify-between font-bold mt-5 text-center">
                    <p>© Copyright. All Rights Reserved.</p>
                    <p>Hecho por Atilio García</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
