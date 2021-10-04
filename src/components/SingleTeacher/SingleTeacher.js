import React from 'react';
import './SingleTecher.css';
const SingleTeacher = (props) => {
    console.log(props.teacher);
    const {image , name , email ,website , address} = props.teacher;
    return (
        
        <div className="single-teacher">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h2>name: {name}</h2>
                <h6>mail: {email}</h6>
                 <h6>website: {website}</h6>
                 <h6> city: {address.city}</h6>
                 <div style={{padding: '20px 0'}} className="link"><i class="fab fa-twitter"></i> <i class="fab fa-quora"></i> <i class="fab fa-instagram"></i> <i class="fab fa-github"></i></div>
            </div>
            <hr className="dhr" />
            
        </div>
    );
};

export default SingleTeacher;