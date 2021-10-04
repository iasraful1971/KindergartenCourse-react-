import React from 'react';
import { Link } from 'react-router-dom';
import about from '../../images/workers-office-02.jpg';
import Footer from '../Footer/Footer';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row about-container">
                    <h1 style={{color:'purple' , textAlign:'center' ,fontWeight:'bold' , padding:'20px 0'}}>About Us</h1>
                    <div className="col-lg-6">
                       <img  style={{width:'500px'}} src={about} alt="" />
                    </div>
                    <div className="col-lg-6 context">
                       <h6>Our Story</h6> 
                       <h2>Unique, truly responsive and an functional Website that impress.</h2>
                       <p>In a word, the whale was seized and sold, and his Grace the Duke of Wellington received the money. Thinking that viewed in ait some particular lights, the case might by a bare possibility in some small degree be deemed, under the circumstances, a rather hard one, an honest clergyman of the town addressed a note to. </p>
                      <Link to="/teacher">
                      <button className="btn-danger">More about us</button></Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;