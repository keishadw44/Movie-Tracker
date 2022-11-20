import React, {useState, useEffect} from 'react';
import Favorites from './Favorites';
import Login from './sub-components/Login';

function Home () {
    return <>
        <div className='pb-5' >
           <h1> Movie Tracker </h1> 

         
    <Login />
        </div>
        </>;
}

export default Home;
