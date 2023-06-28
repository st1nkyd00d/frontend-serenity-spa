import { useContext } from "react";
import {TipsContext} from "../../context/tips";

function TipsCard() {
    const {tips} = useContext(TipsContext);
    return (
        <div>
            {tips.map((tips) => (
                <section key={tips._id} className="flex  bg-lavenderMist rounded-xl p-5 m-5 items-center">
                    <p className="mr-3 text-justify text-sm">{tips.tipShared}</p>

                    <img src=".\src\assets\spa11.webp" className="w-[40%] h-[40%]" />
                </section>
            ))}
        </div>
    );
}

export default TipsCard;
