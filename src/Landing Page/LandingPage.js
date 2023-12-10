import React from 'react';
import NavigationBar from './NavigationBar';
import TopBox from './TopBox';
import TopCarousel from './TopCarousel';
import PopularCard from './PopularCard';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <div>
            <NavigationBar />
            <TopBox />
            <TopCarousel />
            <PopularCard/>
            <Footer/>
        </div>
    );
}

export default LandingPage;
