import React, { useState } from 'react';
import './CSS/transferList.css'
const TransferList = () => {
    const cityArr = [
        {
            city: "USA",
            pane: "left"
        },
        {
            city: "UAE",
            pane: "left"
        },
        {
            city: "India",
            pane: "left"
        },
        {
            city: "Australia",
            pane: "left"
        },
        {
            city: "Canada",
            pane: "left"
        }
    ];
    const [left, setLeft] = useState(cityArr);
    const [right, setRight] = useState([]);
    const [selected, setSelected] = useState([]);
    function handleClick(e) {
        const selectedCity = e.currentTarget.dataset.city;
        setSelected(prev => [...prev, selectedCity]);
    }
    function handleAddSelected() {
        const toKeep = left.filter(item => !selected.includes(item.city));
        const toMove = left.filter(item => selected.includes(item.city));
        setLeft(toKeep);
        setRight([...right, ...toMove]);
        setSelected([]);
    }
    function handleRemoveSelected() {
        const toKeep = right.filter(item => !selected.includes(item.city));
        const toMove = right.filter(item => selected.includes(item.city));
        setRight(toKeep);
        setLeft([...left, ...toMove]);
        setSelected([]);
    }
    function handleAddAll() {
        setRight([...right, ...left]);
        setLeft([]);
    }
    function handleRemoveAll() {
        setLeft([...right, ...left]);
        setRight([]);
    }

    return (
        <div className="transfer-container">
            <div className="left-pane">
                {
                    left.map((city) => {
                        return (<label key={city.city} data-city={city.city} className="values" onClick={handleClick}>
                            <input type="checkbox" name="cities" />
                            <span>{city.city}</span>
                        </label>
                        );
                    })
                }

            </div>
            <div className="button-container">
                <button onClick={handleAddAll} >Add all</button>
                <button onClick={handleAddSelected}>Add selected</button>
                <button onClick={handleRemoveSelected}>Remove selected</button>
                <button onClick={handleRemoveAll}>Remove all</button>
            </div>
            <div className="right-pane">
                {
                    right.map((city) => {
                        return (<label key={city.city} data-city={city.city} className="values" onClick={handleClick}>
                            <input type="checkbox" name="cities" />
                            <span>{city.city}</span>
                        </label>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default TransferList;
