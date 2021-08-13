import React, { useState } from 'react';
import './App.css';
import Join from './Join';
//import Routes from './Routes';

//loading, remove later
import LoadingButton from "./loading/loading_button.js"

function App() {
  const [state, setState] = useState({
    isJoining: false,
    groupCode: '',
    budget: ''
  });

  // opens popup for user to enter group code after
  // join button is clicked on home screen
  const openJoin = () => {
    setState(prevState => {
      return { ...prevState, isJoining: true }
    });
  }

  // stores the user's group ID entered at group code popup
  const handleCodeInput = (e) => {
    setState(prevState => {
      return { ...prevState, groupCode: e.target.value };
    });

    // console.log(state.groupCode);
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, isJoining: false };
    })
  }
  // possible budget input handler
  // requires budget to have handleBudget as prop value 
  // const handleBudget = (e) => {
  //     setState(prevState => {
  //       return {...prevState, handleBudget: e.target.value};
  //     });

  //     // console.log(state.budget);
  //   }

  return (
    // home page 
    // need to add functionality for create group button

    <div className="App">
      <h1 className="title">budget hangout<span style={{ color: "#005FCC" }}>.</span></h1>
      <button className="JoinButton" onClick={openJoin}>Join Group</button>
      <button className="CreateButton">Create Group</button>
      <LoadingButton hangout_id={370493} />
      <Join isUp={state.isJoining} handleCodeInput={handleCodeInput} closePopup={closePopup} />
    </div>

  )
}
export default App;


