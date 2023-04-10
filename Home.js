import React from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate()

  return (
<div className = "mainHome">
<h1 className = 'mainHeading'>To-Do List WebApp📝</h1>
<Button className="btn1" onClick={() => { 
  navigate('/Main') }}
  variant="outline-primary" >Get started</Button>

  <p className='footer'>
    Suggestions and feedback would be appreciated : <br></br>
    Mail at : babarpranav.pb@gmail.com
  </p>
    </div>
  )
}

