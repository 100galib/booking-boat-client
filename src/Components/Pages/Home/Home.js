import React from 'react';
import BookingCategory from '../BookingCategory/BookingCategory';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <BookingCategory></BookingCategory>
        </div>
    );
};

export default Home;