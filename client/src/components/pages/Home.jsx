import React from 'react'
import profileImg from '../../assets/images/profile.png';
import {info} from '../../assets/profile-info';

const Home = () => {
    return (
        <div className="home-page">
            <div className="">
                <h2 className="text-center">Psykoterapeutti</h2>
                <h2 className="text-center">Isto Rantalainen</h2>
            </div>
            <div className="text-center">
                <img className="profile-img" src={profileImg} alt={"img"} />
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
