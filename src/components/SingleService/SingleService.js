import React from 'react';
import './SingleService.css';

const SingleService = (props) => {
    const { name , image , description , star , seat ,lessons} = props.service;
    console.log(props.service);
    return (
        <div className="singleService">
            <img style={{width: '350px'}} src={image} alt="" />
            <h2>{name}</h2>
            <h6>{description.slice(0 ,200)}</h6>
            <div className="flex">
                <div className="star">
                    <h5>{star}</h5>
                </div>
                <div>
                    <h6> <i class="fas fa-chair"></i>{seat}</h6>
                </div>
            </div>
            <hr />
            <div className="flex">
                <div>
                <i class="fas fa-heart"></i>
                </div>
                <div><i class="fas fa-address-card"></i>{lessons}</div>
            </div>
        </div>
    );
};

export default SingleService;