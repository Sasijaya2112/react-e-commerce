import React from 'react';
import NavigationBar from './NavigationBar';
import TopBox from './TopBox';
import TopCarousel from './TopCarousel';
import PopularCard from './PopularCard';

const LandingPage = () => {
    return (
        <div>
            <NavigationBar />
            <TopBox />
            <TopCarousel />
            <PopularCard/>
        </div>
    );
}

export default LandingPage;
