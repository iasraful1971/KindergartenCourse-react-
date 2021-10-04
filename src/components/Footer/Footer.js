import React from 'react';
import footer from '../../images/footer.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row flex">
                    <div className="col-lg-3">
                        <img src={footer} alt="" />
                    </div>
                    <div className="col-lg-3">
                        <ul>
                            <li>About us</li>
                            <li>Our Classes</li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <ul>
                            <li>Recents news</li>
                            <li>Our events</li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <ul>
                            <li>Terms & Condition</li>
                            <li>Privecy & Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hrtag">
            <hr className="hr" />
            </div>
            <div className="copyright">
                <div><p>@ Copyrights 2020 Asraful All rights reserved</p></div>
                <div className="socials"><i class="fab fa-twitter"></i> <i class="fab fa-quora"></i> <i class="fab fa-instagram"></i> <i class="fab fa-github"></i></div>
            </div>
        </div>
    );
};

export default Footer;