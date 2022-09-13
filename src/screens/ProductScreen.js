import React from 'react'
import { Login } from '../components/Login'
import { useContext, useState } from 'react';
import { Product } from '../components/Product';
    




export default function ProductScreen() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    
    <Product />
   

  )
}
