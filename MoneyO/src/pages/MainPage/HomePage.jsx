import './HomePage.scss';
import Input from '../../components/input/input.component';

const LandingPage = () => {

  return(
  <div className="LandingPage">
    <div className="welcome-content">
    <h1>Welcome To <span className="logo-edit1">MoneyO</span> </h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard.</p>
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

