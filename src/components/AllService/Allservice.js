import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import SingleService from '../SingleService/SingleService';
import './Allservice.css';

const Allservice = () => {
    const [services , setServices] = useState([]);
      useEffect(() => {
            fetch('./serviceTwo.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    } , [])
    return (
        <div className="service-body">
            <div className="container">
                    <div className="pt-5 mt-4 text-center">
                        <h1 style={{color:'purple' , fontWeight:'800'}}>Our Services</h1>
                        <p className="lead">We enable all École Students to become the best possible version of themselves. We provide an environment where our children develop into empathetic, self-directed, critical thinkers who don’t give up when faced with challenges.</p>
                    </div>
                    <div className="service-grid">
                        {
                            services.map(service => <SingleService
                            key={service.id}
                            service={service}
                            ></SingleService>)
                        }
                  
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Allservice;