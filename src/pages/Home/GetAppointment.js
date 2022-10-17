import React from 'react';
import doctor from '../../assets/images/doctor.png'

const GetAppointment = () => {
    return (
        <div className=''>
            <div className="card lg:card-side shadow-xl doctor-bg d-flex justifycontent-beween">
                <figure><img src={doctor} alt="Album" /></figure>
                <div className="mt-8">
                    <h2 className="card-title">New album is released!</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className='btn btn-primari mt-2'>click to appointement</button>
                </div>
            </div>
        </div>
    );
};

export default GetAppointment;