import './HomePage.css';
import Input from '../../components/input/input.component';
import {useContext} from 'react'
import { AuthContext } from '../../context/AuthContext';

const LandingPage = () => {
  const {user} = useContext(AuthContext)
  console.log(user);
  return(
  <div className="LandingPage">
    <div className="welcome-content">
    <h1 className="TitleOf">Welcome To <span className="logo-edit1">MoneyO</span> </h1>
    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard.</span>
    </div>
    <div className="lab-edit">
    <label>Name</label>
      <label className="lab-edit1">Amount</label>
      <label className="lab-edit2">Name</label>
    </div>
     <Input />   
  </div>
    )};


export default LandingPage;

