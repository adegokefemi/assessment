import React from 'react';
import pics from '../Assests/images/Logo.png';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div class="container">
            <header  className={classes.header}>
                <h4 className="px-3 m-0">TRIPS</h4>
                <h4 className="px-3 m-0">RECENTLT VIEWEWD</h4>
                <h4 className="px-3 m-0">BOOKINGS</h4>
                <div>
                 <img src={pics} className={classes.logo} alt="A square pics"/>
                </div>
            </header>
            <hr className="hr"/>
        </div>
    );

};

export default Header;