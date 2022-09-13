import React from 'react'
import { Login } from '../components/Login'
import { useContext, useState } from 'react';
import { TopHeader } from '../components/TopHeader';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { BannerBottom } from '../components/BannerBottom';
import { Items } from '../components/Items';
import { BannerBottom1 } from '../components/BannerBottom1';
import { SpecialDeals } from '../components/SpecialDeals';
import { TopProducts } from '../components/TopProducts';
import { TopBrands } from '../components/TopBrands';
import { Newsletter } from '../components/NewsLetter';
import { Product } from '../components/Product';
import { Space } from '../components/Space';
import { Footer } from '../components/Footer';
import { HeroResolution } from '../components/HeroResolution';
    




export default function HomeScreen() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>

     <Header/>
     <HeroResolution/>
     <Banner/>
     <BannerBottom/>
     <Product/>
     <SpecialDeals/>
     <TopBrands/>
     <Space/>
     <Newsletter/>
     <TopProducts/>
    
     
     
    
    
    </>
   

  )
}
