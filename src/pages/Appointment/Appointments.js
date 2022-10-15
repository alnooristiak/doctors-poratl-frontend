import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentCard from './AppointmentCard';

const Appointments = (props) => {
    const [services, setServices] = useState([]);
    useEffect(()=> {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const dateOne = props.date;
    // const dateTwo = props.setDate;
    return (
        <div className='bg-white'>
            <h5 className='text-center mx-auto'>you have selected date {format(dateOne, 'PP')}</h5>
            <div>
                {
                    services.map(service => <AppointmentCard
                    key={service._id}
                    service={service}
                    ></AppointmentCard>)
                }
            </div>
        </div>
    );
};

export default Appointments;