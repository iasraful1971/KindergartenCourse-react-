import React, { useEffect, useState } from 'react';
import Single from '../Single/Single';

const HomeService = () => {
    const [services , setServices] = useState([]);
    useEffect(() => {
        fetch('./servicesOne.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className="text-center">
          <h1 style={{marginTop:'30px'}}>Our Services</h1>
          <div className="service-grid">
                        {
                            services.map(service => <Single
                            key={service.id}
                            service={service}
                            ></Single>)
                        }
                    
                </div>
               

        </div>
    );
};

export default HomeService;