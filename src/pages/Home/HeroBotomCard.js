import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import './Home.css';

const HeroBotomCard = () => {
    return (
        <div className="grid-cols-1 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5 text-white p-5 bg-white pt-7">
            {/* heroB cart 03  */}
            <div className="card lg:card-side shadow-xl bg-accent p-3 hb-card">
                <figure><img src={clock} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            {/* heroB cart 02  */}
            <div className="card lg:card-side shadow-xl bg-accent p-3 text-white hb-card-hover">
                <figure><img src={marker} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            {/* heroB cart 03  */}
            <div className="card lg:card-side shadow-xl bg-accent p-3 text-white hb-card">
                <figure><img src={phone} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
        </div>
    );
};

export default HeroBotomCard;