import './input.styles.scss';
import {DeleteFilled, UserAddOutlined } from '@ant-design/icons';
import {Button} from 'antd';
import { useState,useEffect } from 'react';
import { TransactionContext } from '../../context/TransactionContext/TransactionContext';
import axios from 'axios';


const Input = () =>{

  

  const [inputs, setInputs] = useState([
    { Ower: '', Amount: '', Owner: ''},
    { Ower: '', Amount: '', Owner: ''},
    { Ower: '', Amount: '', Owner: ''}]);
  

  const handleChange =(event, index) => {
    const values=[...inputs];
    values[index][event.target.name] = event.target.value;
    setInputs(values);
  };

  const handleClick = (e) => {
    e.preventDefault();
  }

  // useEffect(() => {
    
  // }, [inputs]);


  const handleAdd =() => {
   setInputs([...inputs, { Owner: '', Amount: '', Owner: ''}])
  };

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log("Inputs==>>", inputs);
    const response = axios.post(`http://localhost:5000/api/algo/`, inputs)
    .then(response => console.log("this is the response Id",response.data.id))
    .catch(error => {
      
      console.error('There was an error! handle it', error);
  });
  }

  const handleDelete =(index) => {
    const values =[...inputs];
    values.splice(index, 1);
    setInputs(values);

  }
    
    
    return(

    
  <>
  
  <form className="InputWrapper">
    {inputs.map((input,index) => (
      <div className="input-edit"id={index}>
    <input name="Ower" className="inp1" type="text" value={input.Ower} onChange={event => handleChange(event, index)} placeholder={`Person `}></input>
    <input name="Amount" className="inp2" type="text" value={input.Amount} onChange={event => handleChange(event, index)} placeholder="Owes Amount"></input>
    <input name="Owner" className="inp3" type="text" value={input.Owner} onChange={event => handleChange(event, index)} placeholder={`Person `}></input>

    <Button 
    onClick={() => handleDelete(index)}
    size="large"
    style={{height: "40px"}}
    className="btn-edit"
    shape="circle"    
    icon={<DeleteFilled style={{ fontSize: '22px',color: "white"}}/>}
    />
     
    
    </div>
    ))}
    
    <Button onClick={() =>handleAdd()} className="add-btn-edit" icon={<UserAddOutlined className="mb-1"/>}>ADD </Button>
    <Button onClick={handleSubmit} htmlType="submit" className ="submit-edit"> CALCULATE</Button>
  </form>
  
  
  
  </>)};

export default Input;