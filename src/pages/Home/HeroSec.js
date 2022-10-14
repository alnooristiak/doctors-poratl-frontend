import React from 'react';
import heroimg from '../../assets/images/chair.png';

const HeroSec = () => {
    return (
        <div className="hero-bg hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={heroimg} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-dark">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn text-white btn-primary uppercase">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSec;