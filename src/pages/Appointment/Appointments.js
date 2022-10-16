import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentCard from './AppointmentCard';
import BookModal from './BookModal';

const Appointments = ({ date }) => {

    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);


    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    // const dateOne = props.date;
    // const dateTwo = props.setDate;

    return (
        <div className='bg-white'>
            <h3 className='text-center mx-auto text-green-500'>you have selected date {format(date, 'PP')}</h3>
            <div className="grid-cols-1 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5 text-white p-5 bg-white pt-7">
                {
                    services.map(service => <AppointmentCard
                        date={date}
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></AppointmentCard>)
                }
            </div>
            {treatment && <BookModal 
            setTreatment={setTreatment}
            date={date} 
            treatment={treatment}
            ></BookModal>}
        </div>
    );
};

export default Appointments;