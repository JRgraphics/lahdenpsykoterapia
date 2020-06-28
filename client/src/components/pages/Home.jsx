import React from 'react'

import logo from '../../assets/images/logo_white.png';
import profileImg from '../../assets/images/profile.png';
import {info} from '../../assets/profile-info';

const Home = () => {
    return (
        <div className="home-page">
            <div className="row">
                <div className="col-md-8 col-6 mx-auto text-center">
                    <img className="home-page__logo px-3 mx-auto mt-2" src={logo} alt={"logo"} />
                </div> 
            </div>
            <div className="">
                <div className="col-md-8 offset-md-2 col-12 mx-auto row">
                    <div className="col-8 row align-items-center text-center">
                        <div className="mx-auto">
                            <h2 className="text-center">Psykoterapeutti</h2>
                            <h2 className="text-center">Isto Rantalainen</h2>
                        </div>
                    </div>
                    <div className="col-4">
                        <img className="profile-img" src={profileImg} alt={"img"} />
                    </div>
                </div>
            </div>
            <div className="info-container text-justify col-md-8 offset-md-2 col-12 pt-3">
                <p>{info.education}</p>
                <p>{info.experience}</p>
            </div>
        </div>
    )
}

export default Home
