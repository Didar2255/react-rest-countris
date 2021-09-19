import './Country.css'

import React from 'react';

const Country = (props) => {
    const { flag, name, capital, region, population } = props.country
    return (
        <div className='country'>
            <img src={flag} alt="" />
            <h2>Name : {name}</h2>
            <h3>Capital : {capital}</h3>
            <h4>Population : {population} people's</h4>
            <p>Region : {region}</p>
        </div>
    );
};

export default Country;