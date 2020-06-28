import React from 'react'

import profileImg from '../../assets/images/profile.png';
import {info} from '../../assets/profile-info';

const Home = () => {
    return (
        <div className="home-page col-12">
            <div className="font-basic col-12">
                <p className="px-5 pt-5">{info.education}</p>
                <p className="px-5 pb-5">{info.experience}</p>
            </div>
            <div className="col-md-5 col-12">
                <img className="profile-img" src={profileImg} alt={"img"} />
            </div>
        </div>
    )
}

export default Home
