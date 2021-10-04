import { NavLink } from "react-router-dom";
import logo from '../../images/footer.png';
import './Header.css';
const Header = () => {
    return (
       
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top w-100">
     <div className="container">
        <div>
            <img style={{width:'96px' , marginRight:'100px'}} src={logo} alt="" />
        </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <NavLink className="a" to="/home">Home</NavLink>
             <NavLink  className="a" to="/services">Services</NavLink>
             <NavLink  className="a" to="/about">About Us</NavLink>
             <NavLink  className="a" to="/teacher">Teachers</NavLink>
             
             <NavLink  className="a" to="/contact">Get in Touch</NavLink>
            


    </div>
                 
    <div className="social"><i class="fab fa-twitter"></i> <i class="fab fa-quora"></i> <i class="fab fa-instagram"></i> <i class="fab fa-github"></i></div>
    <div>
   
    </div>
  </div>
</nav>
    );
};

export default Header;