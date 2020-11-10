import React from 'react';
import Stays from '../stays.json';
import '../componentStyles/MainScreen.css';
import Header from '../components/Header';

const MainScreen = () => {
    const apartmentList = Stays.map(stays => stays);
    // console.log()
    return (
        <>
            <Header numStays={apartmentList.length} />
            <div className="Container">
                {apartmentList.map((stay,index) =>(
                <main key={index} className="MainArea">
                <img className="ImageApartment" src={stay.photo} alt="apartment"/>
                <div className={stay.superHost ? 'ApartmentInfo' : 'ApartmentInfo2'}>
                    <div className={stay.superHost ? 'ApartmentSuper' : 'Super2'}>
                        <p className={stay.superHost ? 'Super' : null}>{stay.superHost ? 'Super host' : null}</p>
                    </div>

                    <div className="ApartmentType">
                        <p>{stay.type}</p>
                    </div>

                    <div className={stay.superHost ? 'ApartmentRating' : 'ApartmentRating2'}>
                        <span className="material-icons Star">
                            star_rate
                        </span>
                        <p>{stay.rating}</p>
                    </div>
                </div>
                <p className="ApartmentTitle">{stay.title}</p>
            </main>
            ))} 
            </div>
        </>
    )
}

export default MainScreen
