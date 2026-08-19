import React, { useState, useEffect } from 'react'
import useModal from './Hooks/useModal'
import Modal from './Components/Modal'
import './CSS/modal.css'

const ModalUI = () => {


    const [inputValue, setInputValue] = useState({
        outside: true,
        escape: true,
        icon: true,
        backdrop: true
    });
    const {
        isOpen,
        openModal,
        closeModal
    } = useModal();

    function handleChange(e) {
        const { value } = e.target;
        setInputValue((prev) => ({
            ...prev, [value]: !prev[value]
        }))
    }

    useEffect(() => {
        if (!inputValue.escape) return;
        function handleEscape() {
            closeModal();
        }
        window.addEventListener("keydown", handleEscape);
        return () => {
            window.removeEventListener("keydown", handleEscape);
        }
    }, [inputValue.escape, isOpen, closeModal]);

    function handleModal() {
        openModal();
    }
    return (
        <>
            <div>
                <div className="input-box">
                    <span>Close dialog on outside click</span>
                    <input type="checkbox" value="outside" checked={inputValue.outside} onChange={handleChange} />
                </div>
                <div className="input-box">
                    <span>Close dialog on escape</span>
                    <input type="checkbox" value="escape" checked={inputValue.escape} onChange={handleChange} />
                </div >
                <div className="input-box">
                    <span>Show close icon</span>
                    <input type="checkbox" value="icon" checked={inputValue.icon} onChange={handleChange} />
                </div>
                <div className="input-box">
                    <span>Show backdrop</span>
                    <input type="checkbox" value="backdrop" checked={inputValue.backdrop} onChange={handleChange} />
                </div>
                <button className="input-box" onClick={handleModal}>Show modal</button>

            </div>
            {isOpen && (
                <>
                    {inputValue.backdrop && <div className="modal-backdrop" onClick={() => {
                        if (inputValue.outside) {
                            closeModal();
                        }
                    }} />}
                    <Modal closeModal={closeModal} inputValue={inputValue} />
                </>

            )}
        </>
    )
}

export default ModalUI
