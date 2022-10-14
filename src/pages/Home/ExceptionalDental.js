import React from 'react';
import treatment from '../../assets/images/treatment.png'

const ExceptionalDental = () => {
    return (
        <div className='flex justify-center mt-8'>
            <div class="card lg:card-side shadow-xl">
                <figure className='exception-d-img'>
                    <img src={treatment} alt="Album" />
                </figure>
                <div class="card-body content-center">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalDental;