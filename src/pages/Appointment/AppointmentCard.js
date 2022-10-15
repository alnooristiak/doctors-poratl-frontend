import React from 'react';

const AppointmentCard = ({ service, setTreatment }) => {

    const { _id, name, slots } = service;

    return (
        <div class="lg:card-side shadow-xl bg-accent p-3 hb-card">
            <h5>
                <strong>ID:</strong>{_id}
            </h5>
            <div>
                <h2 class="card-title">
                    <strong>Doctor Name:</strong>{name}
                </h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>No Sloth able able</span>
                    }
                </p>
                <p>
                    {slots.length} {slots.length > 1 ? 'spaces' : 'space'} sloth are avle able.
                </p>
            </div>
            <div class="">
                <p>
                    <strong>Slots:</strong> {slots}
                </p>
                {/* <button 
                onClick={()=> setTreatment(service)}
                disabled={slots.length === 0}
                className='btn btn-warning text-white'
                >Maka Appointment</button> */}

                <label disabled={slots.length === 0} 
                onClick={()=> setTreatment(service)}
                for="book-modal" 
                class="btn modal-button"
                >Maka Appointment</label>
        </div>
        </div >
    );
};

export default AppointmentCard;