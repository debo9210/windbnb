import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import brandLogo from '../images/logo.png';
import '../componentStyles/NavBar.css';
import '../index.css';
import Stays from '../stays.json';

const Header = () => {
    const [location, setLocation] = useState('');
    const [adultNum, setAdultNum] = useState(0);
    const [childrenNum, setChildrenNum] = useState(0);

    const drawer = document.querySelector('.FilterDrawer');
    const input = document.querySelector(".InputLocation");
    const guestInput = document.querySelector('.InputGuest');

    const openDrawer = ()=>{
        // drawer.style.height = '400px';
        if(document.querySelector('.FilterDrawer') &&
            document.querySelector('body')
        ){
            document.querySelector('.FilterDrawer').style.display = 'block';
            document.querySelector('body').style.backgroundColor = 'rgba(0,0,0,0.4)';
            document.querySelector('body').style.overflow = 'hidden';
        }
        
    };

    const closeDrawer = ()=>{
        if(drawer && 
            input &&
            guestInput &&
            document.querySelector('body')
            ){
            drawer.style.display = 'none';
            document.querySelector('body').style.backgroundColor = '#fff';
            document.querySelector('body').style.overflow = 'scroll';
            input.value = '';
            guestInput.value = '';
        }
        setChildrenNum(0);
        setAdultNum(0);
    };

    const searchHandler = ()=>{
        let input, filter, li, value;
        input = document.querySelector(".InputLocation");
        filter = input.value.toLowerCase();
        li = document.querySelectorAll('.LocationList');
        
        li.forEach(list => {
            value = list.textContent.substring(11);
            if(value.toLowerCase().indexOf(filter) > -1){
                list.style.display = '';
            }else{
                list.style.display = 'none';
            }
        });
    };


    const selectHandler = (e)=>{
        const location = e.target.textContent.substring(11);
        setLocation(location.split(',')[0]);

        if(input){
            input.value = location.split(',')[0];
        }
    };

    const increaseAdultHandler = ()=>{
        setAdultNum(adultNum + 1);
    };

    const decreaseAdultHandler = ()=>{
        if(adultNum === 0) return;
        setAdultNum(adultNum - 1);
    };


    const increaseChildrenHandler = ()=>{
        setChildrenNum(childrenNum + 1);
    };

    const decreaseChildrenHandler = ()=>{
        if(childrenNum === 0) return;
        setChildrenNum(childrenNum - 1);
    };

    const guestNumber = (num1 , num2)=>{
        return num1 + num2;
    };

    const guestNum = guestNumber(adultNum, childrenNum);
    const guests = guestNum > 1 ? 'guests' : 'guest';


    if(guestInput){
        guestInput.value = guestNum + " " + guests;
    }

    const city = Stays.map(x => (`${x.city}, ${x.country}`));
    const newCity = [...new Set(city)];
    // console.log(location)

    

    return (
        <div className="NavBar">
            <Link to='/'>
                <img className="BrandLogo" src={brandLogo} alt="brand"/>
            </Link>

            <ul onClick={openDrawer} className="NavBarMenu">
                <li className="Location">Location</li>
                <li className="AddGuest">Add guests</li>
                <li><span className="material-icons Search">
                search
                </span></li>
            </ul>

            <div className="FilterDrawer">
                <p className="EditSearch">Edit your search</p>
                <button className="Close" onClick={closeDrawer}>
                    <span className="material-icons Cancel">
                        cancel
                    </span>
                </button>

                <div className="DrawerMenu">
                    <div className="InputContainer">
                        <label htmlFor="">Location</label>
                        <input 
                            className="InputLocation" type="text" 
                            placeholder="Add location"
                            // onChange={e => setLocation(e.target.value)}
                            onChange={searchHandler}
                            />
                    </div>

                    <div className="InputContainer">
                        <label htmlFor="">Guests</label>
                        <input 
                            className="InputGuest" type="text" 
                            placeholder="Add guests"
                            // value=''
                            />
                    </div>
                    
                    
                    <span className="material-icons Search2">
                    search
                    </span>
                    <Link to={`/search/${location}`}>
                        <button
                        onClick={closeDrawer}  
                        className="SearchBtn"
                        >
                            Search
                        </button>
                    </Link>
                </div>
                    
                <div className="InputDropDown">
                    <div>
                    {newCity.map((city,i) => (
                            <ul key={i} className="LocationDropDown">
                                <li 
                                    className="LocationList"
                                    onClick={selectHandler}
                                >  
                                    <span className="material-icons LocationOn">
                                        location_on
                                    </span>
                                    {city}
                                </li> 
                            </ul>
                        ))}
                    </div>


                        <div className="GuestDropDown">
                            <div className="Adult">
                                <p className="GuestStatus">Adult</p>
                                <p className="GuestDesc">
                                    Adults Ages 13 or above
                                </p>
                                <button 
                                    className="NumBtn"
                                    onClick={decreaseAdultHandler}
                                    >
                                    &minus;
                                </button>
                                <span className="Num">
                                    {adultNum}
                                </span>
                                <button 
                                    className="NumBtn"
                                    onClick={increaseAdultHandler}
                                    >
                                    &#x0002B;
                                </button>
                            </div>
                            <div className="Children">
                                <p className="GuestStatus">Children</p>
                                <p className="GuestDesc">
                                Children Ages 2-12
                                </p>
                                <button 
                                    className="NumBtn"
                                    onClick={decreaseChildrenHandler}
                                    >
                                    &minus;
                                </button>
                                <span className="Num">
                                    {childrenNum}
                                </span>
                                <button 
                                    className="NumBtn"
                                    onClick={increaseChildrenHandler}
                                    >
                                    &#x0002B;
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Header


