import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Countris.css';

const Countris = () => {
    const [countris, setCountris] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountris(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <h1>Explor all countris all over the world</h1>
            <h3>Total Country : {countris.length}</h3>
            <hr />
            <div className='country-container'>

                {countris.map(country => <Country
                    key={country.name}
                    country={country}
                >
                </Country>)}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Countris;