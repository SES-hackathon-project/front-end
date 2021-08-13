import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loading from './loading.js'

const LoadingButton = (hangout_id) => {

  const id = hangout_id.hangout_id
  const url = `/loading/${hangout_id.hangout_id}`

  return (
    <div>
      <Router>
        <button>
          <Link to={url}>Loading</Link>
        </button>
        <Route path={url} render={
          () => (
            <Loading hangout_id={id} />
          )
        } />
      </Router>
    </div>
  )
}

export default LoadingButton
