import React, { useState } from 'react';
import { therapies } from '../../assets/therapies';

const Therapy = () => {
    const [currentSelection, setCurrentSelection] = useState('yksilo');

    const TherapyNaviItem = props => {
        return (
            <li className="col-4 float-left">
                <span id={props.id} onClick={(e) => {setCurrentSelection(e.target.id)}}>{props.title}</span>
            </li>
        )
    }

    return (
    <div className="therapy-page col-12">
        <div className="font-basic p-md-5 p-1">
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
        <div className="therapy-nav">
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