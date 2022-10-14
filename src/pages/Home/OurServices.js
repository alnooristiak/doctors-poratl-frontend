import React from 'react';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';

const OurServices = () => {
    return (
        <div>
            <div className='text-center bg-white mt-7'>
                <h5 className='font-medium text-[#19D3AE]'>OUR SERVICES</h5>
                <h4 className='text-2xl'>Services We Provide</h4>
            </div>
            <div className="grid-cols-1 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5 text-white p-5 bg-white pt-7">
                {/* heroB cart 03  */}
                <div class="card lg:card-side shadow-xl bg-accent p-3">
                    <figure><img src={cavity} alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Opening Hours</h2>
                        <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </div>
                {/* heroB cart 02  */}
                <div class="card lg:card-side shadow-xl bg-accent p-3 text-white hb-card-hover">
                    <figure><img src={fluoride} alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Opening Hours</h2>
                        <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </div>
                {/* heroB cart 03  */}
                <div class="card lg:card-side shadow-xl bg-accent p-3 text-white">
                    <figure><img src={whitening} alt="Album" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Opening Hours</h2>
                        <p>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;