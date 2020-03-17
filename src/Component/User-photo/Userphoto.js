import React,{useState,useEffect} from 'react';

const Userphoto = () => {
    const [photo, setUserPhoto] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(pic => setUserPhoto(pic));
    },[]);
   
    return(
        <div>
            
        </div>
    );
        };        

export default Userphoto;