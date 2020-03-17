import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <div className="user-head">
                <h2>User Information</h2>
            </div>
            <div className="user-searce">
                <h4>You Can Know About Our User</h4>
                <input className="input" type="text" placeholder="Searce Here"/>
                <button><FontAwesomeIcon icon={faSearch}/></button>
            </div>
        </div>
    );
};

export default Header;