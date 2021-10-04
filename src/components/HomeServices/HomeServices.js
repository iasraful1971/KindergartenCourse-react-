import React, { useEffect, useState } from 'react';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {
    const [services , setServices] =  useState([]);
    useEffect(() => {
    fetch('./servicesOne.JSON')
    .then(res => res.json())
    .then(data => setServices(data));


}, [])

    return (
        <div>
          <div className="row">
          <div className="col-lg- d-flex">
            {
                services.map(services => <HomeService
                    key ={services.id}
                    service ={services}
                ></HomeService>)
            }
            </div>
          </div>

        </div>
    );
};

export default HomeServices;