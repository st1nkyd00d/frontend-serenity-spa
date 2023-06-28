import { useContext } from "react";
import {TestimonialsContext} from "../../context/testimonial";
function TestimonialCard() {
    const {testimonials} = useContext(TestimonialsContext);
    console.log(testimonials)

    return (
        <div className="w-[100%] m-5 flex flex-col items-center justify-center font-Sarabun ">
            {testimonials.map((testimonials) => (
                <div key={testimonials._id} className="w-[50%] bg-lavenderMist my-5 rounded-xl flex flex-col justify-between items-center border-r-2 border-b-2 border-black border-opacity-30 ">
                    <img className="w-[70%] mt-5 rounded border-midnightBlue border-2" src=".\src\assets\reviewer.jpeg" alt="" />
                    <h1 className="text-xs m-5 text-center">{testimonials.description}</h1>
                    <p className="ml-16 mb-3 text-sm font-bold">{testimonials.reviewerName}</p>
                </div>
            ))}
        </div>
    );
}

export default TestimonialCard;
