import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import SplashCursor from './SplashCursor'


const Home = () => {

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <SplashCursor />

        </div>
    );
};

export default Home;