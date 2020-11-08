import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("mailer.php", data)
      .then((result) => {
        alert("Viesti lähetetty");
      })
      .catch((error) => alert("Viestin lähetys epäonnistui"));
  };

  const [toggleStatus, setToggleStatus] = useState(false);
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
  };

  return (
    <div className="page contact-page p-md-5 p-1">
      <div
        ref={contactInfoContainer}
        className="contact-info-container transition-opacity  
        text-center col-md-6 col-12 offset-md-3"
      >
        {!toggleStatus ? (
          <div>
            <h2>Toimitilat</h2>
            <p>Hämeenkatu 21 A As. 6 15110 Lahti</p>
            <h2>Puhelin</h2>
            <p>+358 405956511</p>
            <h2>Email</h2>
            <p>lahdenpsykoterapia@gmail.com</p>
            <button
              ref={toggleButton}
              className="btn btn-main py-2 px-5"
              onClick={() => handleClick()}
            >
              Ota yhteyttä
            </button>
          </div>
        ) : (
          <div ref={formContainer} className="">
            <button
              className="btn btn-main btn-main__cancel py-1 px-4 mx-3"
              onClick={() => handleClick()}
            >
              {"<-"}
            </button>
            <h2>Lähetä viesti</h2>
            <form
              id="contact-form"
              className="form-group mt-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="form-label col-12 px-0 text-left">
                Etunimi
              </label>
              <input
                id="first-name"
                className="form-control mb-1"
                name="firstName"
                ref={register}
                type="text"
                required
              />
              <label className="form-label col-12 px-0 text-left">
                Sukunimi
              </label>
              <input
                id="last-name"
                className="form-control mb-1"
                name="lastName"
                ref={register}
                type="text"
                required
              />
              <label className="form-label col-12 px-0 text-left">Email</label>
              <input
                id="email"
                className="form-control mb-1"
                name="email"
                ref={register}
                type="email"
                required
              />
              <label className="form-label col-12 px-0 text-left">Viesti</label>
              <textarea
                id="message"
                className="form-control"
                name="message"
                ref={register}
                required
              />
              <div className="text-center mt-2">
                <input
                  ref={toggleButton}
                  className="btn btn-main py-2 px-5 mr-1"
                  onClick={(e) => {}}
                  type="submit"
                  value="Lähetä"
                />

                <button
                  ref={toggleButton}
                  className="btn btn-main py-2 px-5 ml-1"
                  onClick={(e) => {
                    e.preventDefault();
                    reset();
                  }}
                  type="button"
                >
                  Tyhjennä
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
