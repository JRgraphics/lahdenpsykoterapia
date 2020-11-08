import React, { useState, useEffect, useRef } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import profileImg from "../../assets/images/profile.png";
import { info } from "../../assets/profile-info";

const Home = () => {
  const pageContainer = useRef(null);

  const [infoWidth, setInfoWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleInfoContainer, { passive: true });
    return () => {
      window.removeEventListener("resize", handleInfoContainer, {
        passive: true,
      });
    };
  }, []);

  const handleInfoContainer = () => {
    console.log(window.innerWidth);

    setInfoWidth(window.innerWidth);
  };

  return (
    <div ref={pageContainer} className="page home-page">
      <div
        className="row mx-0 mb-3"
        style={{
          borderBottom: "2px solid #fff",
          boxShadow: "0 0 10px #000",
          overflowX: "none",
        }}
      >
        <div className="text-center col-md-4 col-6">
          <img className="profile-img" src={profileImg} alt={"img"} />
        </div>
        <div className="col-md-8 col-6 d-flex align-items-center">
          <div>
            <h2 className="">Psykoterapeutti</h2>
            <h2 className="home__title--name">Isto Rantalainen</h2>
          </div>
        </div>
      </div>

      {infoWidth > 768 ? (
        <>
          <div className="carousel__item info-container text-justify">
            {info.education}
          </div>

          <div className="carousel__item info-container text-justify">
            {info.experience}
          </div>
        </>
      ) : (
        <Carousel
          className={"react-carousel"}
          infiniteLoop={false}
          interval={5000}
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          transitionTime={1000}
        >
          <div className="carousel__item info-container text-justify">
            {info.education}
          </div>

          <div className="carousel__item info-container text-justify">
            {info.experience}
          </div>
        </Carousel>
      )}
    </div>
  );
};

export default Home;
