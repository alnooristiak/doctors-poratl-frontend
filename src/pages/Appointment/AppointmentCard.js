import React from 'react';

const AppointmentCard = (props) => {
    const { _id, name, slots } = props.service
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h5>
                        <strong>ID:</strong>{_id}
                    </h5>
                    <h2 class="card-title">
                        <strong>Doctor Name:</strong>{name}</h2>
                    
                    <div class="card-actions justify-end">
                    <p>
                        <strong>Slots:</strong> {slots}
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;