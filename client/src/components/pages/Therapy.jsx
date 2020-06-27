import React, { useState, useRef } from 'react';
import { therapies } from '../../assets/therapies';

const Therapy = () => {
    const [currentSelection, setCurrentSelection] = useState('yksilo');
    const therapyItemContainer = useRef();

    const handleClick = (value) => {
        therapyItemContainer.current.style.opacity = 0;
        setTimeout(() => {
            therapyItemContainer.current.style.opacity = 1;
        }, 250);
        setTimeout(() => {
            setCurrentSelection(value);
        }, 250);
    }

    const TherapyNaviItem = props => {
        return (
            <li className="cursor-pointer col-4 float-left">
                <h2 id={props.id} onClick={(e) => handleClick(props.id)}>{props.title}</h2>
            </li>
        )
    }

    return (
    <div className="therapy-page col-12">
        <div ref={therapyItemContainer} className="therapy-item-container transition-opacity font-basic p-md-5 p-1">
            {
                currentSelection === 'yksilo' ? (
                    <span>{therapies.yksilo}</span>
                ) : currentSelection === 'pari' ? (
                    <span>{therapies.pari}</span>
                ) : currentSelection === 'perhe' ? (
                    <span>{therapies.perhe}</span>
                ) : (
                    null
                )
            }
        </div>
        <div className="therapy-nav text-center col-12">
            <ul className="col-12 row">
                <TherapyNaviItem id={"yksilo"} title={"Yksilö"} />
                <TherapyNaviItem id={"pari"} title={"Pari"} />
                <TherapyNaviItem id={"perhe"} title={"Perhe"} />
            </ul>
        </div>
    </div>
    )
}

export default Therapy