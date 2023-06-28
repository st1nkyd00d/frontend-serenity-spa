import { useContext, useState } from "react";
import { ServicesContext } from "../context/services";
import { PromosContext } from "../context/promos";
import { TipsContext } from "../context/tips";
import { TestimonialsContext } from "../context/testimonial";
import { FaPlusCircle, FaEdit, FaTrash } from "react-icons/fa";
import CreateServiceModal from "./modals/CreateService";
import EditServiceModal from "./modals/EditService";
import CreatePromoModal from "./modals/CreatePromo";
import EditPromoModal from "./modals/EditPromo";
import CreateTestimonialModal from "./modals/CreateTestimonial"; // Importar el modal de creación de testimonio
import EditTestimonialModal from "./modals/EditTestimonial";
import ModalCreateTip from "./modals/CreateTip";
import ModalEditTip from "./modals/EditTip";

const ControlPanel = () => {
    const { services, updateService, deleteService } = useContext(ServicesContext);
    const { promos, createPromo, updatePromo, deletePromo } = useContext(PromosContext);
    const { tips, createTip, updateTip, deleteTip } = useContext(TipsContext);
    const { testimonials, createTestimonial, updateTestimonial, deleteTestimonial } = useContext(TestimonialsContext); // Obtener los testimonios y las funciones relacionadas
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showCreatePromoModal, setShowCreatePromoModal] = useState(false);
    const [showEditPromoModal, setShowEditPromoModal] = useState(false);
    const [showCreateTestimonialModal, setShowCreateTestimonialModal] = useState(false); 
    const [showCreateTipModal, setShowCreateTipModal] = useState(false); 
    const [showEditTipModal, setShowEditTipModal] = useState(false);
    const [showEditTestimonialModal, setShowEditTestimonialModal] = useState(false); 
    const [editService, setEditService] = useState(null);
    const [editPromo, setEditPromo] = useState(null);
    const [editTestimonial, setEditTestimonial] = useState(null); 
    const [editTip, setEditTip] = useState(null);
    const openCreateModal = () => {
        setShowCreateModal(true);
    };

    const closeCreateModal = () => {
        setShowCreateModal(false);
    };

    const openEditModal = (service) => {
        setEditService(service);
        setShowEditModal(true);
    };

    const closeEditModal = () => {
        setShowEditModal(false);
    };

    const openCreatePromoModal = () => {
        setShowCreatePromoModal(true);
    };

    const closeCreatePromoModal = () => {
        setShowCreatePromoModal(false);
    };

    const openEditPromoModal = (promo) => {
        setEditPromo(promo);
        setShowEditPromoModal(true);
    };

    const closeEditPromoModal = () => {
        setShowEditPromoModal(false);
    };

    const openCreateTestimonialModal = () => {
        setShowCreateTestimonialModal(true);
    };

    const closeCreateTestimonialModal = () => {
        setShowCreateTestimonialModal(false);
    };

    const openEditTestimonialModal = (testimonial) => {
        setEditTestimonial(testimonial);
        setShowEditTestimonialModal(true);
    };

    const closeEditTestimonialModal = () => {
        setShowEditTestimonialModal(false);
    };

    const openCreateTipModal = () => {
        setShowCreateTipModal(true);
    };

    const closeCreateTipModal = () => {
        setShowCreateTipModal(false);
    };

    const openEditTipModal = (tip) => {
        setEditTip(tip);
        setShowEditTipModal(true);
    };

    const closeEditTipModal = () => {
        setShowEditTipModal(false);
    };

    return (
        <div className="relative overflow-x-auto font-Sarabun">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-3 flex">
                            <p>Nombre del servicio</p>
                        </th>
                        <th scope="col" className="px-8 py-3">
                            Precio en $
                        </th>
                        <th scope="col" className="px-8 py-3">
                            Descripción
                        </th>
                        <th scope="col" className="px-3 py-3">
                            <button onClick={openCreateModal} className="bg-[#657F8A] font-ubuntu text-white py-2 px-4 mt-4">
                                <FaPlusCircle />
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service) => (
                        <tr key={service._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 items">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {service.serviceName}
                            </th>
                            <td className="px-6 py-4">{service.price}</td>
                            <td className="px-6 py-4">{service.description}</td>
                            <td className="px-2 py-4 text-lg flex justify-center items-center space-x-4">
                                <button onClick={() => openEditModal(service)}>
                                    <FaEdit />
                                </button>
                                <button onClick={() => deleteService(service._id)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-3 flex">
                            <p>Código de descuento</p>
                        </th>
                        <th scope="col" className="px-8 py-3">
                            Porcentaje de descuento
                        </th>
                        <th scope="col" className="px-3 py-3">
                            <button onClick={openCreatePromoModal} className="bg-[#657F8A] font-ubuntu text-white py-2 px-4 mt-4">
                                <FaPlusCircle />
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {promos.map((promo) => (
                        <tr key={promo._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 items">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {promo.promoCode}
                            </th>
                            <td className="px-6 py-4">{promo.discountAmount}</td>
                            <td className="px-2 py-4 text-lg flex justify-center items-center space-x-4">
                                <button onClick={() => openEditPromoModal(promo)}>
                                    <FaEdit />
                                </button>
                                <button onClick={() => deletePromo(promo._id)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-3 flex">
                            <p>Nombre del revisor</p>
                        </th>
                        <th scope="col" className="px-8 py-3">
                            Descripción
                        </th>
                        <th scope="col" className="px-3 py-3">
                            <button onClick={openCreateTestimonialModal} className="bg-[#657F8A] font-ubuntu text-white py-2 px-4 mt-4">
                                <FaPlusCircle />
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {testimonials.map((testimonial) => (
                        <tr key={testimonial._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 items">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {testimonial.reviewerName}
                            </th>
                            <td className="px-6 py-4">{testimonial.description}</td>
                            <td className="px-2 py-4 text-lg flex justify-center items-center space-x-4">
                                <button onClick={() => openEditTestimonialModal(testimonial)}>
                                    <FaEdit />
                                </button>
                                <button onClick={() => deleteTestimonial(testimonial._id)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-3 flex">
                            <p>Consejo</p>
                        </th>
                        <th scope="col" className="px-3 py-3">
                            <button onClick={openCreateTipModal} className="bg-[#657F8A] font-ubuntu text-white py-2 px-4 mt-4">
                                <FaPlusCircle />
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tips.map((tip) => (
                        <tr key={tip._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 items">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {tip.tipShared}
                            </th>
                            <td className="px-2 py-4 text-lg flex justify-center items-center space-x-4">
                                <button onClick={() => openEditTipModal(tip)}>
                                    <FaEdit />
                                </button>
                                <button onClick={() => deleteTip(tip._id)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <CreateServiceModal onClose={closeCreateModal} visible={showCreateModal} />
            {editService && <EditServiceModal onClose={closeEditModal} visible={showEditModal} service={editService} updateService={updateService} />}

            <CreatePromoModal onClose={closeCreatePromoModal} visible={showCreatePromoModal} createPromo={createPromo} />
            {editPromo && <EditPromoModal onClose={closeEditPromoModal} visible={showEditPromoModal} promo={editPromo} updatePromo={updatePromo} />}

            <CreateTestimonialModal onClose={closeCreateTestimonialModal} visible={showCreateTestimonialModal} createTestimonial={createTestimonial} />
            {editTestimonial && <EditTestimonialModal onClose={closeEditTestimonialModal} visible={showEditTestimonialModal} testimonial={editTestimonial} updateTestimonial={updateTestimonial} />}

            <ModalCreateTip onClose={closeCreateTipModal} visible={showCreateTipModal} createTip={createTip} />
            {editTip && <ModalEditTip onClose={closeEditTipModal} visible={showEditTipModal} tip={editTip} updateTip={updateTip} />}
        </div>
    );
};

export default ControlPanel;
