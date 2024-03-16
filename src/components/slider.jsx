import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Slider = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSlider = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative overflow-hidden">
        <Transition
            show={isOpen}
            enter="transition ease-out duration-300"
            enterFrom="transform translate-x-full"
            enterTo="transform translate-x-0"
            leave="transition ease-in duration-300"
            leaveFrom="transform translate-x-0"
            leaveTo="transform translate-x-full"
        >
            <div className="absolute top-0 left-0 w-full h-full">
            <img src="tu-imagen.jpg" alt="Slider Image" className="w-full" />
            </div>
        </Transition>
        <button
            className="absolute top-0 right-0 bg-black bg-opacity-50 text-white p-2"
            onClick={toggleSlider}
        >
            {isOpen ? 'Cerrar Slider' : 'Abrir Slider'}
        </button>
        </div>
    );
};

export default Slider;
