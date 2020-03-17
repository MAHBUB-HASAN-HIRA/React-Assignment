import React,{useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import './User.css';




const User = (props) => {
  console.log(props)
    return (
        
            
            <div className="user-data">
                        <div>
                            <h4>User Photo</h4>
                            <img className="user-image" src={props.user.image} alt=""/>
                           
                        </div>
                        <div className="information">
                            <h2>Name:{props.user.name}</h2>
                            <h4>E-mail:{props.user.email}</h4>
                            <h4>Phone:{props.user.phone}</h4>
                            <h4>Website:{props.user.website}</h4>
                            <button className="btn"><FontAwesomeIcon icon={faPlusSquare}/>Add</button>
                        </div>
            </div>
            
    );
};

export default User;