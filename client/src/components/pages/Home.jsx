import React from 'react'

import profileImg from '../../assets/images/profile.png';

const Home = () => {
    return (
        <div className="home-page col-12">
            <div>
                <img className="profile-img" src={profileImg} alt={"img"} />
            </div>
        </div>
    )
}

export default Home
