import React from 'react'
import { Login } from '../components/Login'
import { useContext, useState } from 'react';
    




export default function LoginScreen() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    
    <Login setEmail={setEmail} setPassword={setPassword}/>
   

  )
}
