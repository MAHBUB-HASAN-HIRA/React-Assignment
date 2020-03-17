import React,{useState, useEffect} from 'react';
import './Body.css';
import User from '../User/User';



const Body = () => {
    const [users, setUser] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data));
      },[]);


    return (
        <div className="body-container">
                <div>
                {
                    users.map(user => <User user={user}></User>)  
                }
                </div>
              
            <div className="user-balance">
               <h4>People Added:</h4>
               <h4>Salary:</h4>
            </div>
            
        </div>
    );
};


export default Body;