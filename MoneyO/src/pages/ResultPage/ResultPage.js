import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Card } from 'antd';

export default function ResultPage() {

    const [inputs, setInputs] = useState([
        { Ower: "", Amount: "", Owner: "" },
        { Ower: "", Amount: "", Owner: "" },
        { Ower: "", Amount: "", Owner: "" },
      ]);

      useEffect(() =>{
        const fetchData = async() => {
            await axios
            .get(`http://localhost:5000/api/algo/`)
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
        <div>
            <h1>THis is the results page</h1>

            <div className="row p-2" >
            {inputs && inputs.map((input, index) => 
                (
                    <Card title="Default size card" style={{ width: 300 }}>
                    <p>This is the Ower: {input.Ower}</p>
                    <p>Amount: {input.Owner}</p>
                    <p>This is the Owner: {input.Owner}</p>
                    </Card>
                )
            )}
            </div>
           
            {/* {data} */}
        </div>
    )
};
