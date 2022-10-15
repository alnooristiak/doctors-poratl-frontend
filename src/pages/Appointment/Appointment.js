import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
// import { format } from 'date-fns';
import Appointments from './Appointments';

const Appointment = () => {

    const [date, setDate] = useState(new Date());


    return (
        <div>
            <div className="hero-bg hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='deantace chair' />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
            <Appointments date={date} setDate={setDate}></Appointments>
        </div>
    );
};

export default Appointment;