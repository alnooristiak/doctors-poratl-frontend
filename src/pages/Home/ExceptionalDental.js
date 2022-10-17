import React from 'react';
import treatment from '../../assets/images/treatment.png'

const ExceptionalDental = () => {
    return (
        <div className='flex justify-center mt-8'>
            <div className="card lg:card-side shadow-xl">
                <figure className='exception-d-img'>
                    <img src={treatment} alt="Album" />
                </figure>
                <div className="card-body content-center">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalDental;