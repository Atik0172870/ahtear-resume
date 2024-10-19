import React, { Component } from 'react';
import profile_pic from './assets/linkedIn-pic.png';

function Home() {

    return (
        <div className='d-flex align-items-center justify-content-center home'>
            <div className='wel-come d-flex align-items-center justify-content-center flex-column'>
                <span className='text-uppercase text-warning fw-semibold'>Welcome To My Profile</span>
                <span className='text-uppercase text-dark fw-semibold'>MD AHTEAR RAHMAN</span>
                <span className='text-uppercase text-info fw-semibold' style={{fontSize:'12px'}}>[ Senior Full-Stack Software Engineer (.NET | React | Angular) ]</span>
            </div>
            <img src={profile_pic} alt='test' className='mt-5 mx-auto d-flex justify-content-center home-profile-pic' />
        </div>
    )
}

export default Home;