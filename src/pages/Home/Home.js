import React from 'react';
import ExceptionalDental from './ExceptionalDental';
import GetAppointment from './GetAppointment';
import HeroBotomCard from './HeroBotomCard';
import HeroSec from './HeroSec';
import './Home.css';
import OurServices from './OurServices';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='bg-white'>
            <HeroSec></HeroSec>
            <HeroBotomCard></HeroBotomCard>
            <OurServices></OurServices>
            <ExceptionalDental></ExceptionalDental>
            <GetAppointment></GetAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;