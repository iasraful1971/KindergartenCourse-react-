import React from 'react';
import contact from '../../images/undraw_contact_us_15o2.svg';
import Footer from '../Footer/Footer';
import './Contact.css';
const Contact = () => {
    return (
        <div className="contact-container">
            <div className="container contact-area">
                   <h2 style={{textAlign:'center', textTransform:'capitalize' , fontWeight:'bold' , color:'purple' , fontSize:'30px' , paddingBottom: '10px'}}>get touch with us</h2>
                <div className="row row-area">
                   
                    <div className="col-lg-6">
                        <img style={{width:'500px'}} src={contact} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className="form">
                            <div className="d-flex" style={{flexDirection: 'column'}}>
                            <input  placeholder="Your name" type="text" />
                            <input required placeholder="Your Email " type="text" />
                            </div>
                            <textarea placeholder="write something.."></textarea>
                            <br />
                            <button style={{margin:'20px 0'}} className="btn-danger">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        <Footer></Footer>

        </div>
    );
};

export default Contact;