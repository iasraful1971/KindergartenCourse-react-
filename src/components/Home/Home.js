import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../images/undraw_true_friends_c94g.svg';
import '../Footer/Footer';
import Footer from '../Footer/Footer';
import HomeService from '../HomeService/HomeService';
import './Home.css';

const Home = () => {
    return (
        <div className="hero pb-5 mb-5">
            <div className="container">
                <div className="row hero-section">
                    <div className="col-lg-6">
                       <h1>We Envision World’s Best Learning Experience.</h1>
                       <p>Turitor’s courses is for every one from different age groups and with various level of skills.</p>
                       <div>
                   <Link to="/services">
                   <button className="btn-danger"> <i class="fas fa-cogs"></i> view couses</button></Link>
                   <Link to="/teacher">
                   <button className="btn-white"> <i class="fas fa-user"></i> our teachers</button></Link>
                </div>
                    </div>
                    <div className="col-lg-6">
                        <img style={{width:'600px'}} src={hero} alt="" />
                    </div>
                </div>
                
                <HomeService></HomeService>
              
                
            </div>
            <Footer></Footer>
            
        </div>

     
        
    );
};

export default Home;