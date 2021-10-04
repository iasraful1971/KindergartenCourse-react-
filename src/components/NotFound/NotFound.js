import React from 'react';
import pic from '../../images/404.svg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div style={{display:'flex' ,flexDirection:'column' ,justifyContent:'center' ,alignItems:'center', width:'100%' , height:'100vh'}}>
            <img style={{width:'500px'}} src={pic} alt="" />
            <h1>Page not found</h1>
            <p>The page you want to go is not currently available</p>
                <div className="button-area">
                    <button className="btn-danger">Home page</button>
                    <button className="btn-white">Back</button>
                </div>
        </div>
        
    );
};

export default NotFound;