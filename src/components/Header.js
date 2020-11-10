import React from 'react';
import '../componentStyles/Header.css';

const Header = ({numStays}) => {
    return (
        <div className="Header">
            <h1>Stays in Finland</h1>
            <p>{numStays}+ stays</p>
        </div>
    )
}

export default Header
