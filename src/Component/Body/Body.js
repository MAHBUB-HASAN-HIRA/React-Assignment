import React,{useState, useEffect} from 'react';
import './Body.css';
import User from '../User/User';



const Body = () => {


    const photos = ["https://i.ibb.co/ZJ8bfWQ/cool-hairstyles-for-men-with-long-hair.jpg","https://i.ibb.co/Ky2M9wL/Aamir-Khan-Wallpaper-Photos-2-768x768.jpg","https://i.ibb.co/k1wzwTp/20200313-151409.jpg","https://i.ibb.co/sgVWY7j/936041-jackie-chan.jpg","https://i.ibb.co/Nn3Tbj7/563506.jpg","https://i.ibb.co/D7WKfHr/15-Paul-Walker.jpg","https://i.ibb.co/Qr6Y5mc/7-Paul-Walker.jpg","https://i.ibb.co/gRYRJYp/0-j-Xm1vy-S0-R2-QNFg-VL.jpg","https://i.ibb.co/KsyFPkt/vin-diesel-with-beard-wallpaper-3.jpg","https://i.ibb.co/31FCbCw/Vin-Diesel-HD-Wallpapers-11.jpg"];


    
    const [users, setUser] = useState([]);
    
    const newUsers = users.map((user, index) => {
        
       
        let newsingleuser = {...user, image:photos[index]}
       return newsingleuser;
    })


    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data));
      },[]);

   
    return (
        <div className="body-container">
                <div>
                {
                    newUsers.map(user => <User user={user}></User>)

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