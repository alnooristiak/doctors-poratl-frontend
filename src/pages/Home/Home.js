import React from 'react';
import ExceptionalDental from './ExceptionalDental';
import HeroBotomCard from './HeroBotomCard';
import HeroSec from './HeroSec';
import './Home.css';
import OurServices from './OurServices';

const Home = () => {
    return (
        <div className='bg-white'>
            <HeroSec></HeroSec>
            <HeroBotomCard></HeroBotomCard>
            <OurServices></OurServices>
            <ExceptionalDental></ExceptionalDental>
        </div>
    );
};

export default Home;