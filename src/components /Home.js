import React from 'react'
import Registration from './auth/Registration'

function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <h1>Status: {props.loggedInStatus}</h1>
      <Registration />
    </div>
  );
}

export default Home