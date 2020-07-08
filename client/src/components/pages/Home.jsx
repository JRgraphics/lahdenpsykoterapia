import React, { useRef } from 'react'
import profileImg from '../../assets/images/profile.png';
import {info} from '../../assets/profile-info';


const Home = () => {
    const pageContainer = useRef(null);
    return (
        <div ref={pageContainer} className="home-page">
            <div className="row mx-0 mb-3" style={{borderBottom: "2px solid #fff", boxShadow: "0 0 10px #000", overflowX: "none"}}>
                <div className="text-center col-md-4 col-6">
                    <img className="profile-img" src={profileImg} alt={"img"} />
                </div>
                <div className="col-md-8 col-6 d-flex align-items-center">
                    <div>
                    <h2 className="">Psykoterapeutti</h2>
                    <h2 className="">Isto Rantalainen</h2>
                    </div>
                </div>
            </div>

            <div className="info-container text-justify px-5">
                <p>{info.education}</p>
            </div>

            <div className="info-container text-justify px-5">
                <p>{info.experience}</p>
            </div>
        </div>
    )
}

export default Home
