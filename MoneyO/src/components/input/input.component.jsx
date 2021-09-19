import "./input.styles.scss";
import { DeleteFilled, UserAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

const Input = () => {
  const [inputs, setInputs] = useState([
    { Ower: "", Amount: "", Owner: "" },
    { Ower: "", Amount: "", Owner: "" },
    { Ower: "", Amount: "", Owner: "" },
  ]);

  const [Users, setUsers] = useState([]);

  const [userisIn, setUserisIn] = useState(false);
  

  const handleChange = (event, index) => {
    const values = [...inputs];
    values[index][event.target.name] = event.target.value;
    setInputs(values);
  };

  const handleAdd = () => {
    setInputs([...inputs, { Owner: "", Amount: "", Owner: "" }]);
  };
  
  useEffect(() =>{
    const fetchData = async() => {
      await axios
      .get("/users/data")
      .then((res) => {
        setUsers(res.data);
        console.log("THis is the result from endpoint ====>>>>",res);
      })
      .catch((err) => console.log(err));
    };
    
    fetchData();
    
  },[setUsers]);

  console.log(Users);
  const Compare = () => {

    let compareData = [];
    compareData = (inputs.map((input) => compareData.concat(input.Ower)));
    console.log(compareData);

    var n = Users.length;

    var m = inputs.length;

    var inp = [];
    var data = [];
    var owner = []

    for(let i = 0; i < n; i++){
      data.push(Users[i].username);
    }

    for(let i = 0; i < m; i++){
      inp.push(inputs[i].Ower);
      owner.push(inputs[i].Owner);
    }


    console.log("Inputs array: ",inp);
    console.log("Data Array : ", data);
    console.log("Data Array : ", owner);

    for(let i = 0; i < m; i++){
      if(data.includes(inp[i])){
        setUserisIn(true);
        console.log(inp[i] + " is in database.");
      }else{
        setUserisIn(false);
       console.log(inp[i] + " is not in database.");
       break;
      }
      if(data.includes(owner[i])){
        console.log(owner[i] + " is in database.");
        setUserisIn(true)
      }else{
        console.log(owner[i] + " is not in database.");
        setUserisIn(false);       
        break;
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Compare();
    if(userisIn){
    console.log("Inputs==>>", inputs);
    const response = axios
      .post(`/algo/`, inputs)
      .then((response) =>
        console.log("this is the response Id", response.data.id)
      ).then(window.alert("The calculation"))
      .catch((error) => {
        console.error("There was an error! handle it", error);
      });
    } else{
      window.alert("User not found in database!");
      console.log(setUserisIn);
    }
  };

  const handleDelete = (index) => {
    const values = [...inputs];
    values.splice(index, 1);
    setInputs(values);
  };

  return (
    <>
      <form className="InputWrapper">
        {inputs.map((input, index) => (
          <div className="input-edit" id={index}>
            <input
              name="Ower"
              className="inp1"
              type="text"
              value={input.Ower}
              
              onChange={(event) => handleChange(event, index)}
              placeholder={`Person `}
            ></input>
            <input
              name="Amount"
              className="inp2"
              type="text"
              value={input.Amount}
              onChange={(event) => handleChange(event, index)}
              placeholder="Owes Amount"
            ></input>
            <input
              name="Owner"
              className="inp3"
              type="text"
              value={input.Owner}
              onChange={(event) => handleChange(event, index)}
              placeholder={`Person `}
            ></input>

            <Button
              onClick={() => handleDelete(index)}
              size="large"
              style={{ height: "40px" }}
              className="btn-edit"
              shape="circle"
              icon={
                <DeleteFilled style={{ fontSize: "22px", color: "white" }} />
              }
            />
          </div>
        ))}

        <Button
          onClick={() => handleAdd()}
          className="add-btn-edit"
          icon={<UserAddOutlined className="mb-1" />}
        >
          ADD{" "}
        </Button>
        <Button
          onClick={handleSubmit}
          htmlType="submit"
          className="submit-edit"
        >
          {" "}
          CALCULATE
        </Button>
      </form>
    </>
  );
};

export default Input;
