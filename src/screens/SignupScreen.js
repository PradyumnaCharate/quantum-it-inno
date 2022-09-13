import React from 'react';
import { Signup } from '../components/Signup';
import { useContext, useState } from 'react'; 
    




export default function SignupScreen() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
 <Signup setEmail={setEmail} setPassword={setPassword} setName={setName}/>


  )
}
