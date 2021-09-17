import './navbar.styles.css';
import Vector from '../../assets/Vector.png';
import Button from "../Button/Button"

const NavBar =() => (
  <div className="nav-bar row">
  <div className="logo col-lg-6">
  <a href="/" >
       MoneyO
  </a>
   </div>
   <div className="link-bar col-lg-2">
    <span className="navBarLinks">About Us</span>
   </div>
   <div className="link-bar col-lg-2">
   <span className="navBarLinks">Contact Us</span>

   </div>
   <div className="link-bar col-lg-2">
       <Button small >Get Started</Button>
   </div>
  </div>);


export default NavBar;