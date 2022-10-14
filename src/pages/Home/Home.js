import React from 'react';
import HeroBotomCard from './HeroBotomCard';
import HeroSec from './HeroSec';
import './Home.css';
import OurServices from './OurServices';

const Home = () => {
    return (
        <div>
            <HeroSec></HeroSec>
            <HeroBotomCard></HeroBotomCard>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;