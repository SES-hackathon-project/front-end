import React, { useState, useEffect } from 'react';
import './Budget.css';
import LoadingButton from "./LoadingButton.js";
import {useForm} from "react-hook-form";



function Budget({group_id, handleKeyBudget}) {
    const {handleSubmit} = useForm();
    const onSubmit = (data) =>{
        console.log("budget:" + data);
        GetStatus(group_id, data["budget_value"]);

    }

    const GetStatus = ({group_id,budget}) => {
        const [groupid, setGroupid] = useState(0);

        const data2 = {
            "group_id": group_id,
            "budget_amount":budget,
        }

        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data2),
          };

          const getInfo = async (options) => {

            const url = "http://localhost:8000/submit_budget/{group_id}"
      
            const response = fetch(url).then(response => response.json())
              .then(json => {
                console.log(json)
                setGroupid(json.group_id)
              })
      
          }
          useEffect(() => {
            getInfo(options)
          }, [])
      
          return(
            <LoadingButton hangout_id={groupid}/>
          )
          
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section className="popup">
                <div className="join">
                    <h2>Budget</h2>
                    <input 
                        name="budget_value"
                        type="number"
                        min="1"
                        placeholder="Enter Budget"
                        className="groupCodeInput"
                        />
                </div>
            </section>
        </form>
    );
}

export default Budget;

