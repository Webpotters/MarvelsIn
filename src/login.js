import React from 'react'
import "./styles/login.css"

function login(props){
  return ( props.trigger)?(
    <div className='login'>
        <div className='loginpop'></div>
        <button className='cls-btn'>close</button>
        {props.children}
    </div>
  ) : "";
}

export default login