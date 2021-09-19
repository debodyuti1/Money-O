import "./navbar.styles.css";
import Vector from "../../assets/Vector.png";
import Button from "../Button/Button";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="nav-bar row">
      <div className="logo col-lg-6">
        <a href="/">MoneyO</a>
      </div>
      <div className="link-bar col-lg-2">
        <span className="navBarLinks">About Us</span>
      </div>
      <div className="link-bar col-lg-2">
        <span className="navBarLinks">Contact Us</span>
      </div>
      <div className="link-bar col-lg-2">
        {user ? (
          <Button large>Sign Out</Button>
        ) : (
          <Button large>Get Started</Button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
