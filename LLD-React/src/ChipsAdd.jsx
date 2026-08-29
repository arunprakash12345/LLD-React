import React, { useState } from 'react'
import './CSS/chipsAdd.css'
import { AiOutlineClose } from 'react-icons/ai'

const ChipsAdd = () => {
    const [inputValue, setInputValue] = useState("");
    const [chipsList, setChipsList] = useState([]);

    function handleInput(e) {
        const data = e.target.value;
        setInputValue(data);
    }

    function handleKeyDown(e) {
        if (e.key === "Enter" && inputValue.trim() !== "") {
            setChipsList(pre => [...pre, inputValue.trim()]);
            setInputValue("");
        }
    }

    function handleChipClick(indexToDelete) {
        const updatedList = chipsList.filter((_, index) => index !== indexToDelete);
        setChipsList(updatedList);
    }

    return (
        <div className="chipsAdd-container">
            <input placeholder="Type and Hit Enter" onKeyDown={handleKeyDown} onChange={handleInput} value={inputValue} />
            <div className="chips-container">
                {
                    chipsList.map((chip, index) => {
                        return (
                            <div key={index} className="chip">
                                <p className="chip-value">{chip}</p>
                                <AiOutlineClose className="chip-close" onClick={() => handleChipClick(index)} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ChipsAdd
