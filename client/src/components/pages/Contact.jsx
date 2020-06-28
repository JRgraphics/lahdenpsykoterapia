import React, { useRef, useState } from 'react';

const Contact = () => {
    const [toggleStatus, setToggleStatus] = useState(false)
    const toggleButton = useRef();
    const contactInfoContainer = useRef();
    const formContainer = useRef();

    const handleClick = () => {
        contactInfoContainer.current.style.opacity = 0;
        setTimeout(() => {
            contactInfoContainer.current.style.opacity = 1;
        }, 250);
        setTimeout(() => {
            setToggleStatus(!toggleStatus);
        }, 250);
    }

    return (
    <div className="contact-page p-md-5 p-1">
        <div ref={contactInfoContainer} className="contact-info-container transition-opacity  
        text-center col-md-6 col-12 offset-md-3">
            {
                !toggleStatus ? (
                    <div>
                        <h2>Toimitilat</h2>
                        <p>Hämeenkatu 21 A 21 As. 6 15110 Lahti</p>
                        <h2>Puhelin</h2>
                        <p>+358 405956511</p>
                        <h2>Email</h2>
                        <p>lahdenpsykoterapia@gmail.com</p>
                        <button ref={toggleButton} className="btn btn-main py-2 px-5"
                        onClick={() => handleClick()}>Ota yhteyttä</button>
                    </div>
                ) : (
                    <div ref={formContainer} className="">
                        <button className="btn btn-main btn-main__cancel py-1 px-4 mx-3" onClick={() => handleClick()}>{"<-"}</button>
                        <h2>Lähetä viesti</h2>
                        <form id="contact-form" className="form-group mt-4">
                            <label className="col-12 px-0 text-left">Etunimi</label>
                            <input id="first-name" className="form-control" type="text" />
                            <label className="col-12 px-0 text-left">Sukunimi</label>
                            <input id="last-name" className="form-control" type="text" />
                            <label className="col-12 px-0 text-left">Email</label>
                            <input id="email" className="form-control" type="text" />
                            <label className="col-12 px-0 text-left">Viesti</label>
                            <input id="message" className="form-control" type="text" />
                        </form>
                    </div>
                )
            }
        </div>
    </div>
    )
}

export default Contact