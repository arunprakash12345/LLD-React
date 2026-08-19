import { useState } from "react";

const useModal = () => {
    const [isOpen, setisOpen] = useState(false);
    function openModal() {
        setisOpen(true);
    }

    function closeModal() {
        setisOpen(false);
    }

    return {
        isOpen,
        openModal,
        closeModal
    };
};

export default useModal;