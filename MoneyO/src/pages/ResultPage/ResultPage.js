import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import line from '../../assets/resultLine.png';
import './ResultPage.css';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton.component';
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"


const ResultPage = () => {
  const {user} = useContext(AuthContext)
    const [inputs, setInputs] = useState([
        { Ower: "", Amount: "", Owner: "" },
        { Ower: "", Amount: "", Owner: "" },
        { Ower: "", Amount: "", Owner: "" },
      ]);

      useEffect(() =>{
        const fetchData = async() => {
            await axios
            .get(`/algo/`)
            .then((res) => {
            setInputs(res.data[0].resultValues);
            console.log("THis is the result from endpoint ====>>>>",res.data[0].resultValues);
      })
      .catch((err) => console.log(err));
        };

        fetchData();
        
      },[setInputs]);

      const data = JSON.stringify(inputs);

      console.log("These are the input fields =====>>>>>>", inputs);
    return (
      <div className = "ProfilePage">
      <div className="container">
      <div className="row">
        <h1>Time to settle up!</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
      </div>

      <div className="container row">
        {
          inputs && inputs.map((input) => 
          (
            <div className="row p-2 ms-2">
              <div className="col col-lg-2">
                <Avatar 
                style={{ backgroundColor: '#A099DA' }} 
                icon={<UserOutlined />}
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}>
                </Avatar>
              </div>

              <div className="col col-lg-2">
                <p>{input.Ower}</p>
                   
                <p style={{color: 'red'}}>-Rs. {input.Amount}</p>
              </div>

              <div className="col col-lg-4">
                <img src={line} alt="line"></img>
              </div>

              <div className="col col-lg-2">
              <Avatar 
                style={{ backgroundColor: '#A099DA' }} 
                icon={<UserOutlined />}
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}>

                </Avatar>
              </div>

              <div className="col col-lg-2 ">
                <p>{input.Owner}</p>
               {
                 input.Ower === user.username ?  <StripeCheckoutButton price={input.Amount}/> : ""
               }
                   
              </div>

              
              </div>


          ))
        }
        
      </div>
      </div>

     

      </div>
    )
};


export default ResultPage;