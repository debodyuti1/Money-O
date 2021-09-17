import './navbar.styles.scss';
import Vector from '../../assets/Vector.png';
import Button from "../Button/Button"

const NavBar =() => (
  <div className="nav-bar">
  <div className="logo">
  <a href="/" >
       MoneyO
  </a>
   </div>
   <div className="link-bar ">
       <Button large >Get Started</Button>
   </div>
  
  </div>);


export default NavBar;