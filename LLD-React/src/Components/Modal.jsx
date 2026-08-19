import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import '../CSS/modal.css'

const Modal = ({ closeModal, inputValue }) => {
    const { outside, icon, escape, backdrop } = inputValue;

    return (
        <div className="modal-container">
            <div className="modal-header">
                <h2>Modal Heading</h2>
                {
                    icon && <AiOutlineClose onClick={closeModal} />
                }

            </div>
            <p>Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/ LOR-əm IP-səm) is a dummy or placeholder text commonly used in graphic design, publishing, and web development. It is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words are the truncation of dolorem ipsum ("pain itself"). Lorem ipsum's purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting.</p>
            <button className="close" onClick={closeModal}>Close</button>
        </div>
    )
}

export default Modal
