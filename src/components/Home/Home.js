import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Tasks from '../Tasks/Tasks';

const Home = () => {
    return (
        <div className="container relative">
            <Sidebar/>
            <Tasks/>
        </div>
    );
};

export default Home;