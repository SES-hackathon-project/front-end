import React, {useState} from 'react';
import './App.css';
import Budget from './Budget';
import CreateHangout from './CreateHangout';
import Join from './Join';
import {BrowserRouter as Router, Route, Link, useHistory, Switch} from 'react-router-dom';
import LoadingButton from './LoadingButton';
import Loading from './Loading'
import Reccomendation from './Recs'
function App() {
  const [state, setState] = useState ({
    isJoining: false,
    groupCode: '',
    budget: ''
  } );

  // opens popup for user to enter group code after
  // join button is clicked on home screen
  const openJoin = () => {
    setState(prevState => {
      return {...prevState, isJoining: true}
    });
  }

  // stores the user's group ID entered at group code popup
  const handleCodeInput = (e) => {
    setState(prevState => {
      return {...prevState, groupCode: e.target.value};
    });
    
    console.log(state.groupCode);
  }

  const closePopup = () => {
    setState(prevState => {
      return {...prevState, isJoining: false};
    })
  }

  // const handleKeyBudget = (e) => {
  //   if(e.key === 'Enter') {
    
  //     setState(prevState => {
  //       return {...prevState, budget: e.target.value};
  //     })

  //     console.log(state.budget);
  //   }
  // }

  return (

    // need to add functionality for create group button

   <Router>
    <body className="homePage">
      <div className="App">
        <h1 className="title">budget hangout<span style={{color: "#005FCC"}}>.</span></h1>
        <button className="JoinButton" onClick={openJoin}>Join Group</button>
      <Join isUp={state.isJoining} handleCodeInput={handleCodeInput} closePopup={closePopup}/>

        <Switch>
        <Route 
          path = "/budget"
          render={(props) => (
            <Budget group_id = {state.group_id} />
          )}
        />
        <Route path = "/CreateHangout" component={CreateHangout}/>
        <Route path ="/" exact component = {HandleCreateButton} />
        <Route path = "/loading/${hangout_id.hangout_id}" component = {Loading}/>
        <Route path = "/Recs" component={HandleClickRecs}/>
        </Switch>
      </div>
    </body> 
    </Router>

  );
}

function HandleClickRecs() {
  let history1 = useHistory();
  function handleClick() {
    history1.push("/Recs");
  }
  return (
    <div>
          <LoadingButton hangout_id={370493} onClick={HandleClickRecs} />
    </div>
  )
}



function HandleCreateButton() {
  let history = useHistory();
  function handleClick() {
    history.push("/CreateHangout");
  }


  return (
    <div>
      <button className="CreateButton" onClick={handleClick}>Create Group</button>
    </div>
  )
}

export default App;


