import React from 'react';
import './Join.css';
import xicon from './xicon.png';
import {BrowserRouter as Router, Route, Link,useHistory, Switch} from 'react-router-dom';

function Join({isUp, handleCodeInput, closePopup}) {
    let history = useHistory();
    return (
        isUp && (
            <section className="popup">
                <div className="join">
                    <h2>Join Group</h2>
                    <input 
                        type="text"
                        placeholder="Enter Group ID"
                        className="groupCodeInput"
                        onChange={handleCodeInput}
                        //onKeyPress={Budget} when key is pressed, 
                        // redirect to budget page
                        />
                        <button className="addBudget" onClick ={()=>{
                            history.push({pathname: "/budget"})
                        }}>
                        add your budget </button>
                    <img className="xIcon" src={xicon} onClick={closePopup} alt=""/>
                </div>
                
            </section>

        )
 
    );
}

export default Join 
